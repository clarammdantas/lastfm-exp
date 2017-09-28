angular.module('myApp', []).controller('Ctrl', ['$scope' , '$http', function($scope, $http) {

	$scope.topTracks = [];
	var apiKey = '9646370f4041cc9850f6ef70be921357';

<<<<<<< HEAD
	$scope.getUserInfo = function(user) {
		var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user='+ user +'&api_key=9646370f4041cc9850f6ef70be921357&format=json';
=======
	$scope.getUserInfo = function() {
		var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=clarammd&api_key=9646370f4041cc9850f6ef70be921357&format=json';
>>>>>>> ea3b4ce08bf57e2275658563d0d57bb2a01c10f8

		return $http.get(url).then(function(response) {
			console.log(response);
			$scope.topTracks = response.data.toptracks.track;
<<<<<<< HEAD
		}); 
	}

=======
		});
	}

	$scope.getUserInfo();
>>>>>>> ea3b4ce08bf57e2275658563d0d57bb2a01c10f8
}]);