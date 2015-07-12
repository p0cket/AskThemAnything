'use strict';

app.factory('Answer', function(FURL, $firebase, Auth) {
  var ref = new Firebase(FURL);

  var Answer = {

    comments: function(questionId) {

    }
  }
  return Answer;
});
//

    // createComment: function(questionId, comment){
    //   var question_comments = this.comments(questionId);
    //   comment.datetime = Firebase.ServerValue.TIMESTAMP;
    //   comment.name = Auth.user.profile.name;
    //   comment.gravatar = Auth.user.profile.gravatar;
    //   if(question_comments) {
    //     return question_comments.$add(comment);
    //   }
    //
    // },
