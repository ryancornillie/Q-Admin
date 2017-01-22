/**
 * Created by zacharyrosenthal on 1/21/17.
 */

angular.module('myApp.dataService', [])

    .factory("DataService", function () {

        var service = {};

        service.authToken = null;

        service.pictureUrl = null;

        service.userEmail = null;

        service.userName = null;

        service.userId = null;

        return service;
    });