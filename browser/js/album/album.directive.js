juke.directive('albumList', function () {
  return {
    restrict: "E",
    scope: {
      albums: '='
    },
    templateUrl: '/js/album/templates/album-list.html',
    // link: function (scope, element, attrs) {
    //   if (scope.albumFilter === 'all') {
    //     scope.albums = allAlbums
    //   } else if (scope.albumFilter === 'artists') {
    //     scope.albums = scope.artist.albums
    //   }
    // }
  }
})
