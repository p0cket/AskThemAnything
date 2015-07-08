'use strict';

app.factory('Comment', function(FURL, $firebase, Auth) {
  var ref = new Firebase(FURL);
  // var comments = $firebase(ref.child('comments')).$asArray();
  // var user = Auth.user;

  var Comment = {
    // all: comments,
    comments: function(questionId) {
      return $firebase(ref.child('comments').child(questionId)).$asArray();
    },

    getCommentarray: function(questionId) {
      console.log("QuestionID getCommentarray: " + questionId );
      var resCom = $firebase(ref.child('comments').child(questionId)).$asObject();
      return resCom;
      // var resResult = $firebase(ref.child('questions').child(questionId)).$asObject();
      // Comment.getCommentarray(questionId)
      // do stuff to get comments for a question
    },

    createComment: function(questionId, comment){
      var question_comments = this.comments(questionId);
      comment.datetime = Firebase.ServerValue.TIMESTAMP;
      comment.name = Auth.user.profile.name;
      comment.gravatar = Auth.user.profile.gravatar;
      if(question_comments) {
        return question_comments.$add(comment);
      }
      // return comments.$add(comment);

// how do I get the subTree

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
