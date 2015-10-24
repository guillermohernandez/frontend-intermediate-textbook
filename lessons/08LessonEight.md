# Lesson Eight
Here's some example HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <div id="cat"></div>
    <div id="hat"></div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
  </body>
</html>
```
## Popular jQuery methods
### [`.detach()`](http://api.jquery.com/detach/)
`.detach()` removes the element from the DOM and `return`s it, so that you may capture it with a variable.

```javascript
var $cat = $('#cat').detach();
// <div id="cat"></div> is not removed from the DOM, but saved in the $cat variable
```

### [`.append()`](http://api.jquery.com/append/) and [`.prepend()`](http://api.jquery.com/prepend/)
`.append()` will allow us to append an element inside another element as the last item.
```javascript
$('#hat').append($cat);
```
Our divs in the DOM now look like 

```html
<div id="hat">
  <div id="cat"></div>
</div>
```

`.prepend()` isused the same way, but puts the element as the first item.

### [`.children()`](http://api.jquery.com/children/)
`.children()` will return all the children of a DOM element.
```html
<div id="box">
  <div id="doll">
  <div id="truck">
  <div id="yoyo">
  <div id="spaceship">
</div>  
```
```javascript
$toys = $('#box').children();
```

#### [`.last()`](http://api.jquery.com/last/)
To get the last item in a collection of jQuery objects (such as `$toys` above).
```javascript
$lastToy = $toys.last();
```

