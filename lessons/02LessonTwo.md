# Lesson Two

Let's be sure to add this to our notes repository. Navigate into your repository using `cd`, and create a new file titled something like _LessonTwoNotes.js_ by typing `subl LessonTwoNotes.js`. Type examples (and make comments) in here.

## JavaScript

### Conditionals
Conditionals are a cornerstone in the logic of programming. `if` something then, do this, `else` do something else, unless `if` something `else` is true. A conditional statement in JavaScript can read like this:
```javascript
var year = 1975;
var fashion;

if (year >= 1960 && year <= 1969) {
  fashion = 'Bell Bottoms';
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
