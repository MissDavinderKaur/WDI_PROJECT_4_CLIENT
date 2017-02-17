angular
  .module('letsTalk')
  .controller('usersLoginCtrl', UsersLoginCtrl);

UsersLoginCtrl.$inject = ['User', 'CurrentUserService'];
function UsersLoginCtrl(User, CurrentUserService ){
  const vm = this;

  //uses our User factory (shorthand ajax) to send
  //User object (built by angualr in html) to our
  //database and return user and token.
  vm.UsersLogin = function UsersLogin() {
    console.log('about to log in as user', vm.user);
    User
      .login(vm.user)
      .$promise
      .then(() =>{
        //as token stored automattically by token service
        //can use CurrentUserService to decode token,
        //make request to User api and broadcast
        //'logged in' to rest of app.
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      });
  };

}
