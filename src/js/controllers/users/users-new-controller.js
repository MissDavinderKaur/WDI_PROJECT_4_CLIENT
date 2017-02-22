angular
  .module('letsTalk')
  .controller('usersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['User', 'CurrentUserService', '$state', 'citiesList', 'sectorsList'];
function UsersNewCtrl(User, CurrentUserService, $state, citiesList, sectorsList) {
  const vm = this;

  vm.citiesList = citiesList;
  vm.sectorsList = sectorsList;

  //uses User factory to post User object to database
  //and register.  Then triggers CurrentUserService
  //to uses returned token to make request to get all User's
  //info from database
  vm.userCreate = function() {
    User
    .register(vm.user)
    .$promise
    .then((response) => {
      vm.user = response.user;
      CurrentUserService.getUser();
      $state.go('usersShow', {id: vm.user.id});
    }, err => {
      console.log(err);
    });
  };

}
