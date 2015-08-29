# Lesson One
## Objectives
  1. Familarity with Git/GitHub
    * creating/cloning a GitHub repository
    * navigating in the terninal using `cd`
    * creating/saving a file in Sublime Text 3
    * checking the status/staging/commtting changes using Git
    * pushing commits to GitHub
    * set up SSH keys
  2. Coding Server-Side JavaScript
    * using `node` to open REPL or load a script
  3. JavaScript
    * stress use of "strict mode" and comments
    * logging output
    * assign values to variables
    * make comparisons between values and variables
    * overview of popular data types
      * boolean
      * undefined
      * null
      * number
      * string
    * `&&`, `||`, and `!` operators
    * basic understanding of "truthiness" concept
  4. Running tests with mocha
    * globally install mocha via npm
    * forking/cloning/navigating tests repository
    * reading test specs and coding solutions
    * save/commit/push changes to GitHub

## Instructional Plan

### Taking Notes on Github
We will be saving all of our notes and examples on GitHub (in addition to anyway you like). Here's how to get started.

1. Go to github.com and sign in.
2. Add a repository and name it whatever you want (ex. ACA-Lesson-Notes)
3. Copy the HTTPS clone URL
4. In your terminal, navigate (using `cd`) into a directory where you want to start keeping your repositories.
5. Clone your new repository by type `git clone <HTTPS clone URL>` (without carets "<>", ditto for future examples)
6. Navigate into the directory `cd <repository name>`
7. Open up a Sublime window by typing `subl LessonOneNotes.js`
8. Save it (`ctrl-s` or `command-s`)
9. In your terminal. Type `git status`
10. See that you have added one file.
11. Type `git add -A`. This will stage the file to be committed.
12. Type `git commit -m "Added LessonOneNotes"`
13. Type `git push origin master` to push it up to GitHub

From now on, all of your notes from class will be in this repo. Become friends with GitHub, it will become your newest social network, resume, portfolio, and encyclopedia.

### Set up your SSH Keys for GitHub
Having to type in your GitHub credentials everytime you push to GitHub from the terminal will get old and time consuming. Follow the instructions at [Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys/) to authorize your computer, keeping you from having to always type in your GitHub Credentials.

### Server-side JavaScript
JavaScript was born in the browser. It was created by Netscape to add dynamic code inside Netscape Navigator. Nearly all JavaScript was written in, designed for, and limited to the browser. Today is a different time. 

Recently, the popularity of JavaScript has exploded, and many coders wanted to use a unified language on the front-end and back-end. [Node.js](https://nodejs.org/) is a result of this effort. We will begin our JavaScript journey using `node` in your terminal on your machine (aka. server-side / back-end).

### Using Node
To load a Node.js enviroment, simply type `node` in your terminal to open a REPL (Read-Eval-Print-Loop: or, an interactive JavaScript environment in your terminal). You can also write JavaScript to a file (ex. _LessonOneNotes.js_) and run the script with `node LessonOneNotes.js`.

### JavaScript: The Language

#### Comments
You'll notice the `//...` used quite often in the examples. These (`//`) and everything after it are meant for commentary or notes for developers (like yourself) to read. They do not need to be typed into the terminal.

#### Strict Mode
As of ECMAScript 5 (like saying JavaScript v5), "strict mode" became available to developers. This mode **voluntarily** restricts some of JavaScripts powers that were pretty much always used by accident. We won't get into the specifics, but you can read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). We will be using it by simply placing `'use strict';` at the top of our scripts. It is recommended that you always (even profesionally) use "strict mode", as it can save you time, frustration, and possibly a few security concerns. I will leave it out of the examples below for the sake of brevity, but will always be used in coding later.

#### Logging Output
In JavaScript, the way we log output for the coder to read/debug is `console.log()`. Try it in your node REPL
```javascript
console.log('Hello');
console.log('World');

//=>'Hello'
//=>'World'
```

####  Variables
In algebra, we have problems that look like this: `x + y`. Here, `x` and `y` are variables. They are called as such becuase their values can vary. For instance, if `x = 3` and `y = 2`, then `x + y` would equal 5. Let's do it in JavaScript:
```javascript
var x = 3;
var y = 2;
console.log(x + y);
//=> 5
```

Variables can be assigned to just about anything, but the names have a few rules, such as you can't start it with a number, and you can't/shouldn't use any of these [reserved words](http://www.w3schools.com/js/js_reserved.asp).


#### Comparisons
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

#### Primitive Data Types

There are six primitive data types. We will talk about five of them here:

##### Booleans
Pretty basic data type. Can either be `true` or `false`

##### Null
`null` is an assignment value. So if I want a variable to exist, but don't want to necessarily assign a meaningful value to it, I can just assign it to `null`. It's sort of like a placeholder.
```javascript
var todoItem = null;
```

##### Undefined
`undefined` means that a variable has been declared, but nothing, not even `null`, has been assigned.
```javascript
var greatIdea;
console.log(greatIdea);
//=> undefined
```

##### Number
In JavaScript, the idea of number is very far reaching. It includes:
* Actual numbers between -(2 * 10^53 - 1) and 2 * 10^53 - 1
  * Integers `1` `-2`
  * Floats (Decimals) `0.1`, `3.14`
* Symbolic Values
  * `+Infinity`
  * `-Infinity`
  * and even `NaN` (not-a-number)
  
##### String
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


#### Operators
The AND (`&&`) and OR (`||`) operators will return the result of multiple boolean values.

##### AND (`&&`)
AND (`&&`) will test whether the value on the left is `true`, and if so, test whether the item on the right is `true`. If both are `true`, then it will return true, if either one is false, it will return false. You can even chain more than one operator together!

```javascript
console.log(true && true);
//=> true

console.log(true && false
//=> false

console.log(false && true
//=> false

console.log(false && false
//=> false

console.log(true && true && true
//=> true

console.log(true && true && false
```

##### OR (`||`)
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

#### Truthiness: Truthy vs Falsey
Truthiness is a powerful concept in JavaScript. It's a little strange at first, but you will come to love and depend on it in time. It basically breaks down to this:

If it exists and is an "emotionally positive" value, it's considered "truthy":
`true` `'hello'` `'false'` `1` `-4`

Notice 'false' used here is a string, not a boolean.

If it is not assigned a value or is an "emotionally negative" value, it's considered "falsey":
`false` `0` `null` `undefined` `NaN`

Notice `0` is the only number (that is a number) considered "falsey".

#### Bang (`!`)
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

# Assessment

## Let's pass some tests!
Tests are a great way to make sure you code works the way you planned it would, and to make sure you don't break something in the future. We will be using them to test our understanding of the lesson.

1. Our test repository is located at https://github.com/mistakevin/acatests.
2. Click the 'Fork' button (choose your account if prompted). 
3. Once forked, repeat steps 3 - 7 above.
4. Type `sudo npm install -g mocha` in your terminal. Enter your password if prompted.
5. Navigate into LessonZero in your terminal (`cd LessonZero`)
6. Run `mocha`
7. Hopefully the test passes!
8. Now navigate backwards (`cd ..`) then into the LessonOne directory (`cd LessonOne`)
9. Run `mocha` and watch the tests fail :(
10. In Sublime Text, open _LessonOne.js_
11. Below each comment, try to do what it is asking. Be sure to always `return` your answer.
12. Run `mocha` after each attempt to watch the functions pass or fail.
