'use strict';

angular.module('myApp.home', [])

    .controller('HomeCtrl', function($scope, $mdSidenav, OfficeService) {


        $scope.queue = [ {name: "Timmy Daniel"}, {name: "Irene Baldwin"}, {name: "Robin	Marsh"}, {name: "Hubert	Cortez"} ];


        $scope.office = OfficeService;

        $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        $scope.new = {};

        $scope.new.schedule = {};

        $scope.selected = [];

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
                description: $scope.new.description
            };


            console.log('new',data);

            OfficeService.createOffice(data).then(function success(office) {


                var myoffice = office;


                for (var day in $scope.new.schedule) {

                    var data = {day: day, start_time: $scope.new.schedule[day], active:0, officeId: myoffice._id};
                    OfficeService.createSession(data);

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



        };



    });