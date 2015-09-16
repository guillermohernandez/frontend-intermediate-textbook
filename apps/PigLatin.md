# Pig Latin

## Step 0 - Create a new file, commit it, and push it to GitHub
In your command line, navigate to the directory where you want to start your file. then create the file in your terminal with
`subl PigLatin.js`

Add a line to your script
```javascript
'use strict';

```

Save the file in Sublime Text and return to the command line.

View the status of your file in `git`
`git status`

Then "stage" your file to be commited
`git add PigLatin.js`

Commit your file
`git commit -m "Initial Commit"`

Then push to GitHub
`git push origin master`

Check GitHub to verify it got pushed. Now we're in business.

## Step 1 - Prompt the user

We're going to use the `npm` package `prompt`. It will allow us to interact with our user through the terminal by taking input.

To install 'prompt' with `npm`, you simply type `npm install prompt`. This will install `prompt` into your current directory inside a folder called `node_modules`. Try to not "check" this folder into 'git'.

Now let's `require()` it at the top of our script.

```javascript
'use strict';

var prompt = require('prompt');

```

This particular package needs to be 'started'

```javascript
'use strict';

var prompt = require('prompt');
prompt.start();
```

Alright! Let's get to `prompt`ing.

```javascript
'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['name'], function(error, result) {
    console.log('Hello, ' + result['name'] + '!');
});
```

Now let's run it `node PigLatin.js`

Cool. Now let's build our app.

## Step 3 - Break down our words

So the basic idea of Pig Latin is to take the first letter of the word, move it the the back, and add 'ay' to the end of it. Let's review how to manipulate strings.
```javascript
var word = 'car';

var firstLetter = word[0];
console.log(firstLetter) //=> 'c'

// we can 'remove' letters by replace them with and empty string
console.log('word'.replace('a', '')); //=> 'cr'

// try removing the first letter and assigning the rest of the word to a var restWord
```

## Step 4 - Convert to Pig Latin

Alright, now instead of a `name`, take a `word` and `console.log()` out a concatenation of the `restWord + firstLetter + 'ay'`.

## Step 5
To get the last index of a string you can use the `length` minus 1
```javascript
'hello'.length
//=> 5

'hello'.length - 1
//=> 4
// since everything is zero based, you need to subtract one.
```

`indexOf(substring)` will return the index of the substring.
```javascript
console.log('crazy'.indexOf('a'));
//=> 2

//if it doesn't find it, it will return -1
console.log('crazy'.indexOf('x'));
//=> -1

```

`slice(start, end)` will return a 'slice' of a string
```javascript
'hello'.slice(0, 2);
//=> 'he'
// notice that it returns up until the second index given
```

Use conditionals to find the first vowel
```javascript
var word = 'create';
var lastIndex = word.length - 1;
var vowelIndex = word.indexOf('a');

if (word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) {
    vowelIndex = word.indexOf('e');
} 

if (word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) {
    vowelIndex = word.indexOf('i');
}

//...

var firstPart = word.slice(0, vowelIndex);
var restWord = word.slice(vowelIndex, lastIndex);
```

## Step 6 - data scrubbing
What if someone enters 'HeLlO' as a word? We can "scrub" it by making sure it is always `lowercase()`
```javascript
console.log('HeLlO'.lowercase());
//=> 'hello'
```
