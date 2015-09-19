# Tic Tac Toe
## Step 1 - Start the script
```bash
subl TicTacToe.js
```
Since this is a game, we'll want to use our method of asking for multiple inputs
```javascript
'use strict';

var prompt = require('prompt');
prompt.start();

function getPrompt() {
  prompt.get(['input'], function (error, result) {
    getPrompt();
  });
}

getPrompt();
```

## Step 2 - Build and print the game board
The game of Tic Tac Toe is simply just a 3 x 3 board of blank spots. We are going to build it using an array of arrays.
```javacript
var board = [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ];
```
Doesn't look like the board, you say? What if we format it a little different?
```javacript
var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];
```
That's a little better visually. But when we `console.log()` it, we get the flat formatting again.
```javascript
console.log(board);
//=> [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ]
```
We are need going to need to print out each "row" of the game board consecutively, in order to visually stack them. Remember how we target specific items in an array? By identifying the "index".
```javascript
console.log(board[0]); //=> [ ' ', ' ', ' ' ]
console.log(board[1]); //=> [ ' ', ' ', ' ' ]
console.log(board[2]); //=> [ ' ', ' ', ' ' ]
```
Now let's throw that into a function so we can call it whenever we feel like it.
```javascript
'use strict';

var prompt = require('prompt');
prompt.start();

function showBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function getPrompt() {
  prompt.get(['input'], function (error, result) {
    showBoard(); //we want to see the board before every prompt
    getPrompt();
  });
}

showBoard(); //make sure to show the board at the beginning of the game
getPrompt();
```

## Step 3 - Marking the board
Let's figure out how we want to mark the board. Our board is made up of **columns** and **rows**
```javacript
var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];
```

To access one of the spots, we'll need to access our overall array with a row index `board[row_index]` and then with a column index `board[row_index][col_index]`

```javascript
var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];

board[1][2] = 'X';

console.log(board[0]); //=> [ ' ', ' ', ' ' ]
console.log(board[1]); //=> [ ' ', ' ', 'X' ]
console.log(board[2]); //=> [ ' ', ' ', ' ' ]
```

So let's collect that input from our prompt.
```javascript

//...

function getPrompt() {
  prompt.get(['row', 'column'], function (error, result) {
    var row_idx = parseInt(result['row'], 10); // the input comes in a string, so we
    var col_idx = parseInt(result['column'], 10); // must parse it to a base-10 integer
    board[row_idx][col_idx] == 'X';
    showBoard();
    getPrompt();
  });
}

showBoard();
getPrompt();
```

That's kind of clogging up our `getPrompt()` function, let's separete that logic out into it's own function `placeMark()`

```javascript
'use strict';

var prompt = require('prompt');
prompt.start();

var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];

function showBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function placeMark(result) {
  var row_idx = parseInt(result['row'], 10);
  var col_idx = parseInt(result['column'], 10);
  board[row_idx][col_idx] == 'mark';
}

function getPrompt() {
  prompt.get(['row', 'column'], function (error, result) {
    placeMark(result); // we'll pass in our result (contains our captured input) as an argument
    showBoard();
    getPrompt();
  });
}

showBoard();
getPrompt();
```

## Step 4 - Pretty Print
So our board, while legible, still looks like a stack of arrays. We can use the [`[].join(separator)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) to make it a little prettier.
```javascript
// example usage
console.log([ 'X', 'O', 'X' ].join(' | '));
console.log('---------');
// ...
```
Try tweaking your `showBoard()` function to show a prettier board.


## Step 5 - Who's Turn?
We want be able to keep track of who's turn it is. So let's set that as a variable.
```javascript
//...

var playerTurn = 'X'; // We'll let Player X go first

function placeMark(result) {
  var row_idx = parseInt(result['row'], 10);
  var col_idx = parseInt(result['column'], 10);
  board[row_idx][col_idx] == playerTurn; // and we'll use it here
}

function getPrompt() {
  console.log("It's Player " + playerTurn + "turn."); // Let's remind the players who's turn it is
  prompt.get(['row', 'column'], function (error, result) {
    placeMark(result);
    playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // we'll use the ternary operator here to toggle between players
    showBoard();
    getPrompt();
  });
}

//...
```

## Step 6 - Check for a win
Think about playing a game of tic tac toe, how do you check for a win? You most likely can tell ahead of time if a win is coming up, but the computer can't. It must scan the board after every mark to check for a win. So let's tell the computer what a win looks like.
* Three of the same marks in a "row" wins
* Can be horizontal, vertical, or diagonal
 Now let's describe to the computer what a "row" is
```
* horizontally
  * board[0][0] board[0][1] board[0][2] (top row)
  * board[1][0] board[1][1] board[1][2] (middle row)
  * board[2][0] board[2][1] board[2][2] (bottom row)
* vertically
  * board[0][0] board[1][0] board[2][0] (left column)
  * board[0][1] board[1][1] board[2][1] (middle column)
  * board[0][2] board[1][2] board[2][2] (right column)
* diagonally
  * board[0][0] board[1][1] board[2][2] (top-left, center, bottom-right)
  * board[2][0] board[1][1] board[0][2] (top-right, center, bottom-left)
```

Write these into individual functions, then `checkForWin()` after a mark is placed, but before the player changes.
```javascript
//...

function horizontalWin() {
    return (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
        (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
        (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
}

function verticalWin() {
    //...
}

function diagonalWin() {
    //...
}

function checkForWin() {
  if ( horizontalWin() || verticalWin() || diagonalWin() ) {
    console.log('Player ' +  playerTurn + ' Won!'); // announce to the world
    showBoard(); // show the board for bragging rights
    return true;
  }
  return false;
}

// ...

function getPrompt() {
  console.log("It's Player " + playerTurn + "turn.");
  prompt.get(['row', 'column'], function (error, result) {
    placeMark(result);
    // return out of the "prompt loop" if checkForWin() is true
    playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // we'll use the ternary operator here to toggle between players
    showBoard();
    getPrompt();
  });
}

//..
```
