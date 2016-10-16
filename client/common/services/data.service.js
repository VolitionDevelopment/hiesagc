/**
 * Created by Jackson on 10/4/16.
 */
(function(){
    function data($http, auth){
        var getData = function(){
            return $http({
                method: 'GET',
                url: '/api/profile',
                headers: {
                    'authorization': 'Bearer ' + auth.getToken()
                }
            });
        };

        var getUser = function(id){
            return $http({
                method: 'GET',
                url: '/api/profile/' + id,
                headers: {
                    'authorization': 'Bearer ' + auth.getToken()
                }
            });
        };

        var getAllUsers = function(){
            return $http({
                method: 'GET',
                url: '/api/all_users',
                headers: {
                    'authorization': 'Bearer ' + auth.getToken()
                }
            })
        };

        return {
            getData: getData,
            getUser: getUser,
            getAllUsers: getAllUsers
        }
    }

    angular.module('hiesagc')
        .service('data', ['$http', 'auth', data])
})();