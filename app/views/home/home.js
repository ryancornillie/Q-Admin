'use strict';

angular.module('myApp.home', [])

    .controller('HomeCtrl', function($scope, $mdSidenav, OfficeService, DataService) {

        $scope.office = OfficeService;

        $scope.queue = [];

        $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        $scope.new = {};

        $scope.new.schedule = {};

        $scope.selected = [];

        $scope.userName = localStorage.getItem('userName');

        $scope.toggle = function (day, list) {

            var idx = list.indexOf(day);
            if (idx > -1) {
                list.splice(idx, 1);
                delete $scope.new.schedule[day];
            }
            else {
                list.push(day)
            }

        };


        $scope.exists = function (day, list) {
            return list.indexOf(day) > -1;
        };


        $scope.newOffice = function() {

            var data = {
                name: $scope.new.name,
                location: $scope.new.location,
                description: $scope.new.description,
                userId: DataService.userId,
                userName: DataService.userName,
                active: 0
            };

            OfficeService.createOffice(data).then(function success(office) {

                var myOffice = office;

                OfficeService.offices.push(myOffice);

                var schedule = $scope.new.schedule;

                $scope.new = {};

                $scope.selected = [];

                for (var day in schedule) {

                    var data = {day: day, start_time: schedule[day], officeId: myOffice._id};
                    OfficeService.createSession(data).then (function (resp) {

                        OfficeService.adding = 0;

                        OfficeService.offices[OfficeService.offices.length -1].sessions.push(resp);

                    }, function(error) {

                        console.log(error);

                    });

                }

            }, function error(error) {


            });


        };


        $scope.cancel = function() {
            OfficeService.adding = 0;
            $scope.new = {};
            $scope.selected = [];
        };


        $scope.deleteOffice = function(id) {

            console.log(id);

            OfficeService.deleteOffice(id).then(function success(response) {

                for (var i = 0, len = OfficeService.offices.length; i < len; i++) {
                    if (OfficeService.offices[i]._id == id) {
                        OfficeService.offices.splice(i, 1);
                        break;
                    }
                }


                OfficeService.selectedOffice = OfficeService.offices[0];


            });

        };

        $scope.activate = function(office) {


            OfficeService.activateOffice(office).then(function (resp) {

            }, function (error) {

                console.log("Error activating office", error)

            });

        };


        $scope.nextInLine = function () {


            OfficeService.next(OfficeService.selectedOffice._id).then(function (resp) {

                console.log(resp);

            }, function (error) {

                console.log("Error popping off queue");
            })
        }

    });