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

This will ask for input only once, but how do you ask for input multiple times? You can put the `prompt.get()` into it's own function, and have it call itself.

```javascript
// SomeFile.js
'use strict';

var prompt = require('prompt');

// For this particular package, we need to "start" it
prompt.start()

// Here's our custom named function
function getPrompt() {
  // Here's where we grab our input  
  prompt.get(['first', 'second'], function (error, result) {
    console.log('First Input: ' + result['first']);
    console.log('Second Input: ' + result['second']);
    getPrompt(); // then we call ourself again! and again! and again!
  });
}

// Don't forget to get the ball running by calling our custom function once!
getPrompt();
```

To break out of the input loop, you can press `command/ctrl - d` in the terminal for now.
