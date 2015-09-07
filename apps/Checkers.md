# Checkers
## Step 0 - Install Dependencies and build script
`npm install colors prompt`
```javascript
'use strict';

var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();
```

## Step 1 - Define the roles of our classes
Our classes will consist of a `Checker`, `Board`, and a `Game` class. We need to separate the responsibilities of each class.
* `Checker` class will be responsible for
  * its team color `this.team = ...`
  * it's position on the board as an array `this.position = ...`
  * update it's position `this.updatePosition = function(newPosition) { ...`
  * what its `symbol` looks like `this.symbol = ...`
* `Board` class will be responsible for 
  * the checkers that it contains in an array `this.checkers = ...`
  * create the pieces `this.createPieces = function() { ...`
  * locate a particular piece `this.locatePiece = function (position) { ...`
  * remove a "dead" piece `this.removePiece = function(position) {...`
  * the checkered board layout `this.board = ...`
  * be able to initially place the pieces at their specified locations `this.placePieces = function() { ...`
  * be able to clear the board (after every move) replace the pieces with their current positions `this.resetBoard = function() { ...`
* `Game` class will be responsible for
  * starting a game `this.start = function() { ...`
  * getting input from the user `this.getPrompt = function() { ...`
  

## Step 2 - Define the `Checker` class
```javascript
function Checker() {
  
}
```
A `Checker` piece has a few characteristics. First, it has a symbol. We can use [circle unicode 25CF](http://jrgraphix.net/r/Unicode/25A0-25FF) with the JavaScript `String.fromCharCode(0x1<unicode>)` method. We'll need to pass in a team `color` into the constructor `function Checker(color) { ... ` and set the team and color of the `Checker` instance's symbol.

```javascript
function Checker(color) {
  this.team = color;
  
  if (color === 'red') {
    this.symbol = colors.red(String.fromCharCode(0x125CF));
  } else {
    this.symbol = colors.blue(String.fromCharCode(0x125CF));
  }
}
```

We will also need to pass into the contructor a position on the board (that we have yet to make). The postion will be an array, `[row, column']`. And lastly create your `movePiece(newPositions)` function that takes an array position and sets it as the `Checker`'s position.

Let's test our methods and classes.
```javascript
var blueChecker = new Checker('blue', [0, 0]);
var redChecker = new Checker('red', [0, 1]);

console.log(blueChecker.symbol + ' ' + blueChecker.position);
\\=> • [0, 0] //should be blue dot

console.log(redChecker.symbol + ' ' + redChecker.position);
\\=> • [0, 1] //should be red dot

blueCheck.movePiece([2, 3]);
console.log(blueChecker.symbol + ' ' + blueChecker.position)
\\=> • [2, 3]
```
Step 3 - Define a `Board` class.
Let's build a board. `this.board` should be a 9 x 9 two dimensional array (8 x 8 for the game board and an extra row and column for the coordinates). It is checkered, so we can use `colors.bgWhite(' ')` to fill in a white background.
```javascript
var bgw = colors.bgWhite(' ');
this.board = [
    [' ', '1', '2', '3', '4', '5', '6', '7', '8'],
    ['1', bgw, ' ', bgw, ' ', bgw, ' ', bgw, ' '],
    ['2', ' ', bgw, ' ', bgw, ' ', bgw, ' ', bgw],
    ['3', bgw, ' ', bgw, ' ', bgw, ' ', bgw, ' '],
    ['4', ' ', bgw, ' ', bgw, ' ', bgw, ' ', bgw],
    ['5', bgw, ' ', bgw, ' ', bgw, ' ', bgw, ' '],
    ['6', ' ', bgw, ' ', bgw, ' ', bgw, ' ', bgw],
    ['7', bgw, ' ', bgw, ' ', bgw, ' ', bgw, ' '],
    ['8', ' ', bgw, ' ', bgw, ' ', bgw, ' ', bgw]
];

// and to print it
this.printBoard = function() {
    for (var i = 0; i < this.board.length; i++) {
        console.log(this.board[i].join(' '));
    }
}
```

Test to see if we can print our board
```javascript
var gameBoard = new Board();
console.log(gameBoard.board)
// hopefully checkerboarded
//=>  1 2 3 4 5 6 7 8
//=>1
//=>2
//=>3
//=>4
//=>5
//=>6
//=>7
//=>8
```

We are going to want to reset the board often, so lets stick the board into a `this.resetBoard` function.
```javascript
this.resetBoard = function() {
  var bgw = colors.bgWhite(' ');
  this.board = [
  ...
```

The `Board` class should have a `this.checkers` property set to an empty array `[]`. Then in a `this.createPieces` function, we'll need to have
```javascript
var redSpots = [
    [1, 2], [1, 4], [1, 6], [1, 8],
    [2, 1], [2, 3], [2, 5], [2, 7]
];
var blueSpots = [
    [7, 2], [7, 4], [7, 6], [7, 8],
    [8, 1], [8, 3], [8, 5], [8, 7]
];

and a loop that `push`es 8 of each color `new`ly instantiated  `Checker` with each of these positions into the `this.checkers` array.
```
