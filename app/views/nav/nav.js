/**
 * Created by ryancornillie on 1/21/17.
 */

'use strict';

angular.module('myApp.nav', [])

    .controller('NavCtrl', function($scope, $state, $mdSidenav, OfficeService) {

        $scope.init = function () {

            OfficeService.getOffices();
    };

        $scope.init();

        $scope.offices = [ {location: "3467 EB", id:1, course: "ME 340"}, {location: "432 Wells", id:2, course: "MTH 223"} ];

        $scope.logout = function () {

            $state.go("login");
        };

        $scope.add = function () {

            OfficeService.adding = 1;

            $scope.toggleLeft();


        };



        $scope.selectOffice = function(office) {

            OfficeService.selectedOffice = office;

            $scope.toggleLeft();


        };

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }


    });