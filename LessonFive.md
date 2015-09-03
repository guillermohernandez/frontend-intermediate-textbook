# Lesson Five
## Javacript
### More Operators
#### Increment (`++`) and Decrement (`--`)
In JavaScript, you can attach a `++` to the end of any variable assigned to a number to increment that variable by one.
```javascript
var num = 55;

// essentially equivalent to num = num + 1
num++

console.log(num);
//=> 56
```
`--` works as a decrementer
```javascript
var num = 56;

// essentially equivalent to num = num - 1
num--

console.log(num);
//=> 55
```

#### Assignment Operators (`+=`, `-=`, `*=`, `/=`)
[Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) are also pretty handy. While the `++` and `--` let you increase and decrease by one, these can let you increase/decrease by anything.
```javascript
var num = 3;

// essentially equivalent to num = num + 4;
num += 4;

console.log(num);
//=> 7
```

### Loops
#### `for` Loop
Loops are how you work things done. If I wanted to cycle through this array
`var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];`
and return an array with all the items doubled without using a loop, it would end up looking like this
```javascript
var arr2 = [];
arr2.push(arr1[0] * 2);
arr2.push(arr1[1] * 2);
arr2.push(arr1[2] * 2);
arr2.push(arr1[3] * 2);
arr2.push(arr1[4] * 2);
arr2.push(arr1[5] * 2);
arr2.push(arr1[6] * 2);
arr2.push(arr1[7] * 2);
arr2.push(arr1[8] * 2);
arr2.push(arr1[9] * 2);
arr2.push(arr1[10] * 2);
arr2.push(arr1[11] * 2);
arr2.push(arr1[12] * 2);
arr2.push(arr1[13] * 2);
arr2.push(arr1[14] * 2);
arr2.push(arr1[15] * 2);
arr2.push(arr1[16] * 2);
```
What if we had a 1000 item array? Loops could help us solve this in just a few lines of code.
```javascript
var arr2 = [];
for (var i = 0; i <= 16; i++) {
  arr2.push(arr[i] * 2);
}
```
Let's break this down. We start with the word `for` and then enter **three conditions** between the `()`. 
* The first statement will set our **iterator** `i`.
* The second statement is a conditional. It is say "while `i` is less than or equal to 16 is true, run this loop."
* The third statement is our incrementer/decrementer. We can place our `++`/`--`, or one of our assignment operators `i += 2`. This will run every loop, until the second statement is no longer true.

Then in between the mustaches `{}`, we have the code that is to be ran each loop. Our iterator is passed into the loop, so that we may use it.

Let' take a look at this example
```javascript
var arr1 = [1, 2, 3, 4]
var arr2 = [];
for (var i = 0; i > arr1.; i++) {
  arr2.push(arr[i] * 2);
}
```
