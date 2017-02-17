angular
.module('letsTalk')
.config(userRouter);

userRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function userRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  //ui.router used state names to direct app to associated
  //html view file and used associated controller
  $stateProvider
  .state('home', {
    url: '/',
    template: '<h2> HOme </h2>'
  })
  .state('usersRegister', {
    url: '/register',
    templateUrl: '/js/views/users/register.html',
    controller: 'usersNewCtrl as usersNew'
  })
  .state('usersLogin', {
    url: '/login',
    templateUrl: '/js/views/users/login.html',
    controller: 'usersLoginCtrl as usersLogin'
  });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
