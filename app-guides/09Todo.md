# Todo

## Spec 1
Using jQuery, put a `submit` event listener on the form. 

## Spec 2
Inside your callback prevent the default `event` from occuring when you submit. Then within the `$(this)` context, `.find()` the `val`ue of `#todo` and assign it to a `var`iable called `todoText`.

## Spec 3
Construct a string containing a list item `<li></li>` with your `todoText` in the middle. `.append()` the html string to the end of your `#todo-list`.

## Spec 4
Now make your list `.sortable()`.

## (Bonus) Spec 5
Add a checkbox to each list item, so that you can "complete" a task

## (Bonus Bonus) Spec 6
Remove the default task form the html. Add a button or link to each list item. When you `click` it, it should `remove()` its `.parent()` list item.


