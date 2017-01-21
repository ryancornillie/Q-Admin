/**
 * Created by ryancornillie on 1/21/17.
 */


angular.module('myApp.officeService', [])

.factory("OfficeService", function ($http, $q) {

    var service = {};

    service.selectedOffice = null;

    return service;
});