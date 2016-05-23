'use strict'

juke.directive('songList', function (PlayerFactory) {
  return {
    restrict: 'E',
    scope: {
      songs: '='
    },
    templateUrl: '/js/song/templates/song-list.html'
  }
})

juke.directive('doubleClick',function(){
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function(scope, element){
      element.on('dblclick', function(){
        scope.doubleClick();
      })
    }
  }
})
juke.directive('playButton',function(PlayerFactory){
  return {
    restrict: 'E',
    scope: true,
    template:
      `<td>
        <button class="btn btn-default btn-xs" ng-click="toggle(song)">
          <span class="glyphicon" ng-class="{ 'glyphicon-pause': isPlaying(song), 'glyphicon-play': !isPlaying(song) }"></span>
        </button>
      </td>`,
    link: function(scope){
      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };
      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };
      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    }
  }
})
