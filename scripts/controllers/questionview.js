'use strict';

app.controller('QuestionviewController', function($scope, $routeParams, toaster, Question, Auth, Comment) {

  console.log("routeParams", $routeParams);
  $scope.questions = Question.all;
  $scope.signedIn = Auth.signedIn;
  // Above is a function, not a variable. same as $scop.signedIn = function() { return Auth.signedIn();} ,
  // $scope.listMode = true;
  // we took out the code above because we didn't want to use it

  // $scope.comments = Comment.all;
  // $scope.comments = Comment.comments($routeParams.questionId);
  // console.log("This is scope.comments ", $scope.comments);


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
    $scope.comments = Comment.comments(question.$id);
    console.log("Is this even running? If so $scope.comments = ", $scope.comments);
    $scope.selectedCommentarray = Comment.getCommentarray(questionId);
  }

  // function createComment(questionId, comment) {
  //   Comment.createComment($scope.comment,)
  //   // $scope.se
  // }
  $scope.createComment = function() {
    // var comment = {
    //   content: $scope.content,
      // name: $scope.user.profile.name,
      // gravatar: $scope.user.profile.gravator
    // };

    Comment.createComment($scope.selectedQuestion.$id, $scope.comment).then(function(ref) {
      toaster.pop('success', 'Comment created successfully.');
      $scope.comment = {};
    });
  };

  //
  // $scope.addComment = function() {
  //   var comment = {
  //     content: $scope.content,
  //     name: $scope.user.profile.name,
  //     gravatar: $scope.user.profile.gravatar
  //   };
  //
  //   Comment.addComment($scope.selectedTask.$id, comment).then(function() {
  //     $scope.content = '';
  //   });
  // };
//



})
