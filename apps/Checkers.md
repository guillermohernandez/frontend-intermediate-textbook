# Checkers
## Step 1 - Creating our classes
Our classes will consist of a `Checker`, `Board`, and a `Game` class. 
```javascript
function Checker() {
//...
}

function Board() {
//...
}

function Game() {
//...
}
```

## Step 1 - Separating our concerns
The [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) refers to dictating what each class will be responsible for.

We need to separate the responsibilities of each class.
* The `Checker` class will be concerned about
  * *attributes*
    * a team color `this.team = ...`
    * a position `this.position = ...`
    * a symbol `this.symbol = ...`
  * *methods*
    * moving its position `this.movePosition = function(newPosition) { ...`
* The `Board` class will be concerned about
  * *attributes*
    * "in play" checkers `this.checkers = ...`
    * a grid layout `this.grid = ...`
  * *methods*
    * viewing the board `this.viewBoard = function() { ...`
    * creating the checkers `this.createCheckers = function() { ...`
    * selecting a particular checker `this.selectChecker (position) { ...`
    * removing a "dead" checker `this.removeChecker = function(position) {...`
    * placing the checkers on the grid `this.placePieces = function() { ...`
    * resetting the grid to a blank 8x8 grid `this.resetGrid = function() { ...`
* `Game` class will be concerned about
  * *attributes*
  * *methods*
    * starting a game `this.start = function() { ...`
  

## Step 2 - Build the `Checker` class
A `Checker` piece has a few characteristics. First, it has a symbol. We can use [circle unicode 25CF](http://jrgraphix.net/r/Unicode/25A0-25FF) with the JavaScript `String.fromCharCode(0x1<unicode>)` method. We'll need to pass in a `color` into the constructor `function Checker(color) { ... ` and set the `Checker` instance's `this.symbol`.

```javascript
function Checker(color) {
  this.color = color;
  
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB)); // makes a ○ symbol
  } else {
    this.symbol = String.fromCharCode(0x125CF)); // makes a ● symbol
  }
}
```

We will also need to pass into the contructor a set of coordinates for the checkers location on the grid. The coordinates will be an array, `[row, column']`.
```javascript
function Checker(color, position) {
  //...
  this.position = position;
```

And lastly create your `movePiece(newPositions)` function that takes an array position and sets it as the `Checker`'s position.
```javascript
function Checker(color, position) {
  //...
  this.movePosition = function(newPosition) {
    this.position = newPosition;
  }
```

Let's test our methods and classes.
```javascript
var whiteChecker = new Checker('white', [0, 0]);
var blackChecker = new Checker('black', [0, 1]);

console.log(whiteChecker.symbol + ' ' + whiteChecker.position);
//=> ○ [0, 0]

console.log(blackChecker.symbol + ' ' + blackChecker.position);
//=> ● [0, 1] 

whiteCheck.movePiece([2, 3]);
console.log(whiteChecker.symbol + ' ' + whiteChecker.position)
//=> ○ [2, 3]
```
Step 3 - Build the `Board` class
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
```
and a loop that `push`es 8 of each color `new`ly instantiated  `Checker` with each of these positions into the `this.checkers` array.
