'use strict';

var pageCtrl = angular.module('pageCtrl', []);

pageCtrl.controller('pageCtrl', function ($scope) {
    /* Checkboxes Page 1 */
    
    $scope.checkboxTags = [
		{ type: 'checkbox', tag: '#Java', checked: false},
		{ type: 'checkbox', tag: '#PHP', checked: false},
		{ type: 'checkbox', tag: '#JavaScript', checked: false},
		{ type: 'checkbox', tag: '#C++', checked: false},
		{ type: 'checkbox', tag: '#Scala', checked: false},
		{ type: 'checkbox', tag: '#Go', checked: false},
		{ type: 'checkbox', tag: '#English', checked: false}
	];

	$scope.checkboxAudiences = [
		{ type: 'checkbox', audience: 'Java developers', checked: false},
		{ type: 'checkbox', audience: 'PHP developers', checked: false},
		{ type: 'checkbox', audience: 'JavaScript developers', checked: false},
		{ type: 'checkbox', audience: 'C++ developers', checked: false},
		{ type: 'checkbox', audience: 'Scala developers', checked: false},
		{ type: 'checkbox', audience: 'Go developers', checked: false},
        { type: 'checkbox', audience: 'Testers', checked: false}
	];

	$scope.selectAll = false;
	
	$scope.toggleSeleted = function() {
        $scope.selectAll = !$scope.selectAll;
       	for (var i = 0; i < $scope.checkboxAudiences.length; i++) {
            $scope.checkboxAudiences[i].checked = $scope.selectAll;
        }
    };

    function getIndex(aud){
    	for (var i = 0; i < $scope.checkboxAudiences.length; i++) {
    		if ($scope.checkboxAudiences[i].audience == aud.audience)
    			return i;
    	}
    }

    $scope.allChecked = function(aud) {
    	var j = getIndex(aud);
    	$scope.checkboxAudiences[j].checked = !$scope.checkboxAudiences[j].checked;
    	for (var i = 0; i < $scope.checkboxAudiences.length; i++) {
            if (!$scope.checkboxAudiences[i].checked){
            	$scope.selectAll = false;
            	return;
            }
        }
        $scope.selectAll = true;
    }
    
    /* Dropdowns Page 2 */
    
    $scope.toShowRepet = 'One-off ';
    $scope.toShowType = 'Inner training ';
    $scope.toShowLanguage = 'English ';
    
    $scope.whatChosen = 0;

    $scope.chooseRepet = function(rep){
        $scope.whatChosen = rep;
        if (rep == 0){
            $scope.toShowRepet = 'One-off ';
        }
    
        else if (rep == 1){
            $scope.toShowRepet = 'Weekly ';
        }
      
        else{
          $scope.toShowRepet = 'Continuous ';
        }
    }

    $scope.chooseType = function(rep){
        if (rep == 0)
          $scope.toShowType = 'Inner training ';
        else if (rep == 1)
          $scope.toShowType = 'Outer training ';
      }
  
    $scope.chooseLanguage = function(rep){
        if(rep == 0){
            $scope.toShowLanguage = 'English ';
        }
        if(rep ==1){
            $scope.toShowLanguage = 'Russian ';
        }
      }
    
    /* Descriptions Page 3 */
    
    $scope.q = 1;
    $scope.descriptions = [];
    
    $scope.toShow = function(){     
        if ($scope.toShowRepet.replace(/\s/g, '') == 'One-off' || $scope.toShowRepet.replace(/\s/g, '') == 'Weekly')
            $scope.q = 1;
        else 
            $scope.q = $scope.days;
    
        $scope.descriptions = [];
        for (var i = 0; i < $scope.q; i++) {
            $scope.descriptions.push('');
        }
        
        $scope.qDays = ($scope.toShowRepet.replace(/\s/g, '') == 'Weekly') ? $scope.days : $scope.q;
        
        for (var i = 0; i < $scope.qDays; i++){
            $scope.datepickers[i] = {'dt' : null, 'mytime': new Date(), 'toShowWeekDay': 'Monday '};
        }
        
        $scope.today();
        return true;
    }
    
    /* Text-fields Page 4 */
    
    /* Date and time Page 5 */
    
    $scope.datepickers = [];
    
    /* Date */
    $scope.today = function() {
        for (var i = 0; i < $scope.qDays; i++)
            $scope.datepickers[i].dt = new Date();
    };
    
    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++){
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    };
    
    /* Time */
    $scope.hstep = 1;
    $scope.mstep = 10;

    $scope.ismeridian = true;
   
    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
    };
    
    $scope.chooseWeekDay = function(rep, index){
        $scope.whatChosen = rep;
        if (rep == 0){
            $scope.datepickers[index].toShowWeekDay = 'Monday ';
        }
    
        else if (rep == 1){
            $scope.datepickers[index].toShowWeekDay = 'Tuesday ';
        }
      
        else if (rep == 2){
            $scope.datepickers[index].toShowWeekDay = 'Wednesday ';
        }
        
        else if (rep == 3){
            $scope.datepickers[index].toShowWeekDay = 'Thursday ';
        }
        
        else if (rep == 4){
            $scope.datepickers[index].toShowWeekDay = 'Friday ';
        }
        
        else if (rep == 5){
            $scope.datepickers[index].toShowWeekDay = 'Saturday ';
        }
        
        else if (rep == 6){
            $scope.datepickers[index].toShowWeekDay = 'Sunday ';
        }
      }
    
    $scope.toShow();
    
    /* Final (on submit button) */
    
    $scope.trainingCreation = function(){
        var trainings = [];
        
        for (var i = 0; i < $scope.q; i++){
        
            var training = {};

            /* Tags */
            training.tags = [];
            for (var i in $scope.checkboxTags){
                if ($scope.checkboxTags[i].checked == true){
                    training.tags.push($scope.checkboxTags[i].tag.substring(1));
                }
            }

            if (training.tags.length == 0){
                alert('You shoud choose at list one tag!');
                return false;
            }

            /* Audience */
            training.audience = [];
            for (var i in $scope.checkboxAudiences){
                if ($scope.checkboxAudiences[i].checked == true){
                    training.audience.push($scope.checkboxAudiences[i].audience);
                }
            }

            if (training.audience.length == 0){
                alert('You shoud choose an audience for your training!');
                return false;
            }

            /* Type of training */
            training.type = ($scope.toShowType == 'Inner training ') ? false : true;
            
            /* Repetition frequency */
            
            
            
            trainings.push(training);
        }
        
    }
});