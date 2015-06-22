// 'use strict';
//
// app.factory('Comment', function(FURL, $firebase) {
//   var ref = new Firebase(FURL);
//
//   var Comment = {
//     comments: function(questionID) {
//       return $firebase(ref.child('comments').child(questionID)).$asArray();
//     },
//
//     addComment: function(questionId, comment) {
//       var question_comments = this.comments(questionId);
//       comment.datetime = Firebase.ServerValue.TIMESTAMP;
//
//       if(question_comments) {
//         return question_comments.$add(comment);
//       }
//     }
//
//   };
//
//   return Comment;
// });
