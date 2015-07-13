var alertCtrl = angular.module('alertCtrl', []);

alertCtrl.controller('alertCtrl', ['$scope', '$sce', function($scope, $sce){
	$scope.alerts = [
    { type: 'info', msg: 'Your training ##### is aproved', time: '2016-07-21 18:20', link: 'http://google.com', trainingName: 'Lala'},
    { type: 'success', msg: 'Well done! You successfully read this important alert ##### message.', time: '', link: '#', trainingName: 'uuu'}
  ];

  $scope.messages = $scope.alerts.map(function(alert) {
  	var s = alert.msg;
  	s = $sce.trustAsHtml(s.replace('#####', '<a href="' + alert.link + '">' + alert.trainingName + '</a>'));
  	return s;
  });

  $scope.getAlerts = function() {
  	//TODO
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}]);