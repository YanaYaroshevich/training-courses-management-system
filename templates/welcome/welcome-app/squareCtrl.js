var squareCtrl = angular.module('squareCtrl', []);

squareCtrl.controller('squareCtrl', ['$scope', function($scope){
	$scope.squares = [
		{ className: 'panel panel-red', iconType: 'fa fa-bomb fa-5x', number: '26',  text: 'Hot trainings!', link: '../alltrainings.html'},
		{ className: 'panel panel-green', iconType: 'fa fa-tasks fa-5x', number: '12',  text: 'New trainings!', link: '../alltrainings.html'},
		{ className: 'panel panel-yellow', iconType: 'fa fa-shopping-cart fa-5x', number: '5',  text: 'We recommend!', link: '../alltrainings.html'},
		{ className: 'panel panel-primary', iconType: 'fa fa-users fa-5x', number: '13',  text: 'General trainings!', link: '../alltrainings.html'}
	];
}]);