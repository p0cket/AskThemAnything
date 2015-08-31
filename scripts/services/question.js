'use strict';

app.factory('Question', function(FURL, $firebaseObject, $firebaseArray, Auth) {
  var ref = new Firebase(FURL);
  var questions = $firebaseArray(ref.child('questions'));
  var user = Auth.user;

  var Question = {
    all: questions,

    getQuestion: function(questionId) {
      var resResult = $firebaseObject(ref.child('questions').child(questionId));
      return resResult;
    },

    createQuestion: function(question) {
      question.datetime = Firebase.ServerValue.TIMESTAMP;
      question.rank = 1;
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
    // createComment: function(questionId, comment) {
    //    resCom = $firebase(ref.child('comments').child(questionId)).$asObject();
    //   return resCom;
    // },
    //

    upvoteQuestion: function(question) {
      var q = this.getQuestion(question.$id);
      q.rank = q.rank++;
      return q.$save({rank: q.rank});
    },
    //


    isCreator: function(question) {
      return (user && user.provider && user.uid === question.poster);
    },

    isOpen: function(question) {
      return question.status === "open";
    }

    // upVote: function(question) {
    //   question.rank += 1;
    //   return question.rank;
    // }

  };

  return Question;

});
