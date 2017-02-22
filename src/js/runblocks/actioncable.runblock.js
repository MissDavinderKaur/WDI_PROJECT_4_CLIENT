angular
.module('letsTalk')
.run(function(ActionCableConfig){
  // ActionCableConfig.wsUri= 'ws://localhost:3000/cable';
  ActionCableConfig.debug = true;
});
 
