# Rock, Paper, Scissors
Build a command line game that takes two (`hand1`, `hand2`) inputs (hands: `rock`, `paper`, or `scissors`) and outputs who the winner is, or if it's a tie.

## Spec 1 - If it's a tie, `return "It's a tie!"`
It must be exactly "It's a tie!" for the tests to pass

## Spec 2 - Announce the winner
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

## Spec 3 - Input Scrubbing
We should probably also except different variations of the words, like 'ROCK', 'Scissors', 'pApEr' just to make  users happy. We can use the `''.toLowerCase()` method ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) to help "scrub" our input by always assuring that it is lowercase.

