'use strict';

angular.module('myApp.home', [])

    .controller('HomeCtrl', function($scope, $mdSidenav, OfficeService, DataService) {


        $scope.queue = [ {name: "Timmy Daniel"}, {name: "Irene Baldwin"}, {name: "Robin	Marsh"}, {name: "Hubert	Cortez"} ];


        $scope.office = OfficeService;

        $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        $scope.new = {};

        $scope.new.schedule = {};

        $scope.selected = [];

        $scope.userName = localStorage.getItem('userName');

        $scope.pictureUrl = localStorage.getItem('picture');

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
                userName: DataService.userName
            };

            OfficeService.createOffice(data).then(function success(office) {

                var myOffice = office;

                OfficeService.offices.push(myOffice);

                for (var day in $scope.new.schedule) {

                    var data = {day: day, start_time: $scope.new.schedule[day], officeId: myOffice._id};
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

                OfficeService.selectedOffice = null;



            });

        };

        $scope.activate = function() {

            OfficeService.activate()

        };



    });