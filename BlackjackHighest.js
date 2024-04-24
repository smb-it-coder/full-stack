/**
 * Using the Java language, have the function BlackjackHighest(strArr) take the strArr parameter being passed which will
 * be an array of numbers and letters representing blackjack cards. Numbers in the array will be written out.
 * So for example strArr may be ["two","three","ace","king"]. The full list of possibilities for strArr is: two, three,
 * four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below, above,
 * or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in
 * relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must
 * count the ace as a 1. You must always try and stay below the 21 mark. So using the array mentioned above, the output
 * should be below king. The ace is counted as a 1 in this example because if it wasn't you would be above the 21 mark.
 * Another example would be if strArr was ["four","ten","king"], the output here should be above king. If you have a
 * tie between a ten and a face card in your hand, return the face card as the "highest card". If you have multiple
 * face cards, the order of importance is jack, queen, then king.
 *
 * @author Brij Singh
 */


let BlackjackHighest = function(strArr){

    const cardValue = {two: 2,three: 3,four: 4,five: 5,six: 6,seven: 7, eight: 8, nine: 9, ten: 10,jack: 10, queen: 10,king: 10,
};


    const hand = strArr;
    let sum = 0;
    let highest = "two";

    for (let i = 0; i < hand.length; i++) {
        let currentCard = hand[i].toLowerCase();
        highest = highest.toLowerCase();
        let cardsEqual = function () {
                  if (cardValue[currentCard] == cardValue[highest]) {
                    return true;
                  }
               };

        if (cardValue[currentCard] > cardValue[highest]) {
             highest = currentCard;
        } else if (
      (cardsEqual() && highest == "ten" && currentCard == "jack") ||
      currentCard == "queen" ||
      currentCard == "king"
    ) {
      highest = currentCard;
    } else if (cardsEqual() && cardValue == "queen" && highest == "jack") {
      highest = currentCard;
    } else if (cardsEqual() && cardValue == "king" && highest == "jack") {
      highest = currentCard;
    } else if (cardsEqual() && cardValue == "king" && highest == "queen") {
      highest = currentCard;
    }


         if (currentCard == "ace") {
              var acePresent = true;
        } else {
          sum += cardValue[currentCard];
        }
        
    }

     // If an ace was present and the sum is less than 11
  if (acePresent == true && sum < 11) {
    // The ace is worth 11 and it’s the highest card
    aceValue = 11;
    highest = "ace";
    // Add the ace value to the sum
    sum += aceValue;
  } else if (acePresent == true) {
    // Otherwise, it’s worth one
    aceValue = 1;
    sum += aceValue;
  }

    // Determine if we busted
  if (sum < 21) {
    result = "below";
  } else if ((sum = 21)) {
    result = "blackjack";
  } else {
    result = "above";
  }

  // Build the result and return it
  result += " " + highest;
  return result;
    
    
}


console.log(BlackjackHighest(['queen','three','ten']))
