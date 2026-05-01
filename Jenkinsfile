pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                echo "🔧 Building frontend assets (Docker will build the image)"
                sh 'docker compose build --pull frontend'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                echo "🚀 Starting frontend via Docker Compose..."
                sh 'docker compose down || true'
                sh 'docker compose up -d --no-deps --force-recreate frontend'
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
