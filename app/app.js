'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  'myApp.login',
  'myApp.view2',
  'myApp.version'
]).


config(function($stateProvider) {

  var loginState = {
    name: 'login',
    url: '/login',
    template: '<h3>hello world!</h3>'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  };

  $stateProvider.state(loginState);
  $stateProvider.state(aboutState);

}).

config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .warnPalette('orange')
      .accentPalette('cyan');

});

