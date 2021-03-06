'use strict'

app.controller('BrowseController', function($scope, $routeParams, toaster, Question, Auth){
  $scope.searchQuestion = '';
  console.log("Browse.js console log: here");
  $scope.questions = Question.all;
  $scope.signedIn = Auth.signedIn;
  // Above is a function, not a variable. same as $scop.signedIn = function() { return Auth.signedIn();} ,
  // $scope.listMode = true;
  // we took out the code above because we didn't want to use it

  if($routeParams.questionId){
    var question = Question.getQuestion($routeParams.questionId).asObject();
    // $scope.listMode = false;
    setSelectedQuestion(question);
  }

  function setSelectedQuestion(question) {
    $scope.selectedQuestion = question;

    // if($scope.signedIn()) {
    //   $scope.isTaskCreator = Task.isCreator;
    //   $scope.isOpen = Task.isOpen;
    // }
  }

  // function createAnswer(answer) {
  // be sure to add Answer as a dependency
  // }

  $scope.upvoteQuestion = function(question){
     Question.upvoteQuestion(question);
   }

});
