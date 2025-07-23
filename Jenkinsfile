pipeline {
    agent any
    tools {
        maven 'Maven 3.9'
    }

    environment {
        MYSQL_SERVICE = "shared_mysql"
        MYSQL_PORT = "3306"
    }

    stages {
        stage('Build Spring Boot Backend') {
            steps {
                dir('mainsite') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                echo "🚀 Building and starting all services via Docker Compose..."
                sh 'docker compose down || true'
                sh 'docker compose up -d --build'
            }
        }
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
