'use strict';

app.factory('Question', function(FURL, $firebase, Auth) {

  var ref = new Firebase(FURL);
  var questions = $firebase(ref.child('questions')).$asArray();
  var user = Auth.user;

  var Question = {
    all: questions,

    getQuestion: function(questionId) {
      return $firebase(ref.child('questions').child(questionId));
    },

    createQuestion: function(question) {
      question.datetime = Firebase.ServerValue.TIMESTAMP;
      return questions.$add(question);
    },

    editQuestion: function(question) {
      var q = this.getQuestion(question.$id);
      return q.$update({title: question.title, description: question.description});
    },

    cancelQuestion: function(questionId) {
      var q = this.getquestion(questionId);
      return q.$update({status: "cancelled"});
    },

    //

    isCreator: function(question) {
      return (user && user.provider && user.uid === question.poster);
    },

    isOpen: function(question) {
      return question.status === "open";
    }


  };

  return Question;

});
