angular
.module('letsTalk')
.config(issueRouter);

issueRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function issueRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  //ui.router used state names to direct app to associated
  //html view file and used associated controller
  $stateProvider
  .state('issuesIndex', {
    url: '/issues',
    templateUrl: '/js/views/issues/index.html',
    controller: 'issuesIndexCtrl as issuesIndex'
  })
  .state('issuesNew', {
    url: '/issues/new',
    templateUrl: '/js/views/issues/new.html',
    controller: 'issuesNewCtrl as issuesNew'
  })
  .state('issuesShow', {
    url: '/issues/:id',
    templateUrl: '/js/views/issues/show.html',
    controller: 'issuesShowCtrl as issuesShow'
  })
  .state('issuesEdit', {
    url: '/issues/:id/edit',
    templateUrl: '/js/views/issues/edit.html',
    controller: 'issuesEditCtrl as issuesEdit'
  });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
