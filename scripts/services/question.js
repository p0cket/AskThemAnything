'use strict';

app.factory('Question', function(FURL, $firebase, Auth) {
  console.log();
  var ref = new Firebase(FURL);
  var questions = $firebase(ref.child('questions')).$asArray();
  console.log("This is a console.log where it works:", questions);
  var user = Auth.user;

  var Question = {
    all: questions,

    getQuestion: function(questionId) {
      var resResult = $firebase(ref.child('questions').child(questionId)).$asObject();
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
      debugger;
      var q = this.getQuestion(questionId);
      return q.$update({rank: this.rank++});
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
