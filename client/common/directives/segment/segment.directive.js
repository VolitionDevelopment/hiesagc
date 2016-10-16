/**
 * Created by Jackson on 10/16/16.
 */

(function(){
    function segment(){
        return {
            restrict: 'E',
            templateUrl: 'common/directives/segment/segment.template.html',
            scope: {
                color: '@',
                title: '@'
            },
            transclude: true
        }
    }

    angular.module('hiesagc')
        .directive('segment', segment)
})();