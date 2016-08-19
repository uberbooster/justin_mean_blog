
(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService'];

  function SimpleController($scope, UserService){
    $scope.message = 'Hey! Angular Works!';

    UserService.getAllUsers()
              .then(function(response){
                console.log(response);
              });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'lil@jon434365.com'
    };
    UserService.createUser(userObj)
              .then(function(response){
                console.log(response);
              });

  }
})();
