angular
.module('letsTalk')
.controller('issuesShowCtrl', IssuesShowCtrl);

IssuesShowCtrl.$inject = ['$stateParams', 'Issue', 'CurrentUserService', 'Message', '$state', '$scope'];
function IssuesShowCtrl($stateParams, Issue, CurrentUserService, Message, $state, $scope ) {
  const vm = this;

  vm.currentUser = CurrentUserService.currentUser;

  Issue
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.issue = response;
  });

  vm.AddMessage = function(issueId) {
    vm.newMessage.issue_id = issueId;
    vm.newMessage.sender_id = vm.currentUser.id;
    vm.newMessage.receiver_id = vm.issue.user.id;

    Message
    .save(vm.newMessage)
    .$promise
    .then((response) => {
      vm.newMessage.msg_text = null;
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

  vm.ShowEditField = function() {
    vm.editing ^= true;
  };

  vm.EditMessage = function(index, messageID) {
    vm.updatedMessage = vm.issue.messages[index];

    Message
    .update({id: messageID}, vm.updatedMessage)
    .$promise
    .then((response) => {
      Issue
      .get({id: response.issue_id})
      .$promise
      .then(response => {
        vm.issue = response;
        vm.editing ^= true;
      });
    }, err => {
      console.log(err);
    });
  };

  vm.DeleteMessage = function(messageID) {
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
