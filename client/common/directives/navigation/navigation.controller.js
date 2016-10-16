/**
 * Created by Jackson on 9/30/16.
 */

(function(){
    function navController($location, auth, data, $scope, $mdToast, $mdSidenav){
        $scope.toggleSidenav = function(){
            $mdSidenav('navigation').toggle();
        };

        $scope.nav = [
            {
                icon: 'home',
                location: 'Home',
                path: '#/'
            },
            {
                icon: 'thumbs_up_down',
                location: 'Voting',
                path: '#/vote'
            },
            {
                icon: 'people',
                location: 'Members',
                path: '#/members'
            },
            {
                icon: 'cake',
                location: 'Victors',
                path: '#/victors'
            },
            {
                icon: 'forum',
                location: 'Forums',
                path: '#/forums'
            },
            {
                icon: 'public',
                location: 'Diplomacy',
                path: '/diplomacy'
            }
        ];
    }

    angular.module('hiesagc')
        .controller('navCtrl', ['$location', 'auth', 'data', '$scope', '$mdToast', '$mdSidenav', navController])
})();