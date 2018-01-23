// Variables to track for the Game
let numMatches = 0;

// Initial state of the game has 0 moves.
let numMoves = 0;
const movesCounter = document.querySelector("span.moves");
movesCounter.innerText = numMoves;

/*
 * Create a list that holds all of your cards
 */
 let cardArray = ["fa-diamond", "fa-diamond",
 "fa-paper-plane-o", "fa-paper-plane-o",
 "fa-anchor", "fa-anchor",
 "fa-bolt", "fa-bolt",
 "fa-cube", "fa-cube",
 "fa-leaf", "fa-leaf",
 "fa-bicycle", "fa-bicycle",
 "fa-bomb", "fa-bomb"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function buildCardTable(cardArray) {
  // Shuffle card array from its current state.
  cardArray = shuffle(cardArray);
  const cardTable = document.querySelector("ul.deck");
  // Create a temporary fragment to store cards before adding them to the table.
  const cardDeck = document.createDocumentFragment();
  // Reusable card declarations.
  let newCard, cardValue;
  // Create a new card for each value in the cardArray.
  for (let card of cardArray) {
    newCard = document.createElement("li");
    newCard.className = "card";
    cardValue = document.createElement("i");
    cardValue.className = `fa ${card}`;
    newCard.appendChild(cardValue);
    // Add the new card to the deck.
    cardDeck.appendChild(newCard);
  }
  // Append the completed deck to the table so that it can be displayed.
  cardTable.appendChild(cardDeck);
}
buildCardTable(cardArray);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Toggles "open" and "show" classes for a card to flip it face-up or face-down
function flipCard(target) {
  target.classList.toggle("open");
  target.classList.toggle("show");
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
