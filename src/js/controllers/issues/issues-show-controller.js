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

  vm.AddMessage = function(issueId) {
    console.log('clicked AddMessage button for', issueId);
  };

  vm.EditMessage = function(messageID) {
    console.log('clicked EditMessage button for', messageID);
  };

  vm.DeleteMessage = function(messageID) {
    console.log('clicked Delete Message button for', messageID);
  };

}
