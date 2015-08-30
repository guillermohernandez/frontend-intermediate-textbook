# Lesson Two

Let's be sure to add this to our notes repository. Navigate into your repository using `cd`, and create a new file titled something like _LessonTwoNotes.js_ by typing `subl LessonTwoNotes.js`. Type examples (and make comments) in here.

## JavaScript

### Conditionals
Conditionals are a cornerstone in the logic of programming. `if` something then, do this, `else` do something else, unless `if` something `else` is true. A conditional statement in JavaScript can read like this:
```javascript
var year = 1975;
var fashion;

if (year >= 1960 && year <= 1969) {
  fashion = 'Bell Bottom';
} else if (year >= 1970 && year <= 1979) {
  fashion = 'Afros and Lip Gloss';
} else if (year >= 1980 && year <= 1989) {
  fashion = 'Shoulder Pads and Bangle Bracelets';
} else if (year >= 1990 && year <= 1999) {
  fashion = 'Wallet Chains';
} else {
  fashion = 'T-shirts and skinny jeans';
}

console.log(fashion);
```

In this example, `fashion` would ultimately be assigned `'Afros and Lip Gloss'`. Here we can see the `if` / `else if`/ `else` pattern:

```javascript
if (something truthy) {
  // do something
} else if (something else truthy) {
  // do this instead
  // you can even nest conditionals inside each other!
  if (something truthy) {
    //do something here
  }
else {
  // if neither above are truthy, do what's in here
}

// do what's out here after the conditionals
```

### Modulo (`%`) Operator
We've seen before that Javascript does the basic mathmatical operators: `+`, `-`, `*`, `/`. But in most programming language, JavaScript included, you have a fifth operator, the modulo ('%'). The modulo will return the remainder of a division problem. For instance, 10 / 3 = 3 r 1, so using a modulo:
```javascript
10 % 3;
//=> 1
```

This operator is suprisingly useful. So for instance, you wanted to check is a number was even or odd. If an integer is even divisible by 2 (aka. has a remainder of 0), you can verify that it is even:
```javascript
var num = 6473628;
if (num % 2 === 0) {
  console.log("I'm Even!");
} else {
  console.log("I'm Not Even!");
}

//=> "I'm Even!"
```
In this example, it would not have been correct for us to log `"I'm Odd!"` if the first conditional was not true. That is becuase if `num` would have been `0` or a negative integer, `num % 2` would have returned `NaN` (not-a-number).

### Named Functions
Programming, coding, and hacking, at their roots, are really just a bunch of problems waiting to be solved. Functions help us to break up our large problems into smaller, solveable problems. This is called the "Decomposition Method", and the better you are at this, the better programmer you'll be. In JavaScript, defining a function is as easy as:
```javascript
function myCustomName(parameter1, parameter2) {
  //=> Do something with the parameters in here
  return false;
}

// You can also declare a function like this
var anotherFunction = function (parameter3, parameter4) {
  //=> Do something with the parameters in here
  return false;
}
```
You use the return statment to declare what you want to return.

```javascript
function sumTheNums(num1, num2) {
  return num1 + num2;
}

var x = sumTheNums(3, 5);

x;

//=> 8
```
If you don't want to return anything, you can simply say `return false;`, `return;`, or leave it out. `return` will break out of the function, so it's important to take careful consideration where to place them.

```javascript
function helloWorld() {
  return "Hello";
  return "World";
}

helloWorld();

//=> "Hello"

function conditionalReturn() {
  var num = 3;
  if (num < 5) {
    return num * 5;
  }
  
  return num;
}

conditionalReturn();

//=> 15
```

### Prompting for user input in the terminal
We will be using an [npm](https://www.npmjs.com/) package called [prompt](https://www.npmjs.com/package/prompt) to record user input for some of our exercises. We install npm pacakges by navigating into the folder we want to create 
our script in and simply run `npm install <package>` in the terminal.

`npm install prompt`

Then to use `prompt` in a script, we use the function `require()`

```javascript
// SomeFile.js
'use strict';

var prompt = require('prompt');

// For this particular package, we need to "start" it
prompt.start()

// To prompt the user, you need to start the prompt like so
prompt.get(['first', 'second'], function (error, result) {
  console.log('First Input: ' + result['first']);
  console.log('Second Input: ' + result['second']);
});
```

## Assessment

### Three or Five?
Build a simple command line tool that takes a number as an input, and tells whether it is divisible by three or five. 

Create a file `subl ThreeOrFive.js`
Save the file.

Try to commit in between steps. 
```bash
git status
git add ThreeOrFive.js
git commit -m "First Commit!"
```

#### Step 1 - `require` your dependencies
```javascript
'use strict';

var prompt = require('prompt');
// For this particular package, we need to "start" it
prompt.start()
```

#### Step 2 - Test that the script works
Let's try to `console.log()` something out.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

console.log("Let's get started!");
```
Now in your terminal, run `node ThreeOrFive.js`. You should see your output.

#### Step 3 - Let's attempt a prompt
Let's start interfacing with the user.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  console.log('Collected Input: ' + result['number']);
});
```
Test it out `node ThreeOrFive.js`.

#### Step 4 - Parse the input
The issue we will run into is the input colelcted will always be a string. For instance, if the user enters `42` into the prompt, it will be collected as `'42'`. One way we can parse this is by using JavaScript's [parseInt(string, radix)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) method. It takes two arguments: a string, and a radix (a counting base, such as 10).
```javascript
console.log(parseInt('42', 10));
//=> 42
```
So in our script, we can write:
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  var num = parseInt(result['number']);
});
```

#### Step 5 - Test for 3 and 5 divisibility
The logic necessary is as follows:
1. If it is divisible by 3, log '<num> is divisible by 3!'
2. If it is divisible by 5, log '<num> is divisible by 5!'
3. If it is divisible by 3 and 5, log '<num> is divisible by 3 and 5!'

How do we check for divibility? Hint: `12 % 4 = 0`

Now write these conditionals in JavaScript
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  var num = parseInt(result['number']);
  if (num % 3 === 0) {
    console.log(num + ' is divisible by 3!'
  }
  ...
  
});
```

