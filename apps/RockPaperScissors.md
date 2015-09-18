# Rock, Paper, Scissors
Build a command line game that takes two (`hand1`, `hand2`) inputs (hands: `rock`, `paper`, or `scissors`) and outputs who the winner is, or if it's a tie.

Create a file `subl RockPaperScissors.js`
Save the file.

Try to commit in between steps. 
```bash
git status
git add RockPaperScissors.js
git commit -m "Building Rock Paper Scissors in Javascript!"
```

## Step 1 - `require` your dependencies
```javascript
'use strict';

var prompt = require('prompt');
// For this particular package, we need to "start" it
prompt.start()
```

## Step 2 - Test that the script works
Let's try to `console.log()` something out.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

console.log("Let's get started!");
```
Now in your terminal, run `node RockPaperScissors.js`. You should see your output.

## Step 3 - Let's attempt a prompt
Let's start interfacing with the user.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['hand1', 'hand2'], function (error, result) {
  console.log('First Hand: ' + result['hand1']);
  console.log('Second Hand: ' + result['hand2']);
});
```
Test it out `node RockPaperScissors.js`.

## Step 4 - Game logic
Let's think about the logic of Rock Paper Scissors:

1. If both hands are the same, "It's a tie!"
2. If the first hand is 'rock'
    * If the second hand is 'scissors', then 'Player 1 wins!'
    * Otherwise (which basically means the second hand is 'paper', since we have already ruled out a tie and 'scissors), 'Player 2 wins!'
3. If the first hand is 'paper`
  * If the second hand is 'rock', then 'Player 1 wins!'
  * Otherwise (second hand must be 'scissors'), 'Player 2 Wins!'
4. If the first hand is 'scissors'
  * If the second hand is 'paper', then 'Player 1 wins!'
  * Otherwise (second hand must be 'rock'), 'Player 2 Wins!'

Now write that into a conditional:
```javascript
if (hand1 === hand2) {
  return "It's a tie!";
}

if (hand1 === 'rock') {
  if (hand2 === 'scissors') {
    return 'Player 1 wins!';
  }
  // If we reach here, player 2 must have dealt paper
  return 'Player 2 wins!';
}

if (hand1 === 'paper') {
  // fill this in using the logic above

}

if (hand1 === 'scissors') {
  // fill this in using the logic above  
  
}
```

## Step 5 - Put logic into script
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['hand1', 'hand2'], function (error, result) {
  if (result['hand1'] === result['hand2']) {
    return "It's a tie!";
  }

  if (result['hand1'] === 'rock') {
    if (result['hand2'] === 'scissors') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }

  if (result['hand1'] === 'paper') {
    // fill this in using the logic above

  }

  if (result['hand1'] === 'scissors') {
    // fill this in using the logic above  
  
  }
});
```

## Step 6 - Refactor
Our `prompt.get()` method is bloated. Let's move it out into it's own "helper" function called `compareHands(hand1, hand2)` by using the decomposition method.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

function compareHands(hand1, hand2) {
  if (hand1 === hand2) {
    return "It's a tie!";
  }

  if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }

  if (hand1 === 'paper') {
    // fill this in using the logic above

  }

  if (hand1 === 'scissors') {
    // fill this in using the logic above  
  
  }
}

prompt.get(['hand1', 'hand2'], function (error, result) {
  console.log(compareHands(result['hand1'], result['hand2']));
});
```
Now test it out so far!

## Step 7 - Edge Cases
Our little app is not very robust. For instance, it's not accounting for some "edge cases" like what if we enter something other than 'rock', 'paper', or 'scissors'? Write another helper function `acceptableInput(hand)` that `return true` if the input is either `rock`, `paper`, or `scissors`
```javascript
function acceptableInput(hand) {
  if (hand === 'rock' || hand === 'paper' .....) {
    // should return true, which will break out of function here
  }
  // otherwise return false by default here
}

prompt.get(['hand1', 'hand2'], function (error, result) {
  if (acceptableInput(result['hand1']) && acceptableInput(result['hand2'])) {
    console.log(compareHands(result['hand1'], result['hand2']));
  } else {
    console.log('Only "rock", "paper", or "scissors" is acceptable');
});
```

## Step 8 - Input Scrubbing
We should probably also except different variations of the words, like 'ROCK', 'Scissors', 'pApEr' just to make  users happy. We can use the `''.toLowerCase()` method ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) to help "scrub" our input by always assuring that it is lowercase.
```javascript
prompt.get(['hand1', 'hand2'], function (error, result) {
  var lowerHand1 = result['hand1'].toLowerCase();
  var lowerHand2 = result['hand2'].toLowerCase();
  if (acceptableInput(lowerHand1) && acceptableInput(lowerHand2)) {
    console.log(compareHands(lowerHand1, lowerHand2));
  } else {
    console.log('Only "rock", "paper", or "scissors" is acceptable');
});
```
