/**
 * Created by Jackson on 9/29/16.
 */

(function(){
    angular.module('hiesagc', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate']);

    function config($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl'
            })

            .when('/voting', {
                templateUrl: 'voting/voting.view.html',
                controller: 'votingCtrl'
            })

            .otherwise({
                redirectTo: '/'
            })
    }

    function mainController($scope, $route){
        $scope.isActive = function(path){
            if ($route.current && $route.current.regexp) {
                return $route.current.regexp.test(path);
            }
            return false;
        };
    }

    angular.module('hiesagc')
        .config(config)
        .controller('mainCtrl', ['$scope', '$route', mainController])
})();