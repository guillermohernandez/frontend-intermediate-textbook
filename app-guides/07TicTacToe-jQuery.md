# Tic Tac Toe - jQuery

## Spec 1
Using jQuery, set a 'click' listener on all of the `[data-cell]`s that adds an `'X'` as `.text()` on `$(this)`.

## Spec 2
Set a `var`iable `playerTurn` equal to `'X'`. Then in your `click` event, put `playerTurn` as your `.text()`. After that, toggle `playerTurn` between `'O'` and `'X'` using a ternary operator. You should now be able to change turns as you click around on your board.

## Spec 3
Write a function `checkForWin()` that checks each combination of winning `data-cells` and see if they all contain the current `playerTurn`. If so, select `'#announce-winner'` and set its `.text()` to say `'Player ' + playerTurn + 'Wins!'`. Run this function every time a player make a mark, but before the the `playerTurn` switches.

## Bonus Spec 4
Protect against changing a previously marked cell.
