angular
.module('letsTalk')
.run(function(ActionCableConfig){
  ActionCableConfig.debug = true;
});
