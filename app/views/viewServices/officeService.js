/**
 * Created by ryancornillie on 1/21/17.
 */


angular.module('myApp.officeService', ['ngWebSocket'])

    .factory("OfficeService", function ($http, $q, API, $websocket) {

        var service = {};

        service.dataLoaded = false;

        var dataStream = $websocket('ws://localhost:3000');

        service.getOffices = function () {
            var deferred = $q.defer();

            $http.get(API + '/offices').then(function success(response) {

                console.log(response);

                service.offices = response.data;

                service.dataLoaded = true;

                deferred.resolve(response.data);

            }, function error(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        service.createOffice = function (office) {
            var deferred = $q.defer();

            $http.post(API + '/offices', office).then(function success(response) {

                console.log(response);

                deferred.resolve(response.data);

            }, function error(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        service.createSession = function (session) {

            var deferred = $q.defer();

            console.log(session);

            $http.post(API + '/sessions', session).then(function success(response) {

                console.log(response);

                deferred.resolve(response.data);

            }, function error(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        service.deleteOffice = function (id) {

            var deferred = $q.defer();

            var data = {
                officeId: id
            };

            console.log(data);

            $http.delete(API + '/offices/' + id, data).then(function success(response) {

                console.log(response);

                deferred.resolve(response.data);

            }, function error(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        service.activateOffice = function (id) {

        };

        dataStream.onMessage(function (message) {
            if (service.dataLoaded) {
                console.dir(message);
                var data = JSON.parse(message);
                data.forEach(function (elm) {
                    service.offices.forEach(function (office) {
                        if (elm.officeId == office._id) {
                            office.queue.push(elm);
                        }
                    });
                });
            }
        });

        service.selectedOffice = null;

        service.adding = 0;

        service.offices = [];

        return service;
    });