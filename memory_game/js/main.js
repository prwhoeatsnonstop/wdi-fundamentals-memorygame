
/*console.log("Up and running!"); one of the console.logs to try out in developer tools*/

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; initial variables created for intro to JS project */

/*var cards = ["queen", "queen", "king", "king"]; old code for cards array*/

var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch() {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

function flipCard(cardId) {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    cardId = this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    };
    console.log("User flipped" + cards[cardId].rank);
    /* this line is error*/
    console.log("User flipped" + cards[cardId].cardImage);
    console.log("User flipped" + cards[cardId].suit);

};

function createBoard() {

    for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute ('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
 }
};


createBoard();