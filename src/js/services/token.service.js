angular
  .module('letsTalk')
  .service('TokenService', TokenService);

//short hand for getting, setting, decoding and
//removing token from browsers localStorage
TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService ($window, jwtHelper){
  const self = this;
  self.setToken = (token) => {
    return $window.localStorage.setItem('auth-token', token);
  };
  self.getToken = () => {
    return $window.localStorage.getItem('auth-token');
  };
  self.decodeToken = () => {
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  };
  self.removeToken = () => {
    $window.localStorage.clear();
  };
}
