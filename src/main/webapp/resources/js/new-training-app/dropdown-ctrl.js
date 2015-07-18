'use strict'

var dropdownCtrl = angular.module('dropdownCtrl', []);
dropdownCtrl.controller('dropdownCtrl', function ($scope, $log) {
  
  $scope.toShowRepet = 'One-off ';
  $scope.toShowType = 'Inner training ';
  $scope.whatChosen = 0;

  $scope.chooseRepet = function(rep){
    $scope.whatChosen = rep;
    if (rep == 0)
      $scope.toShowRepet = 'One-off ';
    
    else if (rep == 1)
      $scope.toShowRepet = 'Weekly ';
      
    else
      $scope.toShowRepet = 'Continuous ';
  }

  $scope.chooseType = function(rep){
    if (rep == 0)
      $scope.toShowType = 'Inner training ';
    else if (rep == 1)
      $scope.toShowType = 'Outer training ';
  }
});