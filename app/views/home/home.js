'use strict';

angular.module('myApp.home', [])

  .controller('HomeCtrl', function($scope) {

    $scope.offices = [ {location: "3467 EB", id:1, course: "ME 340"}, {location: "432 Wells", id:2, course: "MTH 223"} ];

    $scope.queue = [ {name: "Timmy Daniel"}, {name: "Irene Baldwin"}, {name: "Robin	Marsh"}, {name: "Hubert	Cortez"} ];

});