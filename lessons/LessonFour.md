# Lesson Four
## Javacript
### Popular Array Methods
In our last lesson we learned some pretty nifty array methods:
```javascript
var arr = ['Hello', 'World', 'foo', 'bar'];

console.log(arr[1]);
//=> 'World'

arr[0] = 'Hi';
console.log(arr);
//=> ['Hi', 'World', 'foo', 'bar']

console.log(arr.join(' * '));
//=> 'Hi * World * foo * bar'

// You can see we did not affect the array with the `join()` method, only how it looked
console.log(arr);
//=> ['Hi', 'World', 'foo', 'bar']
```
Let's focus on four other powerful methods:
#### pop
[`[].pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) removes the **last** item in an array, and returns that item.
```javascript
var arr = [ 1, 2, 3, 4 ];

var poppedItem = arr.pop();

console.log(arr);
//=> [ 1, 2, 3 ]

console.log(poppedItem);
//=> 4
```

#### push
[`[].push(item)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) attaches an item(s) to the **back** of an array. It returns the new length of the array.
```javascript
var arr = [1];

arr.push(2);
console.log(arr);
//=> [ 1, 2 ]

arr.push(3, 4);
console.log(arr);
//=> [ 1, 2, 3, 4 ]
```

#### shift
[`[].shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) removes the **first** item in an array, and returns that item.
```javascript
var arr = [ 1, 2, 3, 4 ];

var shiftedItem = arr.shift();

console.log(arr);
//=> [ 2, 3, 4 ]

console.log(shiftedItem);
//=> 1
```

#### unshift
[`[].unshift(item)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) attaches an item(s) to the **front** of an array. It returns the new length of that array.
```javascript
var arr = [1];

arr.unshift(2);
console.log(arr);
//=> [ 2, 1 ]

arr.unshift(3, 4);
console.log(arr);
//=> [ 3, 4, 2, 1 ]
```

### Associative Arrays (Objects)
Associative arrays (also referred to as Objects) are similiar to arrays in that they are a collection of data. The big diffence is how it is organized. Arrays have an **implicit** index starting from 0. Associative arrays have an **explicit** "index" called a _key_, with an associated _value_.
```javascript
// Exampla A
var assoc_arr = {
  'key1': 'value1',
  'key2': 'value2'
};

// Example B
// The key does not have to be a string, and the value could be just about anything
var assoc_arr2 = {
  arr: [1, 2, 3, 4]
  pi: 3.14
};
```
The way we access a value in an associative array is similar to an array.
```javascript
// Example A
console.log(assoc_arr['key1']);
//=> 'value1'

// Example B
// you can also access values using "dot notiation";
console.log(assoc_arr2.pi);
//=> 3.14
```
And to add a key/value pair to an associative array
```javascript
// Example A
assoc_arr['key3'] = 'value3';

// Example B
// Or in dot notation
assoc_arr2.phi = 1.62;
```
It is important to know that you can do the same things different ways, as you'll need utilize them both for different applications. It is convention to try and use the "Example B's" in the above examples.

We have actually been using associative arrays in our `prompt.get()` function in our past apps.
```javascript
'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['first', 'second'], function (error, result) {
  console.log(result);
});
//=> { first: 'first input', second: 'second input' }
```
So we could have accessed the the first and second inputs with `result.first` and `result.second`.
