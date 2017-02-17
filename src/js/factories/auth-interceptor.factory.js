angular
  .module('letsTalk')
  .factory('AuthInterceptor', AuthInterceptor);


//interceptor used to intercept requests and responses
//on the way out attached token to head of requests
//on the way in takes token from resopnse and sets to
//local storage (part of the users browser memory)
AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    request: function(config){
      const token = TokenService.getToken();
      if(config.url.indexOf(API) === 0 && token){
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    response: function(res) {
      if(res.config.url.indexOf(API) === 0 && res.data.token){
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}
