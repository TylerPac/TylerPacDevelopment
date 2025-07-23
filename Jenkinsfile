pipeline {
  agent any

  stages {
    stage('Start Shared MySQL DB') {
      steps {
        sh 'docker compose up -d mysql'
      }
    }
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
