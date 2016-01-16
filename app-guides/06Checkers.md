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
Your `Board` class should already have a few methods and an attribute. The attribute `this.grid` will hold our `Checker` instances (pieces) in a two dimensional array making up rows and columns. We could manually build the array which would look something like this:
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
but we would rather programmatically build it, as you can see in `this.createGrid()`. `this.viewGrid()` will print out a graphical representation of the board with or without checkers on it.

Our board so far:
```
  0 1 2 3 4 5 6 7
0
1
2
3
4
5
6
7
```

### Spec 2.1 - Let's create some checkers put them on the board
In your `Checker` class, create an attribute called `this.checkers` and assign it to an empty array. This will be your repository of checker pieces. Now create a method called `this.createCheckers`. In it, let's define our starting positions of the checkers on the grid. In local `var`iables, define `whitePositions` and `blackPositions` as array of `[row, column]` coordinates:
```
White positions:
[0, 1], [0, 3], [0, 5], [0, 7],
[1, 0], [1, 2], [1, 4], [1, 6],
[2, 1], [2, 3], [2, 5], [2, 7]

Black Positions:
[5, 0], [5, 2], [5, 4], [5, 6],
[6, 1], [6, 3], [6, 5], [6, 7],
[7, 0], [7, 2], [7, 4], [7, 6]
```
In a `for` loop, iterate over the range from 0 - 11, with each index you want to:
1. Instantiate a `'white'` `Checker`
1. Place that checker on the grid at the position corresponding with the index in the positions array
1. Push the checker into your `this.checkers` array
1. Do all three steps above for a `'black'` checker

In your `Game` class, in the `start()` method, add `this.board.createCheckers()`.

If done correctly, you should see your board populated with checkers!
```
  0 1 2 3 4 5 6 7
0   ○   ○   ○   ○
1 ○   ○   ○   ○
2   ○   ○   ○   ○
3
4
5 ●   ●   ●   ●
6   ●   ●   ●   ●
7 ●   ●   ●   ●
```
