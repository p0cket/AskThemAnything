'use strict';

app.controller('QuestionviewController', function($scope, $routeParams, toaster, Question, Auth, Comment) {

  console.log("routeParams", $routeParams);
  $scope.questions = Question.all;
  $scope.signedIn = Auth.signedIn;
  // Above is a function, not a variable. same as $scop.signedIn = function() { return Auth.signedIn();} ,
  // $scope.listMode = true;
  // we took out the code above because we didn't want to use it

  $scope.comments = Comment.all;


  if($routeParams.questionId){
    var question = Question.getQuestion($routeParams.questionId);
    // var question = Question.getQuestion($routeParams.questionId).asObject();
    console.log("Here is the QuestionviewController q object:", question);
    // $scope.listMode = false;
    setSelectedQuestion(question);

    // We pull the question comments into the page by the Id of the question
    setSelectedCommentarray($routeParams.questionId);
  }

  function setSelectedQuestion(question) {
    $scope.selectedQuestion = question;

    // if($scope.signedIn()) {
    //   $scope.isTaskCreator = Task.isCreator;
    //   $scope.isOpen = Task.isOpen;
    // }
  }

  function setSelectedCommentarray(questionId){
    $scope.selectedCommentarray = Comment.getCommentarray(questionId);
  }

  // function createComment(questionId, comment) {
  //   Comment.createComment($scope.comment,)
  //   // $scope.se
  // }
  $scope.createComment = function() {
    Comment.createComment($scope.comment).then(function(ref) {
      toaster.pop('success', 'Comment created successfully.');
      $scope.comment = {};
    });
  };




})
