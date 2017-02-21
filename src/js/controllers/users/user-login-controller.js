angular
.module('letsTalk')
.controller('usersLoginCtrl', UsersLoginCtrl);

UsersLoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function UsersLoginCtrl(User, CurrentUserService, $state ){
  const vm = this;

  //uses our User factory (shorthand ajax) to send
  //User object (built by angualr in html) to our
  //database and return user and token.
  vm.UsersLogin = function UsersLogin() {

    User
    .login(vm.user)
    .$promise
    .then((data) =>{
      //as token stored automattically by token service
      //can use CurrentUserService to decode token,
      //make request to User api and broadcast
      //'logged in' to rest of app.
      CurrentUserService.getUser();
      vm.user = CurrentUserService.currentUser;
      $state.go('usersShow', {id: vm.user.id});
    }, err => {
      console.log(err);
    });
  };

}
