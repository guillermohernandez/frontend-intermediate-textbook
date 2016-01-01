# Mastermind
[Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) is a codebreaking game, where a player tries to guess the code based on a limited amount of information given from an incorrect guess. You can play the game [here](http://www.web-games-online.com/mastermind/).

## Spec 0 - Define a test solution
Helpful suggestion, while developing you can set a default solution for you to test against. At the top of `mastermind()`, simply set `solution = 'abcd';` to set the global variable. Be sure to not use a `var`.

## Spec 1 - Detect a correct solution
In `mastermind()`, if the `guess` you passed in equals the `solution`, `return` `'You guessed it!'`;

## Spec 2 - Generate a hint
`generateHint()` should take two arguments, `solution`and `guess`.

### Spec 2.1 - Split up the `solution` and `guess`
 In `generateHint()`, create variables `solutionArray` and `guessArray` that each split up passed in arguments, [`.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)ting on `''`(empty string). 

### Spec 2.2 - Determine correct "letter-locations"
Create a `var`iable `correctLetterLocations` that will record how many correct "letter-locations" were guessed. For instance, a guess of `aabc` against a solution of `deba` would yield one correct "letter-location" (`b`). Set `correctLetterLocations` equal to `0`. In a `for` loop, iterate over the `solutionArray`, comparing each index of `solutionArray` against the same index of `guessArray`. If the item matches, increment `correctLetterLocations`, and set that index in `solutionArray` to `null`.

### Spec 2.3 - Determine correct "letters"
Now that we have `null`ed the already counted `correctLetterSpaces`, we can see if the `guessArray` contains any `correctLetters` that were not in the correct location. Set a `var`iable `correctLetters` equal to `0`, and in a `for` loop, again iterate over the `solutionArray`. Using [`.indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), determine if the item at the current index in `guessArray` appears inside of `solutionArray`. Save that index in a `var`iable called `targetIndex`. Now, `if` `targetIndex` is greater that `-1`, increment `correctLetters` and set the item in `solutionArray` at that index equal to `null`.

### Spec 2.4 - `return` hint string
Using the [`colors`](https://www.npmjs.com/package/colors) package, `return` a string that prints out the hints you generated, with `correctLetterLocations` being red, `correctLetters` being white, and separated by a hyphen.

## Spec 3 - Add guess and hint to the board
Define a `var` called `hint` that collects the returned value of `generateHint(solution, guess)`. `.push` the `guess` and the `hint` (as a combined string) into the `board`.

## Spec 4 - end the game after 10 incorrect guesses
If the `board` `length` equals `10`, `return` `'You ran out of turns! The solution was '` and the `solution`. Otherwise, return `'Guess again.'`.
