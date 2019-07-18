var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds", 
cardImage:	"images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage:	"images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard();

function flipCard(){

	var cardId = this.getAttribute("data-id"); 
	cardsInPlay.push(cards[cardId].rank);
	cardsInPlay.push(cardId.id);
	this.setAttribute("src", cards[cardId].cardImage);
	checkMatch();
 };


function checkMatch() {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2])
{
	alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
  //console.log(cardsInPlay);
  //this.setAttribute("src", "images/back.png");
}



