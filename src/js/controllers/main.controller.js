angular
  .module('letsTalk')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state){
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    //This is accessible from all HTML views
    vm.user = CurrentUserService.currentUser;
  });

  vm.logout = () => {
    CurrentUserService.removeFreelancer();
  };

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
}
