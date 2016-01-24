# Gist Blog

## Spec 0 - Playing with the API

So let's run through the API real quick. First, in your terminal, navigate to to your app directory:

After starting up a server in the app directory, navigate in your browser to `http://localhost:8080/api/gists.json`, here you will see the top level of the api, with all of the gists. In each gist, you will see a `"url"` key. Navigate to that URL. In that address you will see another JSON object. Look for a `"files"` key with an object containing a file. In that file you'll see the `"content"` of the file. Next look for a `"comments_url"`. A that address, you'll see a collection of comments, with keys such as `"user"` and `"body"`.

## Spec 1
Using jQuery to make an AJAX call, insert a list of links into `#posts` using `_.each`, with the `"description"` of each gist as the text.

## Spec 2
Using [`_.filter`](http://underscorejs.org/#filter), only display the gists that start with a `'#post'` in the `"description"`

### Spec 2.1
After fitering, remove the `'#post '` from the title

### Spec 2.2
Set the `href` attribute on each link to `"#"`, and a `"data-url"` attribute equal to the `"url"` value.

## Spec 3
After the links are are inserted, add a `click` listener, and prevent the default event from occuring. Then make an ajax call with the `"data-url"` value, grabbing it with `$.data('url')`.

## Spec 4
Insert the `"content"` of the file named `post.md` into `#post`.

## Spec 4.1
Since our `"content"` is written in [Markdown](https://guides.github.com/features/mastering-markdown/), we can use the [Marked.js](https://github.com/chjj/marked) library to convert the content to html. Simply call `marked()` on your content. e.g. `marked(content)`

## Spec 5
After inserting your content, make another ajax call using the `"comments_url"`, and insert the `["user"]["login"]` and `"body"` in a list in `#comments`

## Spec 6
Make it look nice! This is going to be YOUR blog! Take a look at some CSS frameworks, such as:
[Materialize](http://materializecss.com/) - Framework based on Google's Material Design Guidelines
[Material Design Lite](http://www.getmdl.io/) - Google's Official CSS Material Framework
[Bootstrap](http://getbootstrap.com/) - Probably the most popular CSS framework on the web. Made by Twitter
[Foundation](http://foundation.zurb.com/sites/docs/) - Industry standard of CSS Frameworks.
[Skeleton](http://getskeleton.com/) - Beautifully simple CSS Framework

## Spec 7
After development and styling on your blog dies down, you can plug it into your Github account. If done correctly, you should only have to change one url: `http://localhost:8080/api/gists.json` to `https://api.github.com/users/<your github username>/gists`. Now whenever you create a [gist](https://gist.github.com/) with `"#post"` in the title and a file named `post.md`, it will automatically be pulled into your blog!

The reason you should wait until after you've finished developing the app and styling it, is beacuase the Github Public API has a throttle on it. If you make too many calls from a single IP, it'll block you becuase it thinks you are up to something. But using it as a blog is fine, becuase when people from the web visit it spreads out the connections.
