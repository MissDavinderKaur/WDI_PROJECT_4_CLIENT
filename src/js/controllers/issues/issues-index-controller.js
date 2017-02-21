angular
.module('letsTalk')
.controller('issuesIndexCtrl', IssuesIndexCtrl);

IssuesIndexCtrl.$inject = ['Issue'];
function IssuesIndexCtrl(Issue) {
  const vm      = this;

  //uses custom non array query property on Project factory
  Issue
    .query()
    .$promise
    .then(response => {
      vm.issues = response.issues;
    });

}
