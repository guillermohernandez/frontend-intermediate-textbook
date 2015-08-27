# Server-side JavaScript
JavaScript was born in the browser. It was created by Netscape to add dynamic code inside Netscape Navigator. Nearly all JavaScript was written in, designed for, and limited to the browser. Today is a different time. 

Recently, the popularity of JavaScript has exploded, and many coders wanted to use a unified language on the front-end and back-end. [Node.js](https://nodejs.org/) is a result of this effort. We will begin our JavaScript journey using `node` in your terminal on your machine (aka. server-side / back-end).

## Using Node
(after installing node.js as detailed [here]())

To load a Node.js enviroment, simply type `node` in your terminal. You can follow along by typing the example below into your command prompt.

### Comments
You'll notice the `//...` used quite often in the examples. These (`//`) and everything after it are meant for commentary or notes for developers (like yourself) to read. They do not need to be typed into the terminal.

# JavaScript: The Language, The Legend

##  Variables
In algebra, we have problems that look like this: `x + y`. Here, `x` and `y` are variables. They are called as such becuase their values can vary. For instance, if `x = 3` and `y = 2`, then `x + y` would equal 5. Let's do it in JavaScript:
```javascript
var x = 3
var y = 2
x + y
//=> 5
```

Variables can be assigned to just about anything, but the names have a few rules, such as you can't start it with a number, and you can't/shouldn't use any of these [reserved words](http://www.w3schools.com/js/js_reserved.asp).


## Comparisons
In arithmetic, we have the concept of comparisons.
* 3 is greater than 4: `3 > 4`
* 5 is less than or equal to 7: `5 <= 7`
Let's see it in JavaScript:
```javascript
3 > 4
//=> true

5 <= 7
//=> true

8 < 3
//=> false


// We compare equality with a ==
4 == 4
//=> true

-2 == 10
//=> false
```

Takeaways: JavaScript does math

## Primitive Data Types

There are six primitive data types. We will talk about five of them here:

## Booleans
Pretty basic data type. Can either be `true` or `false`

## Null
`null` is an assignment value. So if I want a variable to exist, but don't want to necessarily assign a meaningful value to it, I can just assign it to `null`. It's sort of like a placeholder.
```javascript
var todoItem = null
```

## Undefined
`undefined` means that a variable has been declared, but nothing, not even `null`, has been assigned.
```javascript
var greatIdea;
greatIdea
//=> undefined
```

## Number
In JavaScript, the idea of number is very far reaching. It includes:
* Actual numbers between -(2 * 10^53 - 1) and 2 * 10^53 - 1
  * Integers `1` `-2`
  * Floats (Decimals) `0.1`, `3.14`
* Symbolic Values
  * `+Infinity`
  * `-Infinity`
  * and even `NaN` (not-a-number)
  
## String
Strings are basically anything you can put between double-quotes (`""`) or  single-quotes (`''`)`.
```javascript
var str1 = 'Hello'
var str2 = 'World'
```

You can add them:
```javascript
str1 + str2
//=> 'HelloWorld'
```

Hint: It is convention to always try to use single-quotes (`''`)` when possible. In other languages and some "flavors" of javascript, double-quotes (`""`) and  single-quotes (`''`) have different features.

You can even compare them! It will take the first character of each string and compare their "location" in the letter order.
```javascript
str1 < str2
//=> true

str1 >= str2
//=> false
```

You have two options to wrap a string, double-quotes (`""`) and  single-quotes (`''`), becuase you may want to use one of those symbols in the string itself. JavaScript will always accept the *outer* symbols.

```javascript
var str3 = "He said 'What is going on here?'"
```

## Operators
The AND (`&&`) and OR (`||`) operators will return the result of multiple boolean values.

### AND (`&&`)
AND (`&&`) will test whether the value on the left is `true`, and if so, test whether the item on the right is `true`. If both are `true`, then it will return true, if either one is false, it will return false. You can even chain more than one operator together!

```javascript
true && true
//=> true

true && false
//=> false

false && true
//=> false

false && false
//=> false

true && true && true
//=> true

true && true && false
```

### OR (`||`)
OR (`||`) will test whether each item on either side is `true` and if at least one side is `true`, it will reason both together as `true`.

```javascript
true || true
//=> true

true || false
//=> false

false || true
//=> true

false || false
//=> false

true || true || true
//=> true

true || true || false
```

## Truthiness: Truthy vs Falsy
Truthiness is a powerful concept in JavaScript. It's a little strange at first, but you will come to love and depend on it in time. It basically breaks down to this:

If it exists and is an "emotionally positive" value, it's considered "truthy":
`true` `"hello"` `"false"` `1` `-4`

If it is not assigned a value or is an "emotionally negative" value, it's considered "falsy":
`false` `0` `null` `undefined`

## Bang (`!`)
The bang (`!`) operator returns the opposite truthiness value.
```javascript
true
//=> true

!true
//=> false

!undefined
//=> true

!"Hello"
//=> false

// I sometimes use a double bang (!!) to determine the truthiness of a value. It can come in very handy

!!"Hello"
//=> true

!!null
//=> false
```
