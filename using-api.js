angular.module('myApp', []).controller('Ctrl', ['$scope' , '$http', function($scope, $http) {

	$scope.topTracks = [];
	var apiKey = '9646370f4041cc9850f6ef70be921357';

	$scope.getUserInfo = function() {
		var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=clarammd&api_key=9646370f4041cc9850f6ef70be921357&format=json';

		return $http.get(url).then(function(response) {
			console.log(response);
			$scope.topTracks = response.data.toptracks.track;
		});
	}

	$scope.getUserInfo();
}]);