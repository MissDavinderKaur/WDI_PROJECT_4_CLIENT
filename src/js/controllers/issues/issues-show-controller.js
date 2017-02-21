angular
.module('letsTalk')
.controller('issuesShowCtrl', IssuesShowCtrl);

IssuesShowCtrl.$inject = ['$stateParams', 'Issue'];
function IssuesShowCtrl($stateParams, Issue) {
  const vm = this;

  Issue
    .get({id: $stateParams.id})
    .$promise
    .then(response => {
      vm.issue = response;
    });

}
