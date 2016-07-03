'use strict';
(function(){
    angular
    .module('ngRot13',[])
    .directive('rot', rot);
    
    function rot(){
        return {
            restrict: 'E',
            scope: {
                planeText: '=?'
            },
            replace: true,
            template: '<span>{{vm.textAsRot13}}</span>',
            controller: ['$scope', function($scope) {
                var vm = this;
                vm.textAsRot13 = ($scope.planeText || '').split('').reverse().join('');
            }],
            controllerAs: 'vm'
        }
    }
})();