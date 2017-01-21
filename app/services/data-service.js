/**
 * Created by zacharyrosenthal on 1/21/17.
 */

angular.module('myApp.dataService', [])

    .factory("DataService", function () {

        var service = {};

        service.authToken = '';

        service.pictureUrl = '';

        service.userEmail = '';

        service.userName = '';

        return service;
    });