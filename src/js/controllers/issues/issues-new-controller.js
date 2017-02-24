angular
  .module('letsTalk')
  .controller('issuesNewCtrl', IssuesNewCtrl);

IssuesNewCtrl.$inject = ['Issue', 'CurrentUserService', '$state', 'categoriesList'];
function IssuesNewCtrl(Issue, CurrentUserService, $state, categoriesList) {
  const vm = this;

  vm.user = CurrentUserService.currentUser;

  vm.categoriesList = categoriesList;

  vm.issueCreate = function() {
    vm.issue.user_id = vm.user.id;
    vm.issue.active = true;

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
