# Todo
## Step 0
Inside of a `todo/` directory create an `index.html`
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
  <div id="content">
    <div class="header">TODO</div>
    <form>
      <input type="text" id="todo">
      <input type="submit" value="Submit">
    </form>
    <ul id="todo-list">
      <li>Walk the dog</li>
    </ul>
  </div>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
  <script type="text/javascript" src="./Todo.js"></script>
</body>
</html>
```
and a `style.css`
```css
*:focus {
  outline-style: none !important;
  outline: 0 !important;
}

#content {
    margin: 0 auto;
    width: 100%;
    max-width: 275px;
}

.header {
    text-align: center;
    margin: 20px;
    font-size: 40px;
}

#todo-list {
    margin: 20px 0;
    padding: 0;
}

form {
    text-align: center;
}

#todo-list li {
    display: table;
    margin: 10px auto;
    padding: 10px 0;
    border: 1px solid #ccc;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
    background-color: #fdfdfd;
    width: 100%;
}

#todo-list li span {
    text-align: right;
}


input[type="submit"] {
    padding:5px 0;
    text-align: center;
    background:#ccc;
    border: 0 none;
    -webkit-border-radius: 0px;
    border-radius: 0px;
    font-size: 14px;
    width: 20%;
}

input[type=text] {
    padding:6px;
    border:1px solid #ccc;
    -webkit-border-radius: 0px;
    border-radius: 0px;
    width: 65%;
}
```
and a `Todo.js`
```javascript
'use strict';

$(document).ready(function() {

});
```

## Step 1
Using jQuery, put a `submit` event listener on the form. 

## Step 2
Inside your callback prevent the default `event` from occuring when you submit. Then within `$(this)` `.find()` the `val`ue of the `input[type="text"]` and assign it to a `var`iable.

## Step 3
Construct a string containing a list item `<li></li>` with your text in the middle. `.append()` the html string ti the end of your `#todo-list`.

## Step 4
Now make your list `.sortable()`.

## (Bonus) Step 5
Add a checkbox to each list item, so that you can "complete" a task

## (Bonus Bonus) Step 6
Remove the default task form the html. Add a button or link to each list item. When you `click` it, it should `remove()` its `.parent()` list item.


