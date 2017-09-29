angular.module('myApp', []).controller('Ctrl', ['$scope' , '$http', function($scope, $http) {

	$scope.topTracks = [];
	$scope.topTracksPics = [];

	var apiKey = '9646370f4041cc9850f6ef70be921357';

	$scope.getUserInfo = function(user) {
		var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user='+ user +'&api_key=9646370f4041cc9850f6ef70be921357&format=json';
		return $http.get(url).then(function(response) {
			$scope.topTracks = response.data.toptracks.track;
			$scope.getTopTracksPic();
		});
	}

	$scope.getTopTracksPic = function() {
		for (var i = 0; i < $scope.topTracks.length; i++) {
			$scope.topTracksPics.push($scope.topTracks[i].image[2]['#text']);
		};
	};
	
}]);