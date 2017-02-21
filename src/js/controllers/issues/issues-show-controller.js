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

    console.log('MESSAGE OBJECT TO BE SAVED', vm.message);
    Message
    .save(vm.message)
    .$promise
    .then((response) => {
      vm.message = null;
      console.log('MESSAGE OBJECT HAS BEEN SAVEd and this is the response', response);
      Issue
      .get({id: response.issue_id})
      .$promise
      .then(response => {
        console.log('GETTING THE ISSUE OBJECT AGAIN WITH ALL OF THE NEW MESSAGES', response);
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
  };

}
