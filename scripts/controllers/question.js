'use strict';

app.controller('QuestionController', function($scope, $firebase, FURL, $location, $routeParams) {

  var ref = new Firebase(FURL);
  var fbQuestions = $firebase(ref.child('questions')).$asArray();
  var questionId = $routeParams.questionId;

  $scope.questions = fbQuestions;

  var fbComments = $firebase(ref.child('comments')).$asArray();

  $scope.comments = fbComments;
  // $scope.comments = Comment.comments(questionId);

  if(questionId) {
    $scope.selectedQuestion = getQuestion(questionId);
  }

  function getQuestion(questionId) {
    return $firebase(ref.child('questions').child(questionId)).$asObject();
  };

  $scope.postQuestion = function(question) {
    // $scope.question.username = auth.username
    // $scope.question.page =  $routeParams.amaName [remember to inject $routeParams into this function]
    $scope.questions.$add(question);
    $location.path('/');
  };

  $scope.updateQuestion = function(question) {
    // only can be done if specific user has permission to do this.
    $scope.selectedQuestion.$save(question);
    $location.path('/');
  };

  $scope.addComment = function() {
    $scope.comments.$add(comment);
    // var comment = {
    //   content: $scope.content
    //   // name
    //   // gravatar
    //
    // };
    // Comment.addComment($scope.selectedQuestion.id, comment)
  }

  // $scope.addComment = function(comment) {
  //   //
  //
  //   $scope.comment.page = questionId;
  //
  //   // $scope.comment.username = auth.username
  //   $scope.questions.comments.$add(comment);
  //   // $scope.comment.username = auth.username
  //   // $scope.question.comments.$add(comment);
  //
  //   // What do I need in comment? the comment, the page id, the username,
  // };

});

// we could probably do ng-repeat="tasks in tasks.$person"

//
//
// 'use strict';
//
// app.controller('TaskController', function($scope, $firebase, FURL, $location, $routeParams) {
//
// 	var ref = new Firebase(FURL);
// 	var fbTasks = $firebase(ref.child('tasks')).$asArray();
// 	var taskId = $routeParams.taskId;
//
// 	$scope.tasks = fbTasks;
//
// 	if(taskId) {
// 		$scope.selectedTask = getTask(taskId);
// 	}
//
// 	function getTask(taskId) {
// 		return $firebase(ref.child('tasks').child(taskId)).$asObject();
// 	};
//
// 	$scope.postTask = function(task) {
// 		$scope.tasks.$add(task);
// 		$location.path('/');
// 	};
//
// 	$scope.updateTask = function(task) {
// 		$scope.selectedTask.$save(task);
// 		$location.path('/');
// 	};
//
// });
