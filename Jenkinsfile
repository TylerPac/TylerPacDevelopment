pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Running a dummy build...'
            }
        }
    }

    post {
        success {
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
