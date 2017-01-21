'use strict';

angular.module('myApp.home', [])

  .controller('HomeCtrl', function($scope, $mdSidenav, OfficeService) {


    $scope.queue = [ {name: "Timmy Daniel"}, {name: "Irene Baldwin"}, {name: "Robin	Marsh"}, {name: "Hubert	Cortez"} ];


    $scope.office = OfficeService;



  });