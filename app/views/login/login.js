'use strict';

angular.module('myApp.login', []).controller('LoginCtrl', function ($scope, $location) {

    $scope.clientId = '1123588731087524';
    $scope.redirectUri = 'http://localhost:8080/';

    var OAuthCode = $location.search()['code'];
    if (OAuthCode) {
        console.log(OAuthCode);
    }

});