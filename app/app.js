'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  'myApp.nav',
  'myApp.login',
  'myApp.home',
  'myApp.officeService',
  'myApp.version',
   'myApp.postLogin'
]).


config(function($stateProvider, $urlRouterProvider) {

  var loginState = {
    name: 'login',
    url: '/login',
    views: {
      nav: {templateUrl: 'views/nav/nav.html'},
      content: {templateUrl: 'views/login/login.html'}
    }
  };

  var homeState = {
    name: 'home',
    url: '/home',
    views: {
      nav: {templateUrl: 'views/nav/nav.html'},
      content: {templateUrl: 'views/home/home.html'}
    }
  };

  var postLoginState = {
      name: 'postLogin',
      url: '?access_token',
      views: {
          nav: {templateUrl: 'views/nav/nav.html'},
          content: {templateUrl: 'views/post-login/post-login.html'}
      }
  };

  $stateProvider.state(loginState);
  $stateProvider.state(homeState);
  $stateProvider.state(postLoginState);

  $urlRouterProvider.otherwise("/login");


}).

config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .warnPalette('orange')
      .accentPalette('cyan');

})

.constant('API', 'http://localhost:8888/api/v1');





