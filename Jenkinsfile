pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    stages {
        stage('build') {
            steps {
                echo 'building application'
                sh 'node -v'
                sh 'npm -v'
                sh 'docker'
            }
        }

        stage('build docker image') {
            steps {
                echo 'building docker image'
                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'docker build -t hacklight/demo-app:1.0 .'
                    sh 'docker login -u "$USER" --password "$PASS"'
                    sh 'docker push hacklight/demo-app:1.0'
                }
            }
        }

        stage('deploy') {
            steps {
                echo 'deploying application'
            }
        }
    }
}
