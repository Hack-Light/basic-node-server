pipeline {
  agent any
  stages("build") {
    steps {
      echo "building application"
      sh "node -v"
      sh "npm -v"
    }
  }
  
  stages("build docker image") {
    steps {
      echo "building docker image"
      withCredentials([usernamePassword(credentialsId: "docker-hub", passwordVariable: "PASS", usernameVariable: "USER")]){
        sh 'docker build -t hacklight/demo-app:1.0 .'
        sh "echo $PASS | docker login -u $USER --password-stdin"
        sh 'docker push hacklight/demo-app:1.0'
      }
      
    }
  }
  
   stages("deploy") {
    steps {
      echo "deploying application"
    }
  }
  
}