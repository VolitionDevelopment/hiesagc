/**
 * Created by Jackson on 10/15/16.
 */

(function () {
    function homeController($scope, $mdDialog){
        $scope.faq = [
            {
                question: "Do you guys play cod?",
                answer: "No, we don't play CoD. We play board games, card games, Diplomacy, and occasionally Civilization."
            },
            {
                question: "Do you guys play Flux?",
                answer: "Not when Lever is here."
            },
            {
                question: "What are dues for?",
                answer: "Games are pretty expensive! We use dues to help buy new games. Using this site, you can vote on games to buy. The more you donate, the more your voice counts. Kinda like America."
            }
        ];

        $scope.people = [
            {
                img: '/images/justin.png',
                name: 'Justin',
                title: 'El Presidente',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at delectus dicta est excepturi, itaque nemo placeat possimus quae, reiciendis sequi soluta! Cum dolorum nihil, nisi nulla officia quae temporibus!'
            },
            {
                img: '/images/yarsawich.png',
                name: 'Mr. Yarsawich',
                title: 'Club Mentor',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at delectus dicta est excepturi, itaque nemo placeat possimus quae, reiciendis sequi soluta! Cum dolorum nihil, nisi nulla officia quae temporibus!'
            },
            {
                img: 'http://placekitten.com/150/150',
                name: 'Meredith',
                title: 'Vice President',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at delectus dicta est excepturi, itaque nemo placeat possimus quae, reiciendis sequi soluta! Cum dolorum nihil, nisi nulla officia quae temporibus!'
            }
        ];

        $scope.openBio = function(index, ev){
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title($scope.people[index].name)
                    .textContent($scope.people[index].bio)
                    .ok('Go Away')
                    .targetEvent(ev)
            )
        }
    }

    angular.module('hiesagc')
        .controller('homeCtrl', ['$scope', '$mdDialog', homeController])
})();