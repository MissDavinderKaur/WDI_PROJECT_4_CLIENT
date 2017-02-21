angular
.module('letsTalk')
.controller('issuesEditCtrl', IssuesEditCtrl);

IssuesEditCtrl.$inject = ['$stateParams', '$state', '$http', 'Issue'];

function IssuesEditCtrl($stateParams, $state, $http, Issue) {
  const vm = this;

  Issue
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.issue = response;
  });


  vm.issuesUpdate = function issuesUpdate(){
    Issue
    .update({id: $stateParams.id}, vm.issue)
    .$promise
    .then(resp => {
      $state.go('issuesShow', {id: vm.issue.id});
    });
  };
}