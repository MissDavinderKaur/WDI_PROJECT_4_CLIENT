angular
.module('letsTalk')
.controller('issuesShowCtrl', IssuesShowCtrl);

IssuesShowCtrl.$inject = ['$stateParams', 'Issue', 'CurrentUserService', 'Message', '$state'];
function IssuesShowCtrl($stateParams, Issue, CurrentUserService, Message, $state ) {
  const vm = this;

  vm.currentUser = CurrentUserService.currentUser;

  Issue
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.issue = response;
  });

  vm.AddMessage = function(issueId) {
    vm.message.issue_id = issueId;
    vm.message.sender_id = vm.currentUser.id;
    vm.message.receiver_id = vm.issue.user.id;

    Message
    .save(vm.message)
    .$promise
    .then((response) => {
      vm.message = null;
      Issue
      .get({id: response.issue_id})
      .$promise
      .then(response => {
        vm.issue = response;
        $state.go('issuesShow', {id: vm.issue.id});
      });
    }, err => {
      console.log(err);
    });
  };

  vm.EditMessage = function(messageID) {
    console.log('clicked EditMessage button for', messageID);
  };

  vm.DeleteMessage = function(messageID) {
    console.log('clicked Delete Message button for', messageID);

    Message
    .delete({id: messageID})
    .$promise
    .then(() => {
      Issue
      .get({id: vm.issue.id})
      .$promise
      .then(response => {
        vm.issue = response;
      });
    }, err => {
      console.log(err);
    });

  };

}
