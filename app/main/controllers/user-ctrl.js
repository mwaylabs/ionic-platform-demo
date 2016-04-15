'use strict';
angular.module('main')
.controller('UserCtrl', function ($log) {
  this.user = {};
  this.signup = function () {
    Ionic.Auth.signup(this.user)
    .then(function (response) {
      $log.log(response);
    })
    .catch(function (rejection) {
      $log.log(rejection);
    });
  };
  this.signin = function () {
    Ionic.Auth.login('basic', {'remember': true}, this.user)
    .then(function (response) {
      $log.log(response);
    })
    .catch(function (rejection) {
      $log.log(rejection);
    });
  };

});
