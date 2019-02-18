function cardGame() { //logic for choosing cards
	let cardColour = ['heart', 'diamond', 'club', 'spade'];
	let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	let firstCard = [], secondCard = [], valueCheck, resArray = [];

	function numberRandomInclusive(min, max) { //Function for inclusive max min random numbers

		return Math.floor(Math.random() * (max - min + 1) + min);

	}

	function cardPicker() {

		let numRand, randomCard = [];

		numRand = numberRandomInclusive(0, 3); //chooses a colour

		randomCard[0] = cardColour[numRand];

		numRand = numberRandomInclusive(0, 12); //chooses a value

		randomCard[0] += '-' + cardValue[numRand] + '.png';

		randomCard[1] = cardValue[numRand];

		return randomCard;

	}

	firstCard = cardPicker(); //sets the first card
	secondCard = cardPicker(); //sets the second card

	while (firstCard[0] == secondCard[0]) { //To avoid showing the same card twice
		secondCard = cardPicker(); //Chooses a different random card
	}

	if (firstCard[1] < secondCard[1]) {
		valueCheck = 0;
	}
	else if (firstCard[1] > secondCard[1]) {
		valueCheck = 1;
	}
	else {
		valueCheck = 2;
	}

	resArray[0] = firstCard[0];
	resArray[1] = secondCard[0];
	resArray[2] = valueCheck;

	return resArray; //returns the cards urls and checks if first card is greater than second

}

let gameResults = cardGame(); //game results takes what cardGame returns


let score = 0;
let textScore = '<strong>Score: </strong>';

$('.score-text').html(textScore + score);

$('#first-image-front').attr('src', 'img/pngs/'+gameResults[0]);
$('#second-image-front').attr('src', 'img/pngs/'+gameResults[1]);

let resetFlag = 0;

$('#first-col').on('click', function() {

	let roundCounter = 1;

	$('#first-card-back').css('transform', 'perspective(600px) rotateY(-180deg)');
	$('#first-card-front').css('transform', 'perspective(600px) rotateY(0deg)');

	$('.greater-btn').on('click', function() {

		if (roundCounter == 1) {

			$('#second-card-back').css('transform', 'perspective(600px) rotateY(-180deg)');
			$('#second-card-front').css('transform', 'perspective(600px) rotateY(0deg)');

			setTimeout(function() {
				if (gameResults[2] == 0) {
					//alert('The first card has a greater value than the second one');
					score += 1;
					$('.score-text').html(textScore + score);
				}
				else if (gameResults[2] == 1) {
					//alert('The second card has a greater value than the first one');
					score -= 1;
					$('.score-text').html(textScore + score);
				}
				else {
					alert('Tie');
				}
			}, 300);


			setTimeout(function() {

				$('#first-card-back').css('transform', 'perspective(600px) rotateY(0deg)');
				$('#first-card-front').css('transform', 'perspective(600px) rotateY(-180deg)');

				$('#second-card-back').css('transform', 'perspective(600px) rotateY(0deg)');
				$('#second-card-front').css('transform', 'perspective(600px) rotateY(-180deg)');

				setTimeout(function() {

					gameResults = cardGame();

					$('#first-image-front').attr('src', 'img/pngs/'+gameResults[0]);
					$('#second-image-front').attr('src', 'img/pngs/'+gameResults[1]);
				}, 300);

			}, 1000);

		roundCounter = 0;
		resetFlag = 1;

		}

		

	});

	$('.smaller-btn').on('click', function() {

		if (roundCounter == 1) {

			$('#second-card-back').css('transform', 'perspective(600px) rotateY(-180deg)');
			$('#second-card-front').css('transform', 'perspective(600px) rotateY(0deg)');

			setTimeout(function() {
				if (gameResults[2] == 0) {
					//alert('The first card has a greater value than the second one');
					score -= 1;
					$('.score-text').html(textScore + score);
				}
				else if (gameResults[2] == 1) {
					//alert('The second card has a greater value than the first one');
					score += 1;
					$('.score-text').html(textScore + score);
				}
				else {
					alert('Tie');
				}
			}, 300);

			
			setTimeout(function() {

				$('#first-card-back').css('transform', 'perspective(600px) rotateY(0deg)');
				$('#first-card-front').css('transform', 'perspective(600px) rotateY(-180deg)');

				$('#second-card-back').css('transform', 'perspective(600px) rotateY(0deg)');
				$('#second-card-front').css('transform', 'perspective(600px) rotateY(-180deg)');

				setTimeout(function() {

					gameResults = cardGame();

					$('#first-image-front').attr('src', 'img/pngs/'+gameResults[0]);
					$('#second-image-front').attr('src', 'img/pngs/'+gameResults[1]);
				}, 300);

			}, 1000);

		roundCounter = 0;
		resetFlag = 1;

		}

	});
	
});

$('.reset-btn').on('click', function() {

	if (resetFlag == 1) {

		let res = confirm('Do you want to reset the game?');

		if (res == true) {

			$('#first-card-back').css('transform', 'perspective(600px) rotateY(0deg)');
			$('#first-card-front').css('transform', 'perspective(600px) rotateY(-180deg)');

			$('#second-card-back').css('transform', 'perspective(600px) rotateY(0deg)');
			$('#second-card-front').css('transform', 'perspective(600px) rotateY(-180deg)');

			score = 0;

			$('.score-text').html(textScore + score);

			setTimeout(function() {

				gameResults = cardGame();

				$('#first-image-front').attr('src', 'img/pngs/'+gameResults[0]);
				$('#second-image-front').attr('src', 'img/pngs/'+gameResults[1]);

			}, 300);

		}

	}

	resetFlag = 0;

});