
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
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId].rank); cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
/*var cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo); previous code for homework*/



}

checkForMatch();
flipCard(0);
flipCard(2);

/*function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

cardsInPlay.push(cards);


function flipCard(cardId) {
    if (cardsInPlay.length === 2)
    console.log("User flipped" + cards[cardId]);
}



checkForMatch();
flipCard(0);
flipCard(2);*/