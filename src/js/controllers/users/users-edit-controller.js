angular
  .module('letsTalk')
  .controller('usersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$stateParams', '$state', '$http', 'User', 'CurrentUserService'];

function UsersEditCtrl($stateParams, $state, $http, User, CurrentUserService) {
  const vm = this;

  //uses CurrentFreelancerService to get freelancer info
  vm.user = CurrentUserService.currentUser;

  //uses Freelancer factory (ajax shorthand) to update
  //freelancer on database
  vm.usersUpdate = function usersUpdate(){

    User
      .update({id: $stateParams.id}, vm.user)
      .$promise
      .then(resp => {
        $state.go('usersShow', {id: vm.user.id});
      });
  };
}
