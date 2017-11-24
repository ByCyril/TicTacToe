

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

		numberOfTurns += 1

		if (numberOfTurns == 9) {
			$(".results").text("Tie!");
			$(".reload").show();
		}
		
		if (numberOfTurns >= 5) {
			checkForWinner(userPositions);

		}

	});

});

function checkForWinner(userPos) {


	for (var i = 0; i < winningCombinations.length; i++) {

		var x = winningCombinations[i][0];
		var y = winningCombinations[i][1];
		var z = winningCombinations[i][2];
		var ifEmpty = userPos[x] != "" && userPos[y] != "" && userPos[z] != "";

		if (userPos[x] === userPos[y] && userPos[x] === userPos[z] && ifEmpty) {
			
			$(".results").text("Winner is: " + userPos[x] + "!");
			$("#"+x).css("background-color", "blue");
			$("#"+y).css("background-color", "blue");
			$("#"+z).css("background-color", "blue");
			$(".reload").show();
			break;
		} 

	}
}

function reloadPage() {

	$(".results").text("");
	$(".reload").hide();
	$(".box").text("");
	$("div").css("background-color", "white");
	userPositions = ["","","","","","","","",""];
	numberOfTurns = 0
	playerTurn = 1
}

function readTextFile(file) {

	$.get(file, function(data) {
		console.log(data);
	});


}

// readTextFile("text.txt");


function aiLogic() {

	var tempUserPositions = userPositions;
	var position = ""


	var i = 0;

	while (i < tempUserPositions.length) {

		position = tempUserPositions[i];

		if (position == "") {
			tempUserPositions[i] = "O"
		} else {
			i++;
		}

	}

}

function checkOutcome(positions) {

	var tempUserPositions = positions;

	var pos = 
}





