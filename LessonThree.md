# Lesson Three
## Javascript

### Scope
An item's scope refers to where exactly it is accessible from. The rule of thumb is if it is defined immediately inside or outside of the current function, it is accessible.
```javascript
var outsideVar = 'Hello';

function helloWorld() {
  var insideVar = 'World';
  return outsideVar + insideVar;
}

console.log(helloWorld());

//=> 'HelloWorld'
```
This works fine, becuase the variable `outsidevar` has been declared outside of our `helloWorld()` function, and `insideVar` was immediately available inside the function. So when I called `helloWorld()`, we dived into the function and returned what was available.

In this example:
```javascript
var outsideVar = 'Hello';

function helloWorld() {
  var insideVar = 'World';
  return outsideVar + insideVar;
}

console.log(insideVar);

//=> ReferenceError: insideVar is not defined
```
we get a `ReferenceError` conplaining that it cannot find where we assigned `insideVar`.

If you find this difficult to follow, refer to this example
```javascript
var a = "a";
// a is available

function one() {
  var b = 'b';
  // a is available
  // b is available
  
  function two() {
    var c = 'c';
    // a is available
    // b is available
    // c is available
    
    function three() {
      var d = 'd';
      // a is available
      // b is available
      // c is available
      // d is available
      // one() is available
      // two() is available
      // three() is available
    }
    // one() is available
    // two() is available
    // three() is available
  }
  // one() is available
  // two() is available
}
// one() is available
```
note: You can see a function is allowed to refer to itself from within!

### Ternary Operator
Conditional statements are great, but sometimes are more "syntax-y" that we would like for simple statements.
For instance, if I want to toggle a value (meaning switch back and forth, like a light switch), a conditional statment may look like this:
```javascript
var light = 'on';

function toggleLight() {
  if (light === 'on') {
    light === 'off';
  } else {
    light === 'on';
  }
}

toggleLight();
```

Ternary operators can help shrink this code. The pattern is `condition ? expr1 : expr2 `. Since this operator returns the correct expression, we are allowed to that return to assign to a variable:
```javascript
var light = 'on';

function toggleLight() {
  light = (light === 'on') ? 'off' : 'on';
}

toggleLight();
```
This ternary expression is equivalent in functionality to the conditional statement above.

### Arrays
The array is one of the most popular data structures in most programming languages. In the most simplest case, they are simply a list of items.
```javascript
var arr = [ 1, 2, 3, 4, 5, 6 ];
var arr2 = [ 'a', 'b', 'c' ];

// you can also have a mixed-type array
var mixArr = [ 1, 'a', null, NaN ];
// though this is considered bad practice, so try to stay away from that

// you can even have an array of arrays!
var nestedArray = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
// whoa
```

#### Accessing/Setting items in an array
The positions in an array probably the most important attribute of the array. The "index" starts at 0, so
```javascript
var indicesArr = [ "I'm at index 0!", "I'm at index 1!", "I'm at index 2!", "I'm at index 3!" ];
```
The way to access an item in an array is to ask for the item at that index
```javascript
console.log(indicesArr[1]);
//=> "I'm at index 1!"
```
And that is also how you set the item
```javascript
indicesArr[2] = "I've been reset!";

console.log(indicesArr);
//=> [ "I'm at index 0!", "I'm at index 1!", "I've been reset!", "I'm at index 3!" ]
```

But how do you access arrays within an array??? Exactly how you would think. With a second index.
```javascript
var nestedArray = [ [ 'who', 'what'], [ 'when', 'where' ] ];

console.log(nestedArray[0][1]);
//=> 'what'

nestedArray[1][0] = "I've been reset!";

console.log(nestedArray);
//=> [ [ 'who', 'what'], [ 'I've been reset!', 'where' ] ]
```

## Tools
### Prompting more than once
```javascript
'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['input'], function (error, result) {
  console.log(result['input']);
});
```
This will ask for input only once, but how do you ask for input multiple times? You can put the `prompt.get()` into it's own function, and have it call itself.

```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

// Here's our custom named function
function getPrompt() {
  // Here's where we grab our input  
  prompt.get(['input'], function (error, result) {
    console.log(result['input']);
    getPrompt(); // then we call ourself again! and again! and again!
  });
}

// Don't forget to get the ball running by calling our custom function once!
getPrompt();
```
But this loop will continue forever! We can put in a "break condition", maybe by checking the input for a keyword like `exit`, to stop asking for input.

```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

function getPrompt() {
  // Here's where we grab our input  
  prompt.get(['input'], function (error, result) {
    // if our input is 'exit'
    if (result['input'] === 'exit') {
      // since we are returning, we will break out of the function here
      return false;
    } // no need for an else statement, since the return above will break us out of the function if we hit it
    console.log(result['input']);
    getPrompt();
  });
}

getPrompt();
```
## Assessments
### Tic Tac Toe
#### Step 1 - Start the script
```bash
subl TicTacToe.js
```
Since this is a game, we'll want to use our method of asking for multiple inputs
```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

function getPrompt() {
  prompt.get(['input'], function (error, result) {
    if (result['input'] === 'exit') {
      return false;
    }
    console.log(result['input']);
    getPrompt();
  });
}

getPrompt();
```

