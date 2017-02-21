angular
  .module('letsTalk')
  .controller('issuesNewCtrl', IssuesNewCtrl);

IssuesNewCtrl.$inject = ['Issue', 'CurrentUserService', '$state'];
function IssuesNewCtrl(Issue, CurrentUserService,$state) {
  const vm = this;

  vm.user = CurrentUserService.currentUser;

  vm.issueCreate = function() {
    vm.issue.user_id = vm.user.id;

    Issue
    .save(vm.issue)
    .$promise
    .then((response) => {
      vm.issue = response;
      $state.go('issuesShow', {id: vm.issue.id});
    }, err => {
      console.log(err);
    });
  };

}
