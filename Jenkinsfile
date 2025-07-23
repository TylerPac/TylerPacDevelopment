
 
}
pipeline {
    agent any

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
                dir('Mainsite') {
                    sh './mvnw clean package -DskipTests'    // Assuming Maven Wrapper is used And skipTests is desired
                }
            }
        }

        stage('Build and Deploy Mainsite Docker Image') {
            steps {
                dir('Mainsite') {
                    sh 'docker build -t TylerPacDevWebsite-app .'
                    sh 'docker stop TylerPacDevWebsite || true'
                    sh 'docker rm TylerPacDevWebsite || true'
                    sh 'docker run -d --name TylerPacDevWebsite -p 8081:8080 --network infrastructure-shared_main_backend TylerPacDevWebsite-app'
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
            echo "✅ MySQL container is running."
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
            echo "❌ Failed to bring up MySQL."
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
