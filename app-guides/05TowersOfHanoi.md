# Towers of Hanoi
[Towers of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a simple logic game involving three stacks. The first stack has four (or more) blocks, each one bigger than the next, stacked like a pyramid. The point of the game is to move the blocks from one stack and arrange them in the same order into another stack, but never placing a larger block onto a smaller block. You can play the game [here](https://developer.mozilla.org/en-US/demos/detail/towers-of-hanoi/launch) to get an idea.

##Step 1 - Create the script / Prompt for Input
Create the file
`subl TowersOfHanoi.js`

Install the user prompt
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
Save the file. Commit often.
```bash
git status
git add TowersOfHanoi.js
git commit -m 'Installed User Prompt'
git push origin master
```

## Step 2 - Build the stacks
Build an associative array called `stacks` that has three key/value pairs. The first key `a` will have a value of `[4, 3, 2, 1]`, and the other keys `b` and `c`, will both have empty arrays.

## Step 3 - Print the stacks
Create a function `printStacks()` that prints each stack in succession. (ex. `console.log('a: ' + stacks.a);`)

## Step 4 - Move a block
Create a function `moveBlock(start, finish)` that takes a `start`ing stack (ex. `a`) and a `finish`ing stack (ex. `b`). The function should `pop` off the block from the `start`ing stack, and `push` the block onto the `finish`ing stack.

## Step 5 - Prompt the user
Prompt the user for a `start` stack and a `finish` stack, meaning where you want to move the top block from and to. pass these stacks into your `moveBlock(start, finish)` function and then print the stacks. Continue to prompt the user for input.

## Step 6 - Check if move is legal
Write a function `isLegal(start, finish)` that will check to see it the block being moved is not larger the the block it is going to be stacked upon. `return true` if it is allowed, otherwise, `return false`. Put this check before your `moveBlock(start, finish)`.

## Step 7 - Win the game
Write a function `gameOver()` that checks if either stack `b` or stack `c` is completely stacked correctly. Run this after every `moveBlock(start, finish)`. Log `Congrats! Game Won!` and `return` out of the prompt loop.

