angular
.module('letsTalk')
.controller('issuesShowCtrl', IssuesShowCtrl);

IssuesShowCtrl.$inject = ['$stateParams', 'Issue', 'CurrentUserService', 'Message', '$state'];
function IssuesShowCtrl($stateParams, Issue, CurrentUserService, Message, $state) {
  const vm = this;

  vm.currentUser = CurrentUserService.currentUser;
  vm.newMessage = {};

  Issue
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.temp = response;
    vm.temp.messages.sort(function(a, b){
      return a.id-b.id;
    });
    vm.issue = vm.temp;
  });

  vm.AddMessage = function() {
    if (vm.newMessage.msg_text === undefined) {
      //do nothing, as no text has been entered
    } else {
      vm.newMessage.issue_id = vm.issue.id;
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
          vm.temp = response;
          vm.temp.messages.sort(function(a, b){
            return a.id-b.id;
          });
          vm.issue = vm.temp;
          $state.go('issuesShow', {id: vm.issue.id});
        });
      }, err => {
        console.log(err);
      });
    }
  };

  vm.ShowEditField = function(id) {
    vm.editing = id;
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
        vm.temp = response;
        vm.temp.messages.sort(function(a, b){
          return a.id-b.id;
        });
        vm.issue = vm.temp;
        vm.editing = null;
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
