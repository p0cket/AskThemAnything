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

    getCommentById: function(questionId, commentId) {
      console.log("CommentId getCommentById: " + commentId );
      var resCom = $firebase(ref.child('comments').child(questionId).child(commentId)).$asObject();
      return resCom;
    },

    createComment: function(questionId, comment){
      debugger;
      var question_comments = this.comments(questionId);
      debugger;
      comment.datetime = Firebase.ServerValue.TIMESTAMP;
      comment.name = Auth.user.profile.name;
      comment.gravatar = Auth.user.profile.gravatar;
      comment.parentId = 0;
      /////////////////
      // if(comment.mom){
      //   comment.mom = parentCommentRef;
      //   comment.son = comment.mom + 1;
      //
      // }
      // else {
      //   comment.mom = "mom";
      //
      // }
      /////////////
      if(question_comments) {
        debugger;
        return question_comments.$add(comment);
        // comment.comments.$add(comment);
      }
      // return comments.$add(comment);

      // reference to the parent. The UID of the parent probably. onclick(addComment)
      //  { (parentcommentid).$add(comment)}

      // /////////
      // addmoreComments: function(questionId, parentcommentId, comment){
      //   var commentItem = createComment(questionId, comment);
      //   var parentComment = getCommentById(questionId, parentcommentId);
      //   parentComment.subcomments.$add(commentItem);
      // }
      // //////////


// how do I get the subTree

      // individualCommentarray = this.getCommentarray(questionId);
      // comment.datetime = Firebase.ServerValue.TIMESTAMP;
      // return individualCommentarray.$add(comment);

      // do stuff to create a comment
    },

    // createSubcomment: function(parentCom, subcomment){
    //   subcomment.datetime = Firebase.ServerValue.TIMESTAMP;
    //   subcomment.name = Auth.user.profile.name;
    //   subcomment.gravatar = Auth.user.profile.gravatar;
    //   if(parent.parentId > 0 and not null){
    //     subcomment.parentId = parentCom.$id;
    //   }
    //   else {
    //     subcomment.parentId = 1;
    //     // Fails when parentId equals nothing, assigning the
    //     // parent comment to 1;
    //   }
    // }

    // updateComment: function(parentCom, subcomment) {
    //
    //   // add unique identifier
    //   debugger;
    //   subcomment.datetime = Firebase.ServerValue.TIMESTAMP;
    //   subcomment.name = Auth.user.profile.name;
    //   subcomment.gravatar = Auth.user.profile.gravatar;
    //   subcomment.subcomment = {};
    //
    //   parentCom.subcomment.push(subcomment);
    //   return parentCom.update({});
    //   // .then has an issue because there is no promise here
    //
    //   // adding a comment
    //   // var question_comments = this.comments(questionId);
    //   // debugger;
    //   // comment.datetime = Firebase.ServerValue.TIMESTAMP;
    //   // comment.name = Auth.user.profile.name;
    //   // comment.gravatar = Auth.user.profile.gravatar;
    //   // if(question_comments) {
    //   //   return question_comments.$add(comment);
    //     // comment.comments.$add(comment);
    //   // }
    // }


    // deleteComment: function(comment) {
    //   // do stuff to delete a comment
    // }
  };
  return Comment;
});
