# Lesson One
## JavaScript

### Comments
You'll notice the `//...` used quite often in the examples. These (`//`) and everything after it are meant for commentary or notes for developers (like yourself) to read. They do not need to be typed into the terminal.

### Strict Mode
As of ECMAScript 5 (like saying JavaScript v5), "strict mode" became available to developers. This mode **voluntarily** restricts some of JavaScripts powers that were pretty much always used by accident. We won't get into the specifics, but you can read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). We will be using it by simply placing `'use strict';` at the top of our scripts. It is recommended that you always (even profesionally) use "strict mode", as it can save you time, frustration, and possibly a few security concerns. I will leave it out of the examples below for the sake of brevity, but will always be used in coding later.

### Logging Output
In JavaScript, the way we log output for the coder to read/debug is `console.log()`. Try it in your node REPL
```javascript
console.log('Hello');
console.log('World');

//=>'Hello'
//=>'World'
```

###  Variables
In algebra, we have problems that look like this: `x + y`. Here, `x` and `y` are variables. They are called as such becuase their values can vary. For instance, if `x = 3` and `y = 2`, then `x + y` would equal 5. Let's do it in JavaScript:
```javascript
var x = 3;
var y = 2;
console.log(x + y);
//=> 5
```

Variables can be assigned to just about anything, but the names have a few rules, such as you can't start it with a number, and you can't/shouldn't use any of these [reserved words](http://www.w3schools.com/js/js_reserved.asp).


### Comparisons
In arithmetic, we have the concept of comparisons.
* 3 is greater than 4: `3 > 4`
* 5 is less than or equal to 7: `5 <= 7`
Let's see it in JavaScript:
```javascript
console.log(3 > 4);
//=> true

console.log(5 <= 7);
//=> true

console.log(8 < 3);
//=> false


// We compare equality with ===
console.log(4 === 4);
//=> true

console.log(-2 === 10);
//=> false
```

Takeaways: JavaScript does math

### Primitive Data Types

There are six primitive data types. We will talk about five of them here:

#### Booleans
Pretty basic data type. Can either be `true` or `false`

#### Null
`null` is an assignment value. So if I want a variable to exist, but don't want to necessarily assign a meaningful value to it, I can just assign it to `null`. It's sort of like a placeholder.
```javascript
var todoItem = null;
```

#### Undefined
`undefined` means that a variable has been declared, but nothing, not even `null`, has been assigned.
```javascript
var greatIdea;
console.log(greatIdea);
//=> undefined
```

#### Number
In JavaScript, the idea of number is very far reaching. It includes:
* Actual numbers between -(2 * 10^53 - 1) and 2 * 10^53 - 1
  * Integers `1` `-2`
  * Floats (Decimals) `0.1`, `3.14`
* Symbolic Values
  * `+Infinity`
  * `-Infinity`
  * and even `NaN` (not-a-number)

#### String
Strings are basically anything you can put between single-quotes (`''`) or double-quotes (`""`).
```javascript
var str1 = 'Hello';
var str2 = 'World';
```

You can add them:
```javascript
console.log(str1 + str2);
//=> 'HelloWorld'
```

You have two options to wrap a string, double-quotes (`""`) and  single-quotes (`''`), becuase you may want to use one of those symbols in the string itself, among other reasons. JavaScript will always accept the *outer* symbols.

```javascript
var str3 = "He said 'What is going on here?'";
var str4 = 'She replied "I have no idea"';
```

It is convention to always try to use single-quotes (`''`) when possible. In other languages and some "flavors" of javascript, single-quotes (`''`) and double-quotes (`""`) have different features.

We can also locate a specific character  in a string. All strings have an inherit 'index', meaning that every character has a count. The string `'hello'` has `'h'` at index 0, `'e'` at index 1, '`l`' at index 2, etc. So to pinpoint a character at a specific location, we can do
```javascript
var str = 'world';
console.log(str[3]);
//=> 'l'
```

And we can `replace()` characters or substrings with other charaters or substrings. So, for instance, you can do
```javascript
var boss = "You're the boss.";
console.log(boss.replace("You're", "I'm"));
//=> "I'm the boss."
```

Note: This will only replace the **first** occurance of the substring.

### Operators
The AND (`&&`) and OR (`||`) operators will return the result of multiple boolean values.

#### AND (`&&`)
AND (`&&`) will test whether the value on the left is `true`, and if so, test whether the item on the right is `true`. If both are `true`, then it will return true, if either one is false, it will return false. You can even chain more than one operator together!

```javascript
console.log(true && true);
//=> true

console.log(true && false);
//=> false

console.log(false && true);
//=> false

console.log(false && false);
//=> false

console.log(true && true && true);
//=> true

console.log(true && true && false);
//=> false
```

#### OR (`||`)
OR (`||`) will test whether each item on either side is `true` and if at least one side is `true`, it will reason both together as `true`.

```javascript
console.log(true || true);
//=> true

console.log(true || false);
//=> false

console.log(false || true);
//=> true

console.log(false || false);
//=> false

console.log(true || true || true);
//=> true

console.log(true || true || false);
//=> true
```

### Truthiness: Truthy vs Falsey
Truthiness is a powerful concept in JavaScript. It's a little strange at first, but you will come to love and depend on it in time. It basically breaks down to this:

If it exists and is an "emotionally positive" value, it's considered "truthy":
`true` `'hello'` `'false'` `1` `-4`

Notice 'false' used here is a string, not a boolean.

If it is not assigned a value or is an "emotionally negative" value, it's considered "falsey":
`false` `0` `null` `undefined` `NaN`

Notice `0` is the only number (that is a number) considered "falsey".

### Bang (`!`)
The bang (`!`) operator returns the opposite truthiness value.
```javascript
console.log(true);
//=> true

console.log(!true);
//=> false

console.log(!undefined);
//=> true

console.log(!"Hello");
//=> false

// I sometimes use a double bang (!!) to determine the truthiness of a value. It can come in handy

console.log(!!"Hello");
//=> true

console.log(!!null);
//=> false
```

The bang can also test whether something is **not** equal to something else.

```javascript
var x = 7;
var y = 5;

console.log(x !== y);
//=> true
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
