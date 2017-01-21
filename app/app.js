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


config(function($stateProvider, $urlRouterProvider) {

  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'views/login/login.html'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>About</h3>'
  };

  $stateProvider.state(loginState);
  $stateProvider.state(aboutState);

  $urlRouterProvider.otherwise("/login");


}).

config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .warnPalette('orange')
      .accentPalette('cyan');

});

