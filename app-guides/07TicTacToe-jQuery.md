# Tic Tac Toe - jQuery

## Step 0
Inside of a `tictactoe/` directory create an `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="style.css" />
</head>
    <body>
        <div class="row">
            <div data-cell="0"></div>
            <div data-cell="1"></div>
            <div data-cell="2"></div>
        </div>
        <div class="row">
            <div data-cell="3"></div>
            <div data-cell="4"></div>
            <div data-cell="5"></div>
        </div>
        <div class="row">
            <div data-cell="6"></div>
            <div data-cell="7"></div>
            <div data-cell="8"></div>
        </div>
        <div id="announce-winner"></div>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script type="text/javascript" src="./script.js"></script>
    </body>
</html>
```

a `style.css` file
```css
div[data-cell] {
    width: 100px;
    height: 100px;
    background-color: #f2f2f2;
    float: left;
    border: 1px solid #808080;
    font-size: 100px;
    text-align: center;
}

.row {
    clear: both;
}

#announce-winner {
    clear: both;
    font-size: 50px;
}
```
and a `script.js`
```javascript
'use strict';
$(document).on('ready', function() {
    //
});
```

## Step 1
Using jQuery, set a 'click' listener on all of the `[data-cell]`s that adds an `'X'` as `.text()` on `$(this)`.

## Step 2
Set a `var`iable `playerTurn` equal to `'X'`. Then in your `click` event, put `playerTurn` as your `.text()`. After that, toggle `playerTurn` between `'O'` and `'X'` using a ternary operator. You should now be able to change turns as you click around on your board.

## Step 3
Write a function `checkForWin()` that checks each combination of winning `data-cells` and see if they all contain the current `playerTurn`. If so, select `'#announce-winner'` and set its `.text()` to say `'Player ' + playerTurn + 'Wins!'`. Run this function every time a player make a mark, but before the the `playerTurn` switches.

## Bonus Step 4
Protect against changing a previously marked cell.
