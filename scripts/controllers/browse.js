'use strict'

app.controller('BrowseController', function($scope, $routeParams, toaster, Question, Auth){

  $scope.searchtQuestion = '';
  $scope.questions = Question.all;
  $scope.signedIn = Auth.signedIn;
  // Above is a function, not a variable. same as $scop.signedIn = function() { return Auth.signedIn();} ,
  // $scope.listMode = true;
  // we took out the code above because we didn't want to use it


});
