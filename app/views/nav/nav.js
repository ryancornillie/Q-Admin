/**
 * Created by ryancornillie on 1/21/17.
 */

'use strict';

angular.module('myApp.nav', [])

    .controller('NavCtrl', function($scope, $state) {


        $scope.logout = function () {

            $state.go("login");
        };


    });