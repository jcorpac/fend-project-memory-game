// Variables to track for the Game
const maxStars = 3;
let numStars = maxStars;
let flippedCard = null;
let matchedCards = [];
let numSeconds = 0;
let counterId = null;

// Important UI elements
const movesCounter = document.querySelector("span.moves");
const cardTable = document.querySelector("ul.deck");
const restartButton = document.querySelector("div.restart");
const starPanel = document.querySelector("ul.stars");
const timerPanel = document.querySelector("span.timer");

// Initial state of the game has 0 moves.
let numMoves = 0;
movesCounter.innerText = numMoves;

/*
 * Create a list that holds all of your cards
 */
const cardFaces = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"].sort();
let cardArray = cardFaces.concat(cardFaces);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function buildCardTable(cardArray) {
  // Shuffle card array from its current state.
  cardArray = shuffle(cardArray);
  // Create a temporary fragment to store cards before adding them to the table.
  const cardDeck = document.createDocumentFragment();
  // Reusable card declarations.
  let newCard, cardValue;
  // Create a new card for each value in the cardArray.
  for (let card of cardArray) {
    newCard = document.createElement("li");
    newCard.className = "card";
    // Adds event listener to the card.
    // Less efficient than adding to the deck or table, but prevents cardValue object being accepted as target.
    newCard.addEventListener("click", cardClicked, true);

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

function updateStars(numStars) {
  const starBox = document.createDocumentFragment();
  // Add filled-in stars
  for (let counter = 0; counter < numStars; counter++){
    let newStar = document.createElement('li');
    let fullStar = document.createElement('i');
    fullStar.classList = "fa fa-star";
    newStar.appendChild(fullStar);
    starBox.appendChild(newStar);
  }
  // Add empty stars
  for (counter = numStars; counter < maxStars; counter++){
    let newStar = document.createElement('li');
    let fullStar = document.createElement('i');
    fullStar.classList = "fa fa-star-o";
    newStar.appendChild(fullStar);
    starBox.appendChild(newStar);
  }
  starPanel.innerHTML = "";
  starPanel.appendChild(starBox);
}
// Automatically set full stars at the start of a new game.
updateStars(maxStars);

// Reset the state of the game for another round.
function resetGame(){
  // Set up a new card table.
  cardTable.innerHTML = "";
  buildCardTable(cardArray);
  flippedCard = null;
  matchedCards = [];
  // Reset number of moves to 0
  numMoves = 0;
  movesCounter.innerText = numMoves;
  // Reset number of stars to maxStars.
  numStars = maxStars;
  updateStars(numStars);
  // Reset the time counter to -1 (will be updated to 0 seconds at the next tick)
  clearInterval(counterId);
  counterId = null;
  timerPanel.innerText = '0 seconds';
  numSeconds = 0;
}

// Add restart functionality to restart button.
restartButton.addEventListener("click", resetGame);

// Toggles "open" and "show" classes for a card to flip it face-up or face-down
function flipCard(target) {
  target.classList.toggle("open");
  target.classList.toggle("show");
}

// Marks two "open" cards as matching and sets the appropriate classes.
function matchCards(card1, card2) {
  // Flip the flipped card back to remove "open" and "show" classes.
  flipCard(card1);
  // Add "match" class to cards.
  card1.classList.add("match");
  card2.classList.add("match");
}

// Does what it says. Increments the counter for moves, and displays the new value on the page.
function incrementMoveCounter() {
  numMoves++;
  const numCardFaces = cardFaces.length;
  switch (numMoves){
    case Math.round(numCardFaces * 2):   // Two attempts per card type
      numStars = 2;
      updateStars(numStars);
      break;
    case Math.round(numCardFaces * 2.5): // 2.5 attempts per card type
      numStars = 1;
      updateStars(numStars);
      break;
  }
  movesCounter.innerText = numMoves;
}

// Compare the icon classes of two cards.
function compareCards(card1, card2) {
  return card1.firstChild.classList[1] == card2.firstChild.classList[1];
}

// Display end-game screen
// If the user wants to play again, reset the game.
function gameOver() {
  // Stop the counter and display the end-game message.
  clearInterval(counterId);
  const message = `Game Over
  You finished the game in ${numMoves} moves and earned ${numStars} out of ${maxStars} stars!
  You found all of the cards in ${numSeconds} seconds!
  Would you like to play again?`;
  if (window.confirm(message)) {  // If the user wants play again
    resetGame();  // and reset the game.
  }
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
function cardClicked(event) {
  const clickedCard = event.target;
  // If the card is already open, or matched, or is not a card (such as a card face icon), then ignore the click.
  if (clickedCard.classList.contains('open') ||
      clickedCard.classList.contains('match') ||
      !clickedCard.classList.contains('card')) {
    return;
  }

  if(counterId == null) {
    // Start a counter for the number of seconds since the game has started.
    counterId = setInterval(function(){
      timerPanel.innerText = `${++numSeconds} seconds`;
    }, 1000);
  }

  // Flip the clicked card.
  flipCard(clickedCard);
  // First card flip of a move.
  if (flippedCard == null){
    flippedCard = clickedCard;
  } else {    // Second card flip of a move
    incrementMoveCounter();   // Move is valid, so increment the counter
    if (compareCards(flippedCard, clickedCard)) {   // If the cards match
      // Set cards to match class.
      matchCards(clickedCard, flippedCard);
      // Remove comparison card
      flippedCard = null;
      // Add the card's face value to the list of matched cards.
      matchedCards.push(clickedCard.firstChild.classList[1]);
      // Check to see if all cards are matched
      if (matchedCards.length == cardFaces.length) {
        // If all card faces have been found, then the game is over.
        window.setTimeout(gameOver, 50);
      }
    } else {    // If the cards do not match.
      // Wait 500ms, then flip the cards back and end the turn.
      window.setTimeout(function() {
        flipCard(clickedCard);
        flipCard(flippedCard);
        flippedCard = null;
      }, 500);
    }
  }
}
