var mainCtrl = angular.module('mainCtrl', []);

mainCtrl.controller('mainCtrl', ['$scope', /*'$modal',*/ function($scope, /*$modal, */moment) {
    var vm = this;
    
    vm.calendarDay = new Date();
    vm.calendarView = 'month';
    vm.events = [
        {
            title: 'Front-end',
            type: 'warning',
            startsAt: new Date(2015,6,20,14),
            endsAt: new Date(2015,6,25,15),
            draggable: true,
            resizable: true
        }, {
            title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
            type: 'info',
            startsAt: new Date(2015,6,21,13),
            endsAt: new Date(2015,6,26,14),
            draggable: true,
            resizable: true
        }, {
            title: 'This is a really long event title that occurs on every year',
            type: 'important',
            startsAt: new Date(2015,6,22,12),
            endsAt: new Date(2015,6,27,13),
            recursOn: 'year',
            draggable: true,
            resizable: true
        }
    ];
    
    /*function showModal(action, event) {
        $modal.open({
            templateUrl: 'calendar.html',
            controller: function() {
                var vm = this;
                vm.action = action;
                vm.event = event;
            },
            controllerAs: 'vm'
        });
    }
    
    vm.eventClicked = function(event) {
        showModal('Clicked', event);
    };

    vm.eventEdited = function(event) {
        showModal('Edited', event);
    };

    vm.eventDeleted = function(event) {
        showModal('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
        showModal('Dropped or resized', event);
    };*/

    vm.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    };
}]);