# Lesson Five
## Javacript
### More Operators
#### Increment (`++`) and Decrement (`--`)
In JavaScript, you can attach a `++` to the end of any variable assigned to a number to increment that variable by one.
```javascript
var num = 55;

// essentially equivalent to num = num + 1
num++

console.log(num);
//=> 56
```
`--` works as a decrementer
```javascript
var num = 56;

// essentially equivalent to num = num - 1
num--

console.log(num);
//=> 55
```

#### Assignment Operators (`+=`, `-=`, `*=`, `/=`)
[Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) are also pretty handy. While the `++` and `--` let you increase and decrease by one, these can let you increase/decrease by anything.
```javascript
var num = 3;

// essentially equivalent to num = num + 4;
num += 4;

console.log(num);
//=> 7
```

### Loops
#### `for` Loop
Loops are how you work things done. If I wanted to cycle through this array
`var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];`
and return an array with all the items doubled without using a loop, it would end up looking like this
```javascript
var arr2 = [];
arr2.push(arr1[0] * 2);
arr2.push(arr1[1] * 2);
arr2.push(arr1[2] * 2);
arr2.push(arr1[3] * 2);
arr2.push(arr1[4] * 2);
arr2.push(arr1[5] * 2);
arr2.push(arr1[6] * 2);
arr2.push(arr1[7] * 2);
arr2.push(arr1[8] * 2);
arr2.push(arr1[9] * 2);
arr2.push(arr1[10] * 2);
arr2.push(arr1[11] * 2);
arr2.push(arr1[12] * 2);
arr2.push(arr1[13] * 2);
arr2.push(arr1[14] * 2);
arr2.push(arr1[15] * 2);
arr2.push(arr1[16] * 2);
```
What if we had a 1000 item array? Loops could help us solve this in just a few lines of code.
```javascript
var arr2 = [];
for (var i = 0; i <= 16; i++) {
  arr2.push(arr[i] * 2);
}
```
Let's break this down. We start with the word `for` and then enter **three conditions** between the `()`. 
* The first statement will set our **iterator** `i`.
* The second statement is a conditional. It is say "while `i` is less than or equal to 16 is true, run this loop."
* The third statement is our incrementer/decrementer. We can place an incrementor/decrementor (`++`/`--`) or one of our assignment operators (`i += 2`). This will run each time our code block does until the second statement is no longer true.

Then in between the mustaches `{}`, we have the code that is to be ran each loop. Our iterator is passed into the loop, so that we may use it.

Let' take a look at this example
```javascript
var arr1 = [1, 2, 3, 4]
var arr2 = [];
for (var i = 0; i > arr1.length; i++) {
  arr2.push(arr[i] * 2);
}

console.log(arr2);
//=> [2, 4, 6, 8]
```
This is a **very common** pattern. First we assign `var i` as our iterator starting at 0, then our condition will limit use from going over the highest index in our array. This is an important concept. In `['a', 'b', 'c', 'd']`, we have an item at index 0, 1, 2, and 3, but we have a *length* of 4. So we use our `.length` propertie of an array to automatically determine the stopping place of our loop. If our array get's bigger or smaller, so will our condition. Then we finish with an iterator, which increases the value of `i` by 1 each time. The code inside pushes the item from `arra` at index `i` , multiplied by 2, into `arr2`.

#### `while` Loop
What if we want something to loop, but have a condition that isn't number based? We can use a while loop, but with more freedom comes more responsibility.
```javascript
var colors = ['red', 'blue', 'green' 'yellow']

var certainColor = 'green'

var currentColor = colors[0];
var i = 0;

while (certainColor !== currentColor) {
  console.log(currentColor);
  i++; // absolutely the most important part
  currentColor = colors[i];
}

//=> 'red'
//=> 'blue'
```

If we had not remembered to increment the iterator `i`, we would have hit an infinite loop.

## Apps
### Mastermind
[Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) is a codebreaking game, where a player tries to guess the code based on a limited amount of information given from an incorrect guess. You can play the game [here](http://www.web-games-online.com/mastermind/).

#### Step 0 - Create a Script
Create a file `Mastermind.js`. Use strict mode. Add to git. Commit often.

#### Step 1 - Build the board and pretty print it.
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

#### Step 2 - Prompt the user.
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

#### Step 3 - Insert the guesses
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

#### Step 4 - Test the guess against a solution
Let's 'hardcode' a solution in for now `var solution = 'abcd'`. Now write a function `checkSolution(pattern)` that simply tests if your guess is equal to the solution. `return false;` if it isn't. If it is, `console.log(console.log(pattern + ' is the solution!')` and `return true;`. Call the function after every guess, but before you enter the guess into the game board. If it return `true`, `if (checkSolution(result.pattern)) {` `return;` out of the prompt loop.

#### Step 5 - What if the guess is incorrect?
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

#### Step 6 - Generate a random code
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
