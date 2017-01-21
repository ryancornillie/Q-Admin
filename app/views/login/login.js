'use strict';

angular.module('myApp.login', [])
    .controller('LoginCtrl', function ($scope, $location, $http, API, jwtHelper, DataService) {

        $scope.clientId = '1123588731087524';
        $scope.redirectUri = 'http://localhost:8080/';

    });