#### Step 2 - Build and print the game board
The game of Tic Tac Toe is simply just a 3 x 3 board of blank spots. We are going to build it using an array of arrays.
```javacript
var board = [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ];
```
Doesn't look like the board, you say? What if we format it a little different?
```javacript
var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];
```
That's a little better visually. But when we `console.log()` it, we get the flat formatting again.
```javascript
console.log(board);
//=> [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ]
```
We are need going to need to print out each "row" of the game board consecutively, in order to visually stack them. Remember how we target specific items in an array? By identifying the "index".
```javascript
console.log(board[0]); //=> [ ' ', ' ', ' ' ]
console.log(board[1]); //=> [ ' ', ' ', ' ' ]
console.log(board[2]); //=> [ ' ', ' ', ' ' ]
```
Now let's throw that into a function so we can call it whenever we feel like it.
```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

function showBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function getPrompt() {
  prompt.get(['input'], function (error, result) {
    if (result['input'] === 'exit') {
      return false;
    }
    console.log(result['input']);
    showBoard(); //we want to see the board before every prompt
    getPrompt();
  });
}

showBoard(); //make sure to show the prompt at the beginning of the game
getPrompt();
```

#### Step 3 - Marking the board
Let's figure out how we want to mark the board. Our board is made up of **columns** and **rows**
```javacript
var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];
```

To access one of the spots, we'll need to access our overall array with a row index `board[row_index]` and then with a column index `board[row_index][col_index]`

```javascript
var board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];

board[1][2] = 'X';

console.log(board[0]); //=> [ ' ', ' ', ' ' ]
console.log(board[1]); //=> [ ' ', ' ', 'X' ]
console.log(board[2]); //=> [ ' ', ' ', ' ' ]
```

So let's collect that input from our prompt.
```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

function showBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function getPrompt() {
  prompt.get(['row', 'column], function (error, result) {
    if (result['input'] === 'exit') {
      return false;
    }
    row_idx = parseInt(result['row'], 10); // the input comes in a string, so we
    col_idx = parseInt(result['col'], 10); // must parse it to a base-10 integer
    board[row_idx][col_idx] == 'X';
    showBoard();
    getPrompt();
  });
}

showBoard();
getPrompt();
```

That's kind of clogging up our `getPrompt()` function, let's separete that logic out into it's own function `placeMark()`

```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

function showBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function placeMark(result) {
  row_idx = parseInt(result['row'], 10);
  col_idx = parseInt(result['col'], 10);
  board[row_idx][col_idx] == 'X';
}

function getPrompt() {
  prompt.get(['row', 'column], function (error, result) {
    if (result['input'] === 'exit') {
      return false;
    }
    placeMark(result); // we'll pass in our result (contains our captured input) as an argument
    showBoard();
    getPrompt();
  });
}

showBoard();
getPrompt();
```

#### Step 4 - Who's Turn?
We want be able to keep track of who's turn it is. So let's set that as a variable.
```javascript
'use strict';

var prompt = require('prompt');
prompt.start()

var playerTurn = 'X'; // We'll let Player X go first

function showBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function placeMark(result) {
  row_idx = parseInt(result['row'], 10);
  col_idx = parseInt(result['col'], 10);
  board[row_idx][col_idx] == playerTurn; // and we'll use it here
}

function getPrompt() {
  prompt.get(['row', 'column], function (error, result) {
    if (result['input'] === 'exit') {
      return false;
    }
    placeMark(result);
    playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // we'll use the ternary operator here to toggle between players
    showBoard();
    getPrompt();
  });
}

showBoard();
getPrompt();
```

####(Optional) Step 5 - Check for a win
Think about playing a game of tic tac toe, how do you check for a win? You most likely can tell ahead of time if a win is coming up, but the computer can't. It must scan the board after every mark to check for a win. So let's tell the computer what a win looks like.
* Three of the same marks in a row wins
* Can be horizontal, vertical, or diagonal
 Now let's describe to the computer what a win **could** be
```
* horizontally
  * board[0][0] === board[0][1] === board[0][2] (top row)
  * board[1][0] === board[1][1] === board[1][2] (middle row)
  * board[2][0] === board[2][1] === board[2][2] (bottom row)
* vertically
  * board[0][0] === board[1][0] === board[2][0] (left column)
  * board[0][1] === board[1][1] === board[2][1] (middle column)
  * board[0][2] === board[1][2] === board[2][2] (right column)
* diagonally
  * board[0][0] === board[1][1] === board[2][2] (top-left, center, bottom-right)
  * board[2][0] === board[1][1] === board[0][2] (top-right, center, bottom-left)
```

Write this into a function `checkForWin()` and run it after a mark is place.
```javascript
function checkForWin() {
  if ( board[0][0] === board[0][1] === board[0][2] ||
    board[1][0] === board[1][1] === board[1][2] ||
    board[2][0] === board[2][1] === board[2][2] ||
    .... ) {
    return true;
  }
  return false;
}

.
.
.

function getPrompt() {
  prompt.get(['row', 'column], function (error, result) {
    if (result['input'] === 'exit') {
      return false;
    }
    placeMark(result);
    if (checkForWin()) { // if checkForWin() returns truthy
      console.log('Player ' +  playerTurn + ' Won!'); // announce to the world
      showBoard(); // show the board for bragging rights
      return false; // exit out of the prompt loop
    }
    playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // we'll use the ternary operator here to toggle between players
    showBoard();
    getPrompt();
  });
}

showBoard();
getPrompt();
```


