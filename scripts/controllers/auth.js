'use strict';

app.controller('AuthController', function($scope, $location, toaster, Auth) {

  if(Auth.user.provider) {
    $location.path('/');
  }

  $scope.register = function(user) {
    Auth.register(user)
      .then(function() {
        toaster.pop('success', "Registered successfully")
        $location.path('/');
      }, function(err) {
        toaster.pop('error', "Oops! Something went wrong.");
      });
  };

  $scope.login = function(user) {
    Auth.login(user)
      .then(function() {
        toaster.pop('success', "Logged in successfully");
        $location.path('/');
      }, function(err) {
        toaster.pop('error', "Oops! Something went wrong.");
      });
  };

  $scope.changePassword = function(user) {

    Auth.changePassword(user)
      .then(function() {

        // Reset form
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        toaster.pop('success', "Password changed successfully");
      }, function(err) {
        toaster.pop('error', "Oops! Something went wrong.");
        // errMessage(err);
      });
  };

});

// This controller gives the proper functions to the specific page, while the service gives the general functions. like a cookbook.
// if(Auth.user.provider) <---i'm not SO sure, but I think it means if the user CHECK
// $scope.register registers a user , $scope.login logs in a user, $scope.changePassword changes the password
