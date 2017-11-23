

var playerTurn = 1
var numberOfTurns = 0

var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var userPositions = ["","","","","","","","",""];

$(document).ready(function() {

	$(".reload").hide();
	$(".box").click(function() {

		var id = this.id;

		if (playerTurn === 1) {
			$(this).text("X");
			userPositions[id] = "X"
		} else {
			$(this).text("O");
			userPositions[id] = "O"
		}

		playerTurn *= -1
		console.log(userPositions);

		numberOfTurns += 1

		if (numberOfTurns >= 5) {
			checkForWinner();

		}

	});

});

function checkForWinner() {


	for (var i = 0; i < winningCombinations.length; i++) {

		var x = winningCombinations[i][0];
		var y = winningCombinations[i][1];
		var z = winningCombinations[i][2];
		var ifEmpty = userPositions[x] != "" && userPositions[y] != "" && userPositions[z] != "";


		if (userPositions[x] === userPositions[y] && userPositions[x] === userPositions[z] && ifEmpty) {
			
			console.log(x);
			console.log(userPositions[x]);
			console.log(userPositions);

			$(".results").text("Winner is: " + userPositions[x] + "!");

			$(".reload").show();

		}

	}
}

function reloadPage() {
	window.location.reload();
}
