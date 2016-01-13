# Checkers
## Spec 0 - Building our classes
### Spec 0.1 - Our classes will consist of a `Checker`, `Board`, and a `Game` class.
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

### Spec 0.2 - Separating our concerns
The [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) refers to deciding what each class will be responsible for.

* The `Checker` class will be concerned about
  * *attributes*
    * a symbol `this.symbol = ...`
* The `Board` class will be concerned about
  * *attributes*
    * A grid layout `this.grid = ...`. See it [here](https://github.com/AustinCodingAcademy/frontend-intermediate-workbook/blob/master/apps/06Checkers.js#L13)
    * "In play" checkers `this.checkers = ...`.
    
  * *methods*
    * Creating the grid `this.createGrid = function() { ...`. View it [here](https://github.com/AustinCodingAcademy/frontend-intermediate-workbook/blob/master/apps/06Checkers.js#L15)
    * Viewing the grid `this.viewGrid = function() { ...`. View it [here](https://github.com/AustinCodingAcademy/frontend-intermediate-workbook/blob/master/apps/06Checkers.js#L27)
    * Creating the checker instances `this.createCheckers = function() { ...`
    * Selecting a particular checker `this.selectChecker (position) { ...`
    * Killing a checker `this.killChecker = function(position) {...`
* `Game` class will be concerned about
  * *attributes*
    * A game board `this.board = new Board();` See it [here](https://github.com/AustinCodingAcademy/frontend-intermediate-workbook/blob/master/apps/06Checkers.js#L56)
  * *methods*
    * Starting a game `this.start = function() { ...`. See it [here](https://github.com/AustinCodingAcademy/frontend-intermediate-workbook/blob/master/apps/06Checkers.js#L58)

## Spec 1 - Build the `Checker` class
A `Checker` piece has one concern, its symbol. We can use [unicode characters](http://jrgraphix.net/r/Unicode/25A0-25FF) with the JavaScript `String.fromCharCode(0x1<unicode>)` method. The symbol that is assigned is based on what color (`'white'` or `'black'`) the checker will be. Let's pass in the `color` as an argument, `function Checker(color) { ... ` and set the `Checker` instance's `this.symbol`. `if` the `color` is `'white`, set `this.symbol` equal to `String.fromCharCode(0x125CB)`, otherwise set it equal to `String.fromCharCode(0x125CF)`.

## Spec 2 - Build the `Board` class
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
