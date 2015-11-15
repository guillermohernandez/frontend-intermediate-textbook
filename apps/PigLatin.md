# Pig Latin

In your `frontend-intermediate-workbook`, open up `apps/PigLatin.js`. In it you'll see a function `pigLatin(word)`. This is where your app logic will go. To run your program, you can run `node path/to/PigLatin.js`, to run the tests you can run `mocha path/to/PigLatin.js`.

## Spec 1 - Convert simple word
### Step 1.1 - Break down the word

So the basic idea of Pig Latin is to take the first letter of the word, move it the the back, and add 'ay' to the end of it. 
```javascript
console.log( pigLatin('car') ); //=> 'arcay'
```

Let's review how to manipulate strings.
```javascript
var word = 'car';

var firstLetter = word[0];
console.log(firstLetter) //=> 'c'

// we can 'remove' letters by replace them with and empty string
console.log('word'.replace('a', '')); //=> 'cr'

// try removing the first letter and assigning the rest of the word to a var restWord
```

### Step 1.2 - Convert to Pig Latin

Take an input, and `console.log()` out a concatenation of the `restWord + firstLetter + 'ay'`.

## Spec 2 - Convert a more complex word
### Step 2.1 - Take the the first consonant letters up until the first vowel (including "y"), and stick those letters at the end with `ay` attached

```javascript
console.log( pigLatin('crazy') ); //=> 'azycray'
```

`indexOf(substring)` will return the index of the substring.
```javascript
console.log( 'crazy'.indexOf('a') ); //=> 2

//if it doesn't find it, it will return -1
console.log( 'crazy'.indexOf('e') ); //=> -1
```

### Step 2.2 - Use conditionals to find the first vowel
```javascript
var word = 'crazy';
var vowelIndex = -1; // Set it to assume there are no vowels

if ( ( word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('a');
} 

if ( ( word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('e');
} 

if ( ( word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('i');
}

//... the rest for o, u, y
```

### Step 2.3 - Slice the string

`.slice(start, end)` will return a 'slice' of a string
```javascript
console.log( 'hello'.slice(0, 2) ); //=> 'he'

// notice that it returns up until the second index given (before 'l' at index 2)
```

So once we have the `vowelIndex` we can slice the first part of the word off, then the rest of the word.
```javascript
var firstPart = word.slice(0, vowelIndex);
var restWord = word.slice(vowelIndex, word.length);
```

### Step 2.4 - Attach the `firstPart` onto the `restPart` to give us our converted word.

## Spec 3 - Begins with a vowels should just add on `yay` to the end.
```javascript
console.log( pigLatin('egg') ); //=> 'eggyay'
```

### Step 3.1
If your `vowelIndex` is `0`, then just attach `yay` to the end of the word.

## Spec 4 - Must be lowercase
What if someone enters 'HeLlO' as a word? We can "scrub" it by making sure it is always `lowercase()`
```javascript
console.log('HeLlO'.lowercase());
//=> 'hello'
```
