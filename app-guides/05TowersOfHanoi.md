# Towers of Hanoi
[Towers of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a simple logic game involving three stacks. The first stack has four (or more) blocks, each one bigger than the next, stacked like a pyramid. The point of the game is to move the blocks from one stack and arrange them in the same order into another stack, but never placing a larger block onto a smaller block. You can play the game [here](https://developer.mozilla.org/en-US/demos/detail/towers-of-hanoi/launch) to get an idea.

## Spec 1 - Move a piece
In `movePiece()`, pass in two arguments, `startStack` and `endStack`. Visualizing playing n physical game, you `.pop()` off a block from the the `startStack` and `.push()` it on the `endStack`. Call this function from `towersOfHanoi()`, passing in your arguments.

## Spec 2 - Is it a legal move?
`isLegal()` takes two arguments, `startStack` and `endStack`, and will check to see if the block being moved, from `startStack` is smaller than last block in `endStack`. `return true` if it is allowed, otherwise, `return false`. Also, don't forget to think about if the `endStack` is empty, you may out any block there. Put this check before your `moveBlock()` function.

## Spec 3 - Check for a win
In `checkForWin()`, you can simply check if the `b` stack or `c` stack has a `.length` of `4`, then `console`ing out a message like `"You Won!!!"` and `return`ing `true` if a win is detected, or a `false` if not.
