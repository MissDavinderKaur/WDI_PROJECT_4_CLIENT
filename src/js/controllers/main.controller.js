angular
  .module('letsTalk')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state){
  const vm = this;
  //MainCtrl listening for loggedIn signal from CurrentFreelancerService
  //then gets current user info and stores on it's own scope
  //current user then accesible throughout child controllers in html
  //via main.freelancer and in Ctrl's via $scope.parent etc..
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser.user;
    $state.go('usersShow', {id: vm.user.id});
  });
  //will log user out on logout click event using CurrentFreelancerService
  vm.logout = () => {
    CurrentUserService.removeFreelancer();
  };
  //will listen for feedback after the above from CurrentFreelancerService
  //and set freelancer to null throughout the app
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
}
