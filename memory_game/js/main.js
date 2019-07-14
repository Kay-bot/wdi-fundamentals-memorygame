var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


function checkMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

var flipCard = function(cardId) {
	cardsInPlay.push(cards[0]);
	console.log("User flipped" + " " + cards[0]);
	cardsInPlay.push(cards[2]);
	console.log("User flipped" + " " + cards[2]);
	}
	flipCard(0);
	flipCard(2);
	checkMatch();




/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);*/

/*if (cardInPlay.length === 2 && cardInPlay[0] === cardInPlay[2]) {
	alert("You have got a match!");
	} else {alert("Sorry, try again.");
	};*/







