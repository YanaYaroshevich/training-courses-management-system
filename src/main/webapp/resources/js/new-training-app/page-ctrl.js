var pageCtrl = angular.module('pageCtrl', []);

pageCtrl.controller('pageCtrl', function ($scope) {
    $scope.q = 0;
    $scope.descriptions = [];
});