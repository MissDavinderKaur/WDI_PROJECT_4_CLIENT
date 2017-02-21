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
    controller: 'IssuesIndexCtrl as issuesIndex'
  });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
