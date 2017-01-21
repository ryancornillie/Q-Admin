/**
 * Created by zacharyrosenthal on 1/21/17.
 */
angular.module('myApp.postLogin', ['angular-jwt'])
    .controller("PostLoginCtrl", function ($scope, $location, $stateParams, $http, API, jwtHelper, DataService, $state) {

        function __init() {

            console.log('st: ', $stateParams);

            var url = $location.url();

            if (url.indexOf('access_token') == -1) {
                $state.go('login');
            } else {

                console.log(url);

                var token = url.substr(url.indexOf('=') + 1, url.indexOf('&') - url.indexOf('=') - 1);
                console.log(token);

                $http.post(API + '/login/', {token: token}).then(function (res) {

                    DataService.authToken = res.data;

                    var tokenPayload = jwtHelper.decodeToken(res.data);
                    console.log('data: ', tokenPayload);

                    DataService.pictureUrl = tokenPayload.picture_url;

                    DataService.userEmail = tokenPayload.email;

                    DataService.userName = tokenPayload.name;

                    $state.go('home');

                }, function (err) {
                    console.log('error: ', err)
                });
            }

        }

        __init();
    });