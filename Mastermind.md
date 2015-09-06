# Mastermind
[Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) is a codebreaking game, where a player tries to guess the code based on a limited amount of information given from an incorrect guess. You can play the game [here](http://www.web-games-online.com/mastermind/).

## Step 0 - Create a Script
Create a file `Mastermind.js`. Use strict mode. Add to git. Commit often.

## Step 1 - Build the board and pretty print it.
Create a variable `var board` and layout our gameboard in arrays.
```javascript
var board = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ']
];

// Hey JavaScript ninja, try to build this using a loop
```
Now create a function `printBoard()` that pretty prints our board.
```javascript
function printBoard() {
    console.log(board[0].join(' '));
    console.log(board[1].join(' '));
    console.log(board[2].join(' '));
    console.log(board[3].join(' '));
    console.log(board[4].join(' '));
    console.log(board[5].join(' '));
    console.log(board[6].join(' '));
    console.log(board[7].join(' '));
    console.log(board[8].join(' '));
    console.log(board[9].join(' '));
}

// Looks a little repetitive to me (hint hint)

printBoard(); //let's run it
```
Now try running the script!
```javascript
//=>
//=>
//=>
//=>
//=>
//=>
//=>
//=>
//=>
//=>
```
Groovy.

## Step 2 - Prompt the user.
Now let's start prompting the user for some input. We need to require our `prompt` library with `npm`if you haven't already.
```shell
npm install prompt
```
and include/start it at the top of the script
```javascript
var prompt = require('prompt');
prompt.start();
```
Now write a function `getPrompt()` that asks for a pattern
```javascript
function getPrompt() {
    prompt.get(['pattern'], function (error, result) {
        console.log('input recieved: ' + result.pattern);
        getPrompt();
    });
}
```

move the `printBoard()` call to before your `prompt.get()`, and now call `getPrompt()`

Run the app `node Mastermind.js` and make sure that it's printing the empty board every time and accepting your input.

## Step 3 - Insert the guesses
Let's keep a check of the number of guesses with a `var numTry = 0`. Now write a function `insertCode(pattern)` that `splits('')` up a four letter pattern string, turning it into an array
```javascript
console.log('abcd'.split('');
//=> ['a', 'b', 'c', 'd']
```
and inserts each letter into the appropriate `board[row][column]`. Hint: the `row` should be the current `numTry` count.
```javascript
var splitPattern = pattern.split('');
board[numTry][0] = splitPattern[0];
board[numTry][1] = splitPattern[1];
//...
// after this is written out, it looks little repetitive...
```
At the end of the function, don't forget to increment your `numTry`.

After every guess from the prompt, call `insertCode(result.pattern)`

## Step 4 - Test the guess against a solution
Let's 'hardcode' a solution in for now `var solution = 'abcd'`. Now write a function `checkSolution(pattern)` that simply tests if your guess is equal to the solution. `return false;` if it isn't. If it is, `console.log(console.log(pattern + ' is the solution!')` and `return true;`. Call the function after every guess, but before you enter the guess into the game board. If it return `true`, `if (checkSolution(result.pattern)) {` `return;` out of the prompt loop.

## Step 5 - What if the guess is incorrect?
We need to compute a message for the player if their guess is incorrect. A red number gives the number of `var letterSpacesCorrect` and a white number will give the number of `var lettersCorrect` that **aren't** included in the first number. Write a function `computeMessage(splitPattern)` that takes a split code, from our `insertCode(pattern)` function. In it, we need to split the solution and set our counters to 0
```javascript
var splitSolution = solution.split('');

var lettersSpacesCorrect = 0;
var lettersCorrect = 0;
```

and compare each letter to each other in it's space. Then compare again to see how many total letters match.

```javascript
if (splitPattern[0] === splitSolution[0]) {
    letterSpacesCorrect += 1;
}

if (splitPattern[1] === splitSolution[1]) {
    letterSpacesCorrect += 1;
}

//...

if (splitSolution.indexOf(splitPattern[0]) > -1) {
    lettersCorrect += 1;
}

if (splitSolution.indexOf(splitPattern[1]) > -1) {
    lettersCorrect += 1;
}

//...
```

Then we need to update the number of `lettersCorrect` with the difference of `lettersCorrect` and `letterSpacesCorrect` which will give us the number of correct letters that *aren't* included in the correct "letter-spaces".

return a string that prints the number of `letterSpaceCorrect + ' - ' + letterCorrect`
*But how do we make it RED??!!*
By including another fun `npm` package [`colors`](https://www.npmjs.com/package/colors)!
```bash
npm install colors
```
At the top of your script, be sure to `require()` the package
```javascript
var colors = require('colors/safe');
```

Now you can wrap your with some color commands.
```javascript
return colors.red(letterSpaceCorrect) + ' - ' + letterCorrect;
```

Back inside our `insertCode(pattern)` function, let's `push` this message into the individual code array.
```javascript
var message = computeMessage(splitPattern);
//...
board[numTry].push(message);
```

## Step 6 - Generate a random code
Let's borrow a function from [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) that gives us a random number between two numbers.
```javascript
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

After clearing our 'hardcoded' solution `var solution = null;` write a function `generateRandomCode()`. In it, declare an array `var letters = ['a', 'b', ... , 'g', 'h'];` and generate a solution by choosing the values at random indicies from `letters`, then `join`ing them to assign our solution.

```javascript
solution = [
    letters[getRandomInt(0, letters.length)],
    letters[getRandomInt(0, letters.length)],
    letters[getRandomInt(0, letters.length)],
    letters[getRandomInt(0, letters.length)]
].join('');
```

be sure to `generateRandomCode()` before you first call `getPrompt()`!
