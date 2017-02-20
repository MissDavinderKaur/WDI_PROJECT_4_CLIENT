angular
  .module('letsTalk')
  .controller('usersEditCtrl', usersEditCtrl);

usersEditCtrl.$inject = ['$stateParams', '$state', '$http', 'User', 'CurrentUserService'];

function usersEditCtrl($stateParams, $state, $http, User, CurrentUserService) {
  const vm = this;

  console.log('Current user at start of controller', vm.user);

  //uses CurrentFreelancerService to get freelancer info
  console.log('CURRENT USER SERVICE', CurrentUserService);
  vm.user = CurrentUserService.currentUser.user;

  //uses Freelancer factory (ajax shorthand) to update
  //freelancer on database
  vm.usersUpdate = function usersUpdate(){
    User
      .update({id: $stateParams.id}, vm.user)
      .$promise
      .then(resp => {
        $state.go('userShow', {id: vm.user.id});
      });
  };
}
