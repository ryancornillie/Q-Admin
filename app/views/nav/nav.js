/**
 * Created by ryancornillie on 1/21/17.
 */

'use strict';

angular.module('myApp.nav', [])

    .controller('NavCtrl', function($scope, $state, $mdSidenav, OfficeService, DataService) {

        $scope.init = function () {

            $scope.userData = DataService;

            $scope.userName = localStorage.getItem('userName');

            OfficeService.getOffices().then(function success(offices) {

                $scope.officeService = OfficeService;

            });
        };


        $scope.init();


        $scope.logout = function () {

            localStorage.clear();

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