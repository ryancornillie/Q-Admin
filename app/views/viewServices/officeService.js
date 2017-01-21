/**
 * Created by ryancornillie on 1/21/17.
 */


angular.module('myApp.officeService', [])

.factory("OfficeService", function ($http, $q, API) {

    var service = {};

    service.getOffices = function () {
        var deferred = $q.defer();

        console.log(API);

        $http.get(API + '/offices').then(function success(response) {

            console.log(response);

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

        $http.post(API + '/sessions', session).then(function success(response) {

            console.log(response);

            deferred.resolve(response.data);

        }, function error(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };



    service.selectedOffice = null;

    service.adding = 0;

    return service;
});