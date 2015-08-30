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
