var paginationCtrl = angular.module('paginationCtrl', []);
paginationCtrl.controller('paginationCtrl', function ($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 1;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});