Run your script and see if it works!

#### (optional) Step 6 - Only return one log if divisible by 3 and 5
Write your conditionals so that it only returns `'<num> is divisible by 3 and 5'` if the number is divisible by both. 
Hint: try nested conditionals

### Rock, Paper, Scissors
Build a command line game that takes two (`hand1`, `hand2`) inputs (hands: `rock`, `paper`, or `scissors`) and outputs who the winner is, or if it's a tie.

Create a file `subl RockPaperScissors.js`
Save the file.

Try to commit in between steps. 
```bash
git status
git add RockPaperScissors.js
git commit -m "Building Rock Paper Scissors in Javascript!"
```

#### Steps 1 & 2 - Repeat from above
Now in your terminal, run `node RockPaperScissors.js`. You should see your output.

#### Step 3 - Let's attempt a prompt
Let's start interfacing with the user.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['hand1', 'hand2'], function (error, result) {
  console.log('First Hand: ' + result['hand1']);
  console.log('Second Hand: ' + result['hand2']);
});
```
Test it out `node RockPaperScissors.js`.

#### Step 4 - Game logic
Let's think about the logic of Rock Paper Scissors:

1. If both hands are the same, "It's a tie!"
2. If the first hand is 'rock'
    * If the second hand is 'scissors', then 'Player 1 wins!'
    * Otherwise (which basically means the second hand is 'paper', since we have already ruled out a tie and 'scissors), 'Player 2 wins!'
3. If the first hand is 'paper`
  * If the second hand is 'rock', then 'Player 1 wins!'
  * Otherwise (second hand must be 'scissors'), 'Player 2 Wins!'
4. If the first hand is 'scissors'
  * If the second hand is 'paper', then 'Player 1 wins!'
  * Otherwise (second hand must be 'rock'), 'Player 2 Wins!'

Now write that into a conditional:
```javascript
if (hand1 == hand2) {
  return "It's a tie!";
}

if (hand1 == 'rock') {
  if (hand2 == 'scissors') {
    return 'Player 1 wins!';
  }
  // If we reach here, player 2 must have dealt paper
  return 'Player 2 wins!';
}

if (hand1 == 'paper') {
  // fill this in using the logic above

}

if (hand1 == 'scissors') {
  // fill this in using the logic above  
  
}
```

#### Step 5 - Put logic into script
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['hand1', 'hand2'], function (error, result) {
  if (result['hand1'] == result['hand2']) {
    return "It's a tie!";
  }

  if (result['hand1'] == 'rock') {
    if (result['hand2'] == 'scissors') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }

  if (result['hand1'] == 'paper') {
    // fill this in using the logic above

  }

  if (result['hand1'] == 'scissors') {
    // fill this in using the logic above  
  
  }
});
```

#### Step 6 - Refactor
Our `prompt.get()` method is bloated. Let's move it out into it's own "helper" function called `compareHands(hand1, hand2)` by using the decomposition method.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

function compareHands(hand1, hand2) {
  if (hand1 == hand2) {
    return "It's a tie!";
  }

  if (hand1 == 'rock') {
    if (hand2 == 'scissors') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }

  if (hand1 == 'paper') {
    // fill this in using the logic above

  }

  if (hand1 == 'scissors') {
    // fill this in using the logic above  
  
  }
}

prompt.get(['hand1', 'hand2'], function (error, result) {
  console.log(compareHands(result['hand1'], result['hand2']));
});
```
Now test it out so far!

#### Step 7 - Edge Cases
Our little app is not very robust. For instance, it's not accounting for some "edge cases" like what if we enter something other than 'rock', 'paper', or 'scissors'? Write another helper function `acceptableInput(hand)` that `return true` if the input is either `rock`, `paper`, or `scissors`
```javascript
function acceptableInput(hand) {
  if (hand === 'rock' || hand === 'paper' .....) {
    // should return true, which will break out of function here
  }
  // otherwise return false by default here
}

prompt.get(['hand1', 'hand2'], function (error, result) {
  if (acceptableInput(result['hand1']) && acceptableInput(result['hand2'])) {
    console.log(compareHands(result['hand1'], result['hand2']));
  } else {
    console.log('Only "rock", "paper", or "scissors" is acceptable');
});
```

#### Step 8 - Input Scrubbing
We should probably also except different variations of the words, like 'ROCK', 'Scissors', 'pApEr' just to make  users happy. We can use the `''.toLowerCase()` method ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) to help "scrub" our input by always assuring that it is lowercase.
```javascript
prompt.get(['hand1', 'hand2'], function (error, result) {
  var lowerHand1 = result['hand1'].toLowerCase();
  var lowerHand2 = result['hand2'].toLowerCase();
  if (acceptableInput(lowerHand1) && acceptableInput(lowerHand2)) {
    console.log(compareHands(lowerHand1, lowerHand2));
  } else {
    console.log('Only "rock", "paper", or "scissors" is acceptable');
});
```
