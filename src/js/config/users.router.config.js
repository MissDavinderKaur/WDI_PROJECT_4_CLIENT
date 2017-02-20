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
    templateUrl: '/js/views/home.html',
    controller: 'HomeCtrl as home'
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
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'usersShowCtrl as usersShow'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'usersEditCtrl as usersEdit'
  });
  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
