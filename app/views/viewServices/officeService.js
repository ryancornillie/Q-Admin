/**
 * Created by ryancornillie on 1/21/17.
 */


angular.module('myApp.officeService', ['ngWebSocket'])

    .factory("OfficeService", function ($http, $q, API, $websocket) {

        var service = {};

        service.dataLoaded = false;

        var dataStream = $websocket('ws://localhost:3333/test');

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

        service.activateOffice = function (office) {

            var deferred = $q.defer();

            var data = {
                officeId: office._id,
                active: office.active
            };

            console.log("activate", data);

            $http.patch(API + '/offices/active', data).then(function success(response) {

                console.log(response);

                deferred.resolve(response.data);

            }, function error(error) {
                deferred.reject(error);
            });

            return deferred.promise;

        };

        dataStream.onMessage(function (message) {
            console.dir(message);
            if (service.dataLoaded) {
                var elm = JSON.parse(message.data);

                service.offices.forEach(function (office) {
                    if (elm.officeId == office._id) {
                        if (elm.delete) {
                            console.log('office: ', office);
                            // take out of queue
                            var index = 0;
                            while (office.queue[index] && (office.queue[index]._id != elm._id)) {
                                index++;
                            }
                            office.queue.splice(index, 1);
                        } else {
                            office.queue.push(elm);
                        }
                    }
                });
            }
        });

        service.selectedOffice = null;

        service.adding = 0;

        service.offices = [];

        return service;
    });