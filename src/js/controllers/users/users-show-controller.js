angular
.module('letsTalk')
.controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['$stateParams', 'User', '$scope', 'CurrentUserService'];
function usersShowCtrl($stateParams, User, $scope, CurrentUserService) {
  const vm = this;

  //gets currentUSer using CurrentUserService
  if (CurrentUserService.currentUser) {
    vm.currentUser = CurrentUserService.currentUser.user;
  }

  User
    .get({id: $stateParams.id})
    .$promise
    .then(response => {
      vm.user = response;
    });

}
