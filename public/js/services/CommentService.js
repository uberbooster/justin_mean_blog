(function() {
  angular.module('ngBlog')
        .factory('CommentService', CommentService);

  CommentService.$inject = ['$http'];

  function CommentService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/comments/';

    var service = {
      getAPostComments: getAPostComments,
      createComment: createComment,
      updateComment: updateComment,
      deleteComment: deleteComment
    };
    return service;

    function getAPostComments(postId){
      return $http.get(baseUrl + postId);
    }
    function createComment(commentObj){
      return $http.post(baseUrl, commentObj);
    }
    function updateComment(commentId, commentObj){
      return $http.put(baseUrl + commentId, commentObj);
    }
    function deleteComment(commentId){
      return $http.delete(baseUrl + commentId);
    }
  }
}());
