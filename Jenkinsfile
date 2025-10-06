pipeline {
    agent any
    tools{
        nodejs 'Node24'

    }

    environment {
        PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;${env.PATH}"
        DOCKERHUB_CREDENTIALS_ID = 'Docker_hub'
        DOCKER_IMAGE = 'oomis1/auction_frontend'
        DOCKER_TAG = 'latest'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ErkkilaT/Ohjelmistotuotantoprojekti'
            }
        }
        stage('Run node install'){
            steps {
                dir('auction-frontend') {
                    script{
                        if(isUnix()) {
                            sh 'npm install'
                        } else {
                            bat 'npm install'
                        }
                    }
                }
            }
        }
        stage('Build') {
            steps {
                dir('auction-frontend') {
                    script {
                        if (isUnix()) {
                            sh 'npm run build'
                        } else {
                            bat 'npm run build'
                        }
                    }
                }
            }
        }



        stage('Build Docker Image') {
            steps {
                script {
                    if (isUnix()) {
                        sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    } else {
                        bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    }
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', env.DOCKERHUB_CREDENTIALS_ID) {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                    }
                }
            }
        }
    }


}