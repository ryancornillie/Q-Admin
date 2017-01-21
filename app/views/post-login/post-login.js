/**
 * Created by zacharyrosenthal on 1/21/17.
 */
angular.module('myApp.postLogin', []).controller("PostLoginCtrl", function ($scope, $location, $stateParams) {

    function __init() {

        console.log('st: ' , $stateParams);

        var url = $location.url();


        console.log(url);

        var token = url.substr(url.indexOf('=') + 1, url.indexOf('&') - url.indexOf('=') - 1);
        console.log(token);


      /*  PostLoginService.fourPointLogin(OAuthCode).then(function success(data) {

            AuthService.setUserData(data);

            $state.go('home');

        }, function error(err) {

        });
*/
    }

    __init();
});