pipeline {
    agent any
    tools {
        maven 'Maven 3.9'
    }
    environment {
        MYSQL_SERVICE = "SirPacsterHomeLabDatabaseMySQL"
        MYSQL_PORT = "3306"
    }

    stages {
        stage('Start MySQL if not running') {
            steps {
                script {
                    def running = sh(
                        script: "docker ps --filter 'name=${MYSQL_SERVICE}' --filter 'status=running' -q",
                        returnStdout: true
                    ).trim()

                    if (!running) {
                        echo "🔄 MySQL is not running. Starting via Docker Compose..."
                        sh 'docker compose up -d mysql'
                    } else {
                        echo "✅ MySQL already running."
                    }
                }
            }
        }

        stage('Build Mainsite App') {
            steps {
                dir('mainsite') {
                    sh 'mvn clean package -DskipTests'    // Assuming Maven Wrapper is used And skipTests is desired
                }
            }
        }

        stage('Build and Deploy Backend Docker Image') {
            steps {
                dir('mainsite') {
                    sh 'docker build -t tylerpacdevwebsite-backend .'
                    sh 'docker stop tylerpacdevwebsite-backend || true'
                    sh 'docker rm tylerpacdevwebsite-backend || true'
                    sh 'docker run -d --name tylerpacdevwebsite-backend -p 8081:8080 --network backend tylerpacdevwebsite-backend'
                }
            }
        }

        stage('Build and Deploy Frontend Docker Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t tylerpacdevwebsite-frontend .'
                    sh 'docker stop tylerpacdevwebsite-frontend || true'
                    sh 'docker rm tylerpacdevwebsite-frontend || true'
                    sh 'docker run -d --name tylerpacdevwebsite-frontend -p 3000:80 --network backend tylerpacdevwebsite-frontend'
                }
            }
        }

        // Later:
        // stage('Build Momentum App') {
        //     steps {
        //         dir('momentum-site') {
        //             sh './mvnw clean package -DskipTests'
        //         }
        //     }
        // }
    }

    post {
        success {
            echo "✅ Deployment successful."
            httpRequest httpMode: 'POST',
                        contentType: 'APPLICATION_JSON',
                        requestBody: """{
                            "job": "${env.JOB_NAME}",
                            "branch": "${env.BRANCH_NAME}",
                            "build": "${env.BUILD_NUMBER}",
                            "status": "SUCCESS",
                            "url": "${env.BUILD_URL}"
                        }""",
                        url: 'https://n8n.tylerpac.dev/webhook/TylerPacDevelopment'
        }
        failure {
            echo "❌ Deployment failed."
            httpRequest httpMode: 'POST',
                        contentType: 'APPLICATION_JSON',
                        requestBody: """{
                            "job": "${env.JOB_NAME}",
                            "branch": "${env.BRANCH_NAME}",
                            "build": "${env.BUILD_NUMBER}",
                            "status": "FAILURE",
                            "url": "${env.BUILD_URL}"
                        }""",
                        url: 'https://n8n.tylerpac.dev/webhook/TylerPacDevelopment'
        }
    }
}
