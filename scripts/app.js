'use strict';

var app = angular
  .module('AskThemAnything', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://askthemanything.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'QuestionController'
      })
      .when('/questionview/:questionId', {
        templateUrl: 'views/questionview.html',
        controller: 'QuestionController'
      })
      .when('/edit/:questionId', {
        templateUrl: 'views/edit.html',
        controller: 'QuestionController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController',
      })
      .when('/login', {
        templateUrl: 'views/register.html',
        controller: 'AuthController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
//

// 'use strict';
//
// var app = angular
//   .module('TaskNinjaApp', [
//     'ngAnimate',
//     'ngResource',
//     'ngRoute',
//     'firebase'
//   ])
//   .constant('FURL', 'https://task-ninja.firebaseio.com/')
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/browse.html',
//         controller: 'TaskController'
//       })
//       .when('/post', {
//         templateUrl: 'views/post.html',
//         controller: 'TaskController'
//       })
//       .when('/edit/:taskId', {
//         templateUrl: 'views/edit.html',
//         controller: 'TaskController'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
