'use strict'

juke.directive('player', function (PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/player/templates/player.html',
    link: function(scope){
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1
      scope.getCurrentSong = PlayerFactory.getCurrentSong;
      scope.toggle = function () {
        console.log(scope.getCurrentSong());
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };
    }
  }
})
juke.directive('songInfo',function(PlayerFactory){
  return {
    restrict: 'E',
    scope: {
      artists: '&',
      songName: '&',
      albumImg: '&',
      length: '&'
    },
    link: function(scope){
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1
      scope.getSong = function(){return PlayerFactory.getCurrentSong();}
      scope.getArtists = function(){return PlayerFactory.getCurrentSong().artists;}
      scope.getSong();
    },
    template:
      `<h4><span ng-repeat="artist in getArtists()">{{artist.name}}{{ $last ? '' : ', ' }}</span></h4>
      <h5>{{getSong().name}}</h5>`
  }
})
