/**
 * Created by Jackson on 10/16/16.
 */

(function () {
    function votingController($scope){
        $scope.games = [
            {
                title: 'Dominion: Intrigue',
                description: 'Something\'s afoot. The steward smiles at you like he has a secret, or like he thinks you have a secret. There are secret plots brewing, you\'re sure of it. At the very least, there are yours. A passing servant murmurs \'The eggs are on the plate.\' You frantically search your codebook for the translation before realizing he means that breakfast is ready. Excellent.' +
                '\n\n\nEverything is going according to plan.',
                votes: 4,
                voters: ['Justin', 'Logan', 'Bryce', 'Colin Cassell', 'Jackson'],
                image: 'https://cf.geekdo-images.com/images/pic970349.jpg'
            },
            {
                title: 'MagBlast!',
                description: 'The art of renowned cartoonist John Kovalic, coupled with the hilarious "Make a Silly Noise or Miss!" Blast Targeting System, makes Mag-Blast (Third Edition) the perfect card game for two to eight players, ages ten and up. This edition retains all of the fast-paced fun and powerful ships of the previous editions, and it includes eight new flagships, seven ship types, twenty action card types (including fighters and bombers), and three blast card types...including the famous Mag-Blast!',
                votes: 4,
                voters: ['Nick', 'Justen', 'Colin Cassell', 'Mr. Yarsawich'],
                image: 'https://images-cdn.fantasyflightgames.com/filer_public/19/19/19198545-4a1b-479d-becf-651507b2dc2a/va34_feature.jpg'
            },
            {
                title: 'Catan: Settlers of America',
                description: 'The 19th Century has arrived, and Americans are heading west. Wagon trains are forming up and heading out to settle new lands and build new cities. These new cities will need railroad lines to bring in new people and necessary goods. Some head west for the adventure, some to start a new life, still others to find work.',
                votes: 2,
                voters: ['Taylor', 'Brendan'],
                image: ''
            },
            {
                title: 'Coal Baron',
                description: 'Coal Baron - or Gluck Auf in German, after a greeting German miners use when wishing one another luck - has players sending meeple miners underground to dig tunnels and acquire coal, which comes in four levels of quality and which is used to fulfill contracts.',
                votes: 1,
                voters: ['Bryce'],
                image: ''
            }
        ]
    }

    angular.module('hiesagc')
        .controller('votingCtrl', ['$scope', votingController])
})();