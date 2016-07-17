var app = angular.module('app', []);

app.controller('appCtrl', function($scope, $timeout){
	var totalSeconds = 0;
	$scope.timeTaken=0;
	$scope.lastFive = [];
	var posLastElem = 0;

	$scope.updateValue = function(){
		$timeout(function(){
			if ($scope.guessValue!==0) { 
				$scope.timeTaken++ ;
				$scope.updateValue();
			}
		},1000);
	}	

	$scope.initializeGame = function() {
		$scope.guess = null;
		$scope.original = Math.floor(Math.random() * 999 + 1);
		$scope. noOfTires = 0;
		$scope.guessValue = null;
		$scope.display = false;
		$scope.updateValue();
	}

	$scope.verifyGuess = function() {
		$scope.guessValue = $scope.original - $scope.guess;
		$scope.noOfTires= $scope.noOfTires+ 1;
		if (posLastElem < 5) {
			$scope.lastFive.push($scope.guess);
			posLastElem++;
		} else {
			$scope.lastFive.splice(0,1); 
			$scope.lastFive.push($scope.guess);
		}
	} 
	
	$scope.displayAnswer = function() {
		$scope.original = Math.floor(Math.random() * 999 + 1);
		$scope.display = true;
	}

	 $scope.getContent = function(obj){
	     return obj.value + " " + obj.text;
	 }

	$scope.initializeGame();

});