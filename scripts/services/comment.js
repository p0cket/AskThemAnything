'use strict';

app.factory('Comment', function(FURL, $firebase, Auth) {
  var ref = new Firebase(FURL);
  var comments = $firebase(ref.child('comments')).$asArray();
  var user = Auth.user;

  var Comment = {
    all: comments,

    getCommentarray: function(questionId) {
      console.log("QuestionID getCommentarray: " + questionId );
      var resCom = $firebase(ref.child('comments').child(questionId)).$asObject();
      return resCom;
      // var resResult = $firebase(ref.child('questions').child(questionId)).$asObject();
      // Comment.getCommentarray(questionId)
      // do stuff to get comments for a question
    },

    createComment: function(comment){
      comment.datetime = Firebase.ServerValue.TIMESTAMP;
      return comments.$add(comment);

      // individualCommentarray = this.getCommentarray(questionId);
      // comment.datetime = Firebase.ServerValue.TIMESTAMP;
      // return individualCommentarray.$add(comment);

      // do stuff to create a comment
    },

    deleteComment: function(comment){
      // do stuff to delete a comment
    }
  };
  return Comment;
});
