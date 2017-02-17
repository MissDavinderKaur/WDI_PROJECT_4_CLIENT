angular
  .module('letsTalk')
  .service('CurrentUserService', CurrentUserService);

//service used to retrieve information on user
//based on id from stored token
CurrentUserService.$inject = ['TokenService', 'User', '$rootScope'];
function CurrentUserService(TokenService, User, $rootScope){
  const self = this;

  //retrieves token from current user
  self.getUser = () => {
    const decodedToken = TokenService.decodeToken();

    //if token and if decoded retrieve information from User database
    //using User factory
    if (decodedToken) {
      User
        .get({ id: decodedToken.id})
        .$promise
        .then(data => {
          //sets current User info onto self
          //stored so other controllers can retrieve
          self.currentUser = data;
          //sends signal to rest of app that there is a logged in user
          $rootScope.$broadcast('loggedIn');
        });
    }
  };

  //on initation of app run getUser to see if user has loggedIn
  //in past 24 hours
  self.getUser();

  //function to remove token, set currentUser to null,
  //and broadcast signal to rest of app
  //used when 'loggout' button clicked
  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
  };
}
