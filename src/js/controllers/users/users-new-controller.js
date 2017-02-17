angular
  .module('letsTalk')
  .controller('usersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['User', 'CurrentUserService'];
function UsersNewCtrl(User, CurrentUserService) {
  const vm = this;

  //uses User factory to post User object to database
  //and register.  Then triggers CurrentUserService
  //to uses returned token to make request to get all User's
  //info from database
  vm.userCreate = function() {
    console.log('about to send the user to the db', vm.user);
    User
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };

}
