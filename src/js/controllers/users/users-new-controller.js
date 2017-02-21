angular
  .module('letsTalk')
  .controller('usersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function UsersNewCtrl(User, CurrentUserService,$state) {
  const vm = this;

  //uses User factory to post User object to database
  //and register.  Then triggers CurrentUserService
  //to uses returned token to make request to get all User's
  //info from database
  vm.userCreate = function() {
    User
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      vm.user = CurrentUserService.currentUser;
      $state.go('usersShow', {id: vm.user.id});
    }, err => {
      console.log(err);
    });
  };

}
