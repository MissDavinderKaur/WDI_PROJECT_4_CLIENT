angular
.module('letsTalk')
.factory('Message', messageFactory);

//Shortcut for making requests to our projects database
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

messageFactory.$inject = ['API','$resource'];
function messageFactory(API, $resource) {
  return $resource(`${API}/messages/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
