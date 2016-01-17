# Address Book

## Spec 0 - Let's test the API
Go to '`https://reqres-api.herokuapp.com/api/users'` in your browser. Take a look at the JSON object. See that it returns a JSON collection of objects that look something like
```JSON
[
  {
    "id":1,
    "first_name":"george",
    "last_name":"bluth"
  },
  {
    "id":2,
    "first_name":"lucille",
    "last_name":"bluth"
  },
  {
    "id":3,
    "first_name":"oscar",
    "last_name":"bluth"
  }
]
```
but with more objects. Each object has an `"id"`. Let's take `"id"` `1` and put that at the end of the url like this:
`'https://reqres-api.herokuapp.com/api/users/1'`. That will return more information about that particular person, like so:
```JSON
{
  "id": 1,
  "first_name": "george",
  "last_name": "bluth",
  "address": "4116 Magnolia Drive, Portland, ME 04103",
  "phone": 15551234567,
  "occupation": "father",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
}
```

That is our API to play with.

## Spec 1 - Let's try an AJAX call
Using jQuery's (`$`) [`.ajax`](http://api.jquery.com/jquery.ajax/) method, make a call to `https://reqres-api.herokuapp.com/api/users`. Watch the call happen in your `Network` tab in your developer console. 

## Spec 2 - Iterate over the `user`s collection
In a `success` callback, pass in `users` as your reponse, and the iterate over `.each` `user` using [Underscore.js#each](http://underscorejs.org/#each). In each loop, create a `var` called `str` that builds an html string that matches the `<tr></tr>` in the html markup, but with the `user` keys. At the end of each loop, `append` the `str` to the `tbody` element.

## Spec 3 - Individiual AJAX calls
You should have produced links for each row. Put a `click` listener on each link, and in the callback, prevent the default event from occuring. Create a `var` `url` that starts as a string `'https://reqres-api.herokuapp.com/api/users/'`. Now grab the `data-id` value from the link using the `.data` method, and attach it to the end of the `url`. Now make an `.ajax` with that `url`, and in a `success` callback, pass in `user` as the response. build another `str` that builds an html string that matches the default markup in the `div#details` element.
