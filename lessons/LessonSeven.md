# Lesson Seven
## jQuery
### Why do we have it?
Every browser has an API, meaning that it has build in functions and methods for us to locate an element using JavaScript and be able to manipulate it, or add to it, or whatever. For instance, in Chrome I could have an `index.html` that looks something like this
```html
<html>
  <head>
  </head>
  <body>
    <div style="height: 200px; width: 200px; background-color:blue" onclick="addOne()"></div>
    <span id="counter"></span>
    <script>
      var num = 0;
      var counter = document.getElementById('counter');

      function addOne() {
        num++;
        counter.innerText = num;
      }
    </script>
  </body>
</html>
```
and it would work fine. But if I move to Firefox, `.innerText` isn't going to work. It uses something else. This is frustrating. If this doesn't work, what else doesn't work. You don't have time for this, you have to get a product to the client, and it has to work on every machine, in every browser, in every version. In comes jQuery.js. It gives us one set of methods to use, detects what browser it's in, and then uses the appropriate equivalent method for that API. Thank goodness for jQuery.

So using jQuery, our file would look slightly different
```html
<html>
  <head>
  </head>
  <body>
    <div style="height: 200px; width: 200px; background-color:blue"></div>
    <span id="counter"></span>
    <!-- load jQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
    <script>
      // when the document is done loading, run the script inside
      $(document).ready(function() {
        var num = 0;
        var counter = $('#counter');

        $('div').click(function(){
          num++;
          counter.text(num);
        })
      });
    </script>
  </body>
</html>
```
So here, we wee that we are loading jQuery with a CDN, then running our modified script. 

### Selecting an Element in the DOM
What is the DOM? It's the Document Object Model. Duh. But in all practical matters, It's the window with all of your `<div>`s, `<span>`s, etc. Using jQuery, it's easy to add some extra cool features to them.
To grab an element, you would target it like you would in CSS.
```html
<div id="box">I'm in a box.<div>
```
You would grab this one with jQuery by
`$div = $('#div'); //note: it's common to put a $ in your variable name when assigned to a jQuery element`

### Maniplating a DOM Element
So now not only do we have our `<div>` to play with, we added a whole world of functionality to it.
```html
<div id="box">I'm in a box.<div>
```
```javascript
$div = $('#div');

console.log($div.text());
//=> "I'm in a box."

$div.text('Where am I?'); // It updates on the DOM too!
console.log($div.text());
//=> "Where am I?";
```

### Adding an attribute to the element
We can add `data-` attribute to elements that we can utilize in apps.
```html
<div id="box">I'm in a box.<div>
```
```javascript
$div = $('#div');
$div.data('number', 1);

console.log($div.data('number'));
//=> 1
```

### Callbacks
One of the coolest (and sometimes most frustrating) things about JavaScript is that it is asynchronous. We use _callbacks_ to tell the code "once this thing finished, do this _callback_, but I am going to keep going." 

We wrapped our script in a
```javascript
$(document).ready(function () {
//...

});
```
_callback_ that tells the window to run what's inside after the document has loaded. This is good practice to do with jQuery, since part of the way it works is that it scans your DOM looking for the elements it needs, we want to make sure it is all loaded.

Let's look at another one
```javascript
$('div').click(function(){
//...
});
```
Here, I am locating the `div` element, and saying that on `click`, run this code.
