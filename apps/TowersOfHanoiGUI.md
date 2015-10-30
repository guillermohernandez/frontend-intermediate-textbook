# Towers of Hanoi GUI
## Step 0
In your http://_username_.github.io repo, create a directory called `towers/`. In it, place these three files,

**index.html**
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
  <div data-stack="1">
    <div data-block="100"></div>
    <div data-block="75"></div>
    <div data-block="50"></div>
    <div data-block="25"></div>
  </div>
  <div data-stack="2">
  </div>
  <div data-stack="3">
  </div>
  <div id="announce-game-won"></div>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script type="text/javascript" src="./script.js"></script>
</body>
</html>
```
**style.css**
```css
[data-stack] {
    display: flex;
    justify-content: left;
    align-items: center;
    -webkit-align-items: center;
    display: -webkit-flex;
    height: 101px;
    background-color: aliceblue;
    margin: 25px;
}

[data-block] {
    width: 25px;
    float: left;
}

[data-block="25"] {
    height: 25px;
    background-color: blue;
}

[data-block="50"] {
    height: 50px;
    background-color: green;
}

[data-block="75"] {
    height: 75px;
    background-color: red;
}

[data-block="100"] {
    height: 100px;
    background-color: yellow;
}

#announce-game-won {
    font-size: 50px;
    text-align: center;
}
```

**script.js**
```javascript
$(document).ready(function() {

}
```

## Step 1 - Moving the blocks
On `click()` of a `[data-stack]`, `detach()` the `last()` of the `children()` and it equal to a variable. Then when another `[data-stack]` is `click()`ed, check if the `block` variable is assigned, if so, append the `block` to the stack.

## Step 2 - Verify move
Only move the block if the value of the `data-` `block` attribute is less than the last block of the stack, or if the stack is empty.

## Step 3 - Check for win
Create a function `checkForWin()` that checks `.each()` stack and determines if one of the last two stacks has four `[data-block]`s. Run this function after every move.
