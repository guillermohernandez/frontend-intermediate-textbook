# Three or Five?
Build a simple command line tool that takes a number as an input, and tells whether it is divisible by three or five. 

Create a file `subl ThreeOrFive.js`
Save the file.

Try to commit in between steps. 
```bash
git status
git add ThreeOrFive.js
git commit -m "First Commit!"
```

## Step 1 - `require` your dependencies
```javascript
'use strict';

var prompt = require('prompt');
// For this particular package, we need to "start" it
prompt.start()
```

## Step 2 - Test that the script works
Let's try to `console.log()` something out.
```javascript
'use strict';

var prompt = require('prompt');

prompt.start()

console.log("Let's get started!");
```
Now in your terminal, run `node ThreeOrFive.js`. You should see your output.

## Step 3 - Let's attempt a prompt
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

## Step 4 - Parse the input
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

## Step 5 - Test for 3 and 5 divisibility
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

## Step 6 - Only return one log if divisible by 3 and 5
Write your conditionals so that it only returns `'<num> is divisible by 3 and 5'` if the number is divisible by both. 
Hint: try nested conditionals
