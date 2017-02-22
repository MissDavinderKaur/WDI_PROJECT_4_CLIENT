angular
.module('letsTalk')
.controller('usersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'User', '$scope', 'CurrentUserService'];
function UsersShowCtrl($stateParams, User, $scope, CurrentUserService) {
  const vm = this;

  //gets currentUSer using CurrentUserService
  if (CurrentUserService.currentUser) {
    vm.currentUser = CurrentUserService.currentUser;
  }

  User
    .get({id: $stateParams.id})
    .$promise
    .then(response => {
      vm.temp = response.user;
      console.log('this is vm.temp', vm.temp);
      vm.temp.issues.forEach(function(issue){
        issue.messages.sort(function(a, b){
          return a.id-b.id;
        });
      });
      vm.temp.issues.sort(function(a, b){
        return a.id-b.id;
      });
      vm.user = vm.temp;
      console.log('THIS IS THE USER', vm.user);
    });

}
