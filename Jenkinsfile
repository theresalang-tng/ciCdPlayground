pipeline {
    agent any
    tools {
        nodejs 'yarn'
    }

    stages {
        stage('install') {
            steps {
                sh 'yarn'
            }
        }

        stage('unit tests') {
            steps {
                sh 'yarn test'
            }
        }

        stage('integration tests') {
            steps {
                sh 'yarn build'
                sh 'yarn test:e2e'
            }
        }
    }

    post {
        always {
            junit 'reports/*.xml'
        }
    }
}