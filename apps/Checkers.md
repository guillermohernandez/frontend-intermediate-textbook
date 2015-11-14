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
The [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) refers to deciding what each class will be responsible for.

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
A `Checker` piece has a few characteristics. First, it has a symbol. We can use [unicode characters](http://jrgraphix.net/r/Unicode/25A0-25FF) with the JavaScript `String.fromCharCode(0x1<unicode>)` method. We'll need to pass in a `color` into the constructor `function Checker(color) { ... ` and set the `Checker` instance's `this.symbol`.

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
## Step 3 - Build the `Board` class
Let's build a board. `this.board` should be a 8 x 8 two dimensional array. It'll be filled with `null`s for now until we get some checkers on it. Here's a sketch of what our blank board will look like.
```javascript
[
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
]
```

This is a lot of work to type out. So let's write a function that will create our grid for us.
```javascript
function Board() {
    // first let's create our grid attribute
    this.grid = [];

    // creates an 8x8 array, filled with null values
    this.createGrid = function() {
        // loop to create the 8 rows
        for (var row = 0; row < 8; row++) {
            this.grid[row] = []
            // push in a column of 8 nulls
            for (var column = 0; column < 8; column++) {
                this.grid[row].push(null);
            }
        }
    }
}
```

Let's write a function so we can see our pretty board
```javascript
function Board() {
    //...

    this.viewGrid = function() {
        // add our column numbers
        var grid = '  0 1 2 3 4 5 6 7\n';
        for (var row = 0; row < 8; row++) {
            // we start with our row number in our array
            var rowOfCheckers = [row];
            // a loop within a loop
            for (var column = 0; column < 8; column++) {
                // if the location is "truthy" (contains a checker piece, in this case)
                if (this.grid[row][column]) {
                    // push the symbol of the check in that location into the array
                    rowOfCheckers.push(this.grid[row][column].symbol);
                } else {
                    // just push in a blank space
                    rowOfCheckers.push(' ');
                }
            }
            // join the rowOfCheckers array to a string, separated by a space
            grid += rowOfCheckers.join(' ');
            // add a 'new line'
            grid += '\n';
        }
        console.log(grid);
    }
}
```

We are going to want to reset the board often, so lets stick the board into a `this.resetBoard` function.
```javascript
function Board() {
    //...

    // will reset our grid to a blank 8x8 grid of nulls
    this.resetGrid = function() {
        // "clear" the grid
        this.grid = [];

        // recreate the empty grid of nulls
        this.createGrid();
    }
}
```

The board is responsible for keeping track of the in-play checkers. Let's assign it that attribute, then we'll create a function `this.createCheckers()` that will fill it up.
```javascript
function Board() {
    //...
    // Our "bag of checkers", starts out empty
    this.checkers = [];

    // creates the checkers to put into out "bag" (this.checkers)
    this.createCheckerInstances = function() {

        // hardcoded positions of the checkers
        var whitePositions = [
            [0, 1], [0, 3], [0, 5], [0, 7],
            [1, 0], [1, 2], [1, 4], [1, 6],
            [2, 1], [2, 3], [2, 5], [2, 7]
        ];

        var blackPositions = [
            [5, 0], [5, 2], [5, 4], [5, 6],
            [6, 1], [6, 3], [6, 5], [6, 7],
            [7, 0], [7, 2], [7, 4], [7, 6],
        ];

        // iterate over the positions
        for (var i = 0; i < 12; i++) {
            // create a white checker, and push it in this.checkers
            this.checkers.push( new CheckerClass('white', whitePositions[i]) );

            // create a black checker, and push it in this.checkers
            this.checkers.push( new CheckerClass('black', blackPositions[i]) );
        }
    }
}
```

And now we can build a function that will place our checkers on the grid
```javascript
function Board() {
    //...

    this.placeCheckersOnGrid = function() {
        // reset the grid to make sure it's clear
        this.resetGrid();

        // iterate through this.checkers
        for (var i = 0; i < this.checkers.length; i++) {
            // grab a checker
            var checker = this.checkers[i];

            // get that checker's position
            var checkerPos = checker.position;

            // place that checker where it's supposed to go
            this.grid[checkerPos[0]][checkerPos[1]] = checker;
        }
    }
}
```

## Step 4 - Test out our board
We'll start by creating a `new` `Board` instance.
```javascript
// Instantiate a board
var board = new Board();
```
Let's build our grid
```javascript
console.log(board.grid);
//=> [];
// :( it's empty

// let's fill in the grid
board.createGrid();

// and now we can view the grid
board.viewGrid();
//=>   0 1 2 3 4 5 6 7
//=> 0
//=> 1
//=> 2
//=> 3
//=> 4
//=> 5
//=> 6
//=> 7
```

Now let's create the checkers, putting them in `board.checkers`
```javascript
// let's see that our board.checkers is empty
console.log(board.checkers);
//=> []

// create some checkers
board.createCheckers();

// let's see em
console.log(board.checkers.length);
//=> 24

// and now let's place them on the board!
board.placeCheckersOnGrid();

baord.viewGrid();
//=>   0 1 2 3 4 5 6 7
//=> 0   ○   ○   ○   ○
//=> 1 ○   ○   ○   ○
//=> 2   ○   ○   ○   ○
//=> 3
//=> 4
//=> 5 ●   ●   ●   ●
//=> 6   ●   ●   ●   ●
//=> 7 ●   ●   ●   ●
```
