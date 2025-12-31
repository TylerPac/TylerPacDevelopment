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
                sh 'docker compose pull'
                sh 'docker compose build --pull'
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful."
        }
        failure {
            echo "❌ Deployment failed."
        }
    }
}
