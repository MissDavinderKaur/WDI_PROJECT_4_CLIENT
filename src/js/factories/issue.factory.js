angular
.module('letsTalk')
.factory('Issue', issueFactory);

//Shortcut for making requests to our projects database
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

issueFactory.$inject = ['API','$resource'];
function issueFactory(API, $resource) {
  return $resource(`${API}/issues/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'},
    'query': {method: 'GET', isArray: false}
  });
}
