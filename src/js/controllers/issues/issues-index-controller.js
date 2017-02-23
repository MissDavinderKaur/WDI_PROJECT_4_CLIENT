angular
.module('letsTalk')
.controller('issuesIndexCtrl', IssuesIndexCtrl);

IssuesIndexCtrl.$inject = ['Issue', 'citiesList', 'categoriesList', 'sectorsList'];
function IssuesIndexCtrl(Issue, citiesList, categoriesList, sectorsList) {
  const vm      = this;

  vm.categoriesList = categoriesList;
  vm.sectorsList = sectorsList;
  vm.citiesList = citiesList;

  vm.filteredIssues = [];

  //uses custom non array query property on Project factory
  Issue
  .query()
  .$promise
  .then(response => {
    vm.issues = response.issues;
  });

  vm.searchByCategory = function() {
    if (vm.searchCriteriaCategory === 'All'){
      Issue
      .query()
      .$promise
      .then(response => {
        vm.issues = response.issues;
      });
    } else {
      Issue
      .query()
      .$promise
      .then(response => {
        const allIssues  = response.issues;
        allIssues.forEach(function(issue) {
          if(issue.categoryy === vm.searchCriteriaCategory){
            vm.filteredIssues.push(issue);
          }
        });
        vm.issues = vm.filteredIssues;
        vm.filteredIssues = [];
      });
    }
  };

  vm.searchBySector = function() {
    if (vm.searchCriteriaSector === 'All'){
      Issue
      .query()
      .$promise
      .then(response => {
        vm.issues = response.issues;
      });
    } else {
      Issue
      .query()
      .$promise
      .then(response => {
        const allIssues  = response.issues;
        allIssues.forEach(function(issue) {
          if(issue.user.sector === vm.searchCriteriaSector){
            vm.filteredIssues.push(issue);
          }
        });
        vm.issues = vm.filteredIssues;
        vm.filteredIssues = [];
      });
    }
  };

  vm.searchByCity = function() {
    if (vm.searchCriteriaCity === 'All'){
      Issue
      .query()
      .$promise
      .then(response => {
        vm.issues = response.issues;
      });
    } else {
      Issue
      .query()
      .$promise
      .then(response => {
        const allIssues  = response.issues;
        allIssues.forEach(function(issue) {
          if(issue.user.city === vm.searchCriteriaCity){
            vm.filteredIssues.push(issue);
          }
        });
        vm.issues = vm.filteredIssues;
        vm.filteredIssues = [];
      });
    }
  };
}
