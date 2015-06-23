'use strict'

app.factory('Question', function(FURL, $firebase) {
  var ref = new Firebase(FURL);
  var questions = $firebase(ref.child('questions')).$asArray();

  var Question = {
    all: questions,
    // the variable 'all' becomes the questions array from Firebase
    create: function(question) {
      return questions.$add(question);
    },
    get: function(questionId){
      return $firebase(ref.child('questions').child(questionId)).asObject();
    },
    delete: function(question){
      return questions.$remove(question);
    }


  };

  return Question;
});

// now when we access this service from our controller we will be able to use
// these methods to interact with our server in real itme with 3 way data binding
