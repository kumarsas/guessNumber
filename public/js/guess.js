angular.module('guessNumber',[])
.controller('guessNumberCtrl', guessNumberCtrl);

function guessNumberCtrl($scope){

	 $scope.verifyGuess = function(){
	 	$scope.answer = null;
	 	$scope.blank = $scope.guess;
		$scope.deviation = $scope.original - $scope.guess;
		$scope.NumberOfRetries = $scope.NumberOfRetries + 1;
		if($scope.guess === null ){
			$scope.initializeGame();
			$scope.blank = null;
			$scope.message = "Please enter some number as input!!";
		};
	}

	 $scope.initializeGame = function(){
		$scope.NumberOfRetries=0;
		$scope.original= Math.floor(Math.random()*1000 +1);
		$scope.guess = null;
		$scope.deviation=null;
		$scope.answer = null;	
	}
	$scope.checkAnswer = function(){
		$scope.deviation=null;
		$scope.answer= $scope.original;
		if($scope.guess === null){
			$scope.initializeGame();
			$scope.blank = null;
			$scope.message = "Please enter some number as input!!";
		};
	}
	$scope.initializeGame();
}