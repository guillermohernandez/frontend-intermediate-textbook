![](http://static1.squarespace.com/static/538f3fcde4b05c5fecc7a40e/t/538f48a4e4b00d94e8c253b3/1453396632576/?format=400w)
# Frontend Intermediate Textbook
## Lesson Three
### Javascript

#### Scope
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
// one() is available

var a = "a";
// a is available

function one() {
  // one() is available
  // two() is available
  // a is available

  var b = 'b';
  // b is available

  function two() {
    // one() is available
    // two() is available
    // three() is available
    // a is available
    // b is available

    var c = 'c';
    // c is available

    function three() {
      // one() is available
      // two() is available
      // three() is available
      // a is available
      // b is available
      // c is available

      var d = 'd';
      // d is available
    }
  }
}
```
note: You can see a function is allowed to refer to itself from within!

#### Ternary Operator
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

#### Arrays
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

##### Accessing/Setting items in an array
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
