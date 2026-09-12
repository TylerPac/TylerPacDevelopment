pipeline {
    agent {
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                  containers:
                    - name: kaniko
                      image: gcr.io/kaniko-project/executor:debug
                      command: ["sleep"]
                      args: ["99d"]
                      securityContext:
                        # Kaniko fakes being a container runtime (builds the image by
                        # manipulating its own rootfs), which needs syscalls a default
                        # restricted/seccomp'd container isn't allowed to make - hence
                        # "permission denied" with zero kaniko-level logging around it.
                        runAsUser: 0
                        privileged: true
                      volumeMounts:
                        - name: ghcr-docker-config
                          mountPath: /kaniko/.docker
                    - name: git
                      image: alpine/git:2.45.2
                      command: ["sleep"]
                      args: ["99d"]
                      env:
                        - name: GH_TOKEN
                          valueFrom:
                            secretKeyRef:
                              name: github-pat
                              key: token
                  volumes:
                    - name: ghcr-docker-config
                      secret:
                        secretName: ghcr-docker-config
                        items:
                          - key: .dockerconfigjson
                            path: config.json
            '''
        }
    }

    environment {
        IMAGE = "ghcr.io/tylerpac/tylerpac-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                container('git') {
                    checkout scm
                }
            }
        }

        stage('Build & Push Image') {
            steps {
                container('kaniko') {
                    sh '''
                        SHORT_SHA=$(echo "$GIT_COMMIT" | cut -c1-7)
                        /kaniko/executor \
                            --verbosity=debug \
                            --context=dir://$(pwd)/frontend \
                            --dockerfile=Dockerfile \
                            --destination=$IMAGE:$SHORT_SHA \
                            --destination=$IMAGE:latest
                    '''
                }
            }
        }

        stage('Update GitOps repo') {
            steps {
                container('git') {
                    sh '''
                        SHORT_SHA=$(echo "$GIT_COMMIT" | cut -c1-7)

                        git clone https://x-access-token:$GH_TOKEN@github.com/TylerPac/VPSInfrastructure.git infra
                        cd infra/manifests/tylerpacdevelopment

                        sed -i "s#image: ghcr.io/tylerpac/tylerpac-frontend:.*#image: ghcr.io/tylerpac/tylerpac-frontend:$SHORT_SHA#" deployment.yaml

                        git config user.email "jenkins@tylerpac.dev"
                        git config user.name "Jenkins"

                        if git diff --quiet; then
                            echo "No change to deploy."
                        else
                            git commit -am "Deploy tylerpac-frontend $SHORT_SHA"
                            git push
                        fi
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Built ${IMAGE}:latest and updated VPSInfrastructure - Argo CD will roll it out."
        }
        failure {
            echo "Pipeline failed."
        }
    }
}
