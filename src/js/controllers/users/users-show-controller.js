angular
.module('letsTalk')
.controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['$stateParams', 'User', '$scope', 'CurrentUserService'];
function usersShowCtrl($stateParams, User, $scope, CurrentUserService) {
  const vm = this;
  //
  // //gets currentFreelancer using CurrentFreelancerService
  // if (CurrentUserService.currentUser) {
  //   console.log('current user (in users show controlleer) is', CurrentUserService.currentUser);
  //   vm.currentUser = CurrentUserService.currentUser.user;
  // }

  User
    .get({id: $stateParams.id})
    .$promise
    .then(response => {
      vm.user = response;
    });

}
