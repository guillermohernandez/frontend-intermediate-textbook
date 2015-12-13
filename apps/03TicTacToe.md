# Tic Tac Toe
## Spec 1 - Place a mark
We are collecting a `row` and a `column` from the prompt, and then passing those values to `ticTacToe()`.
```javascript
function ticTacToe(row, column) {
    // Your code here
}
```
We can now use those values to place a mark on the board. To locate the space, we can first define the `row` we want
```javascript
board[row]
```
then dig in deep for the column within the row
```javascript
board[row][column]
```
After we have located the spot, we can assign it whatever we want. For now, assign it to `'X'`.

## Spec 2 - Alternate between player `X` and player `O`
### Spec 2.1
We have access to the global `playerTurn` variable, which is set to `X` by default. Set the place on the board to `playerTurn` instead of `'X'`.
### Spec 2.2
Now we need to alternate between the players. Write a ternary operator that toggles `playerTurn` between `'X'` and `'O'` and place it after we place the mark.

## Spec 3 - Detect a win
### Spec 3.1 - Check for horizontal win
In `horizontalWin()`, check all three spots in each horizontal row to see if they all match the current player turn. 
```javascript
// Top horizontal row
(board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn)
```
Using an "or" `||` statement, check all three rows and `return` the outcome.

### Spec 3.2 - Check for vertical win
In `verticalWin()`, do the same, but for vertical columns

### Spec 3.3 - Check for diagonal win
In `diagonalWin()`, do the same, but for both diagonal stretches

### Spec 3.4 - Check for all three
in `checkForWin()`, write a conditional statment that checks all three win patterns: `horizontalWin()`, `verticalWin()`, and  `diagonalWin()`, and that, if any return as `true`, `console.log()`s `'Player ' +  playerTurn + ' Won!'`. Run `checkForWin()` after every time you place the mark, but before you switch players.
