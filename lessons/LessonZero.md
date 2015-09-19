# Lesson Zero
## Familiarizing yourself with GitHub
### Taking Notes on Github
We will be saving all of our notes and examples on GitHub (in addition to anyway you like). Here's how to get started.

1. Go to github.com and sign in.
2. Add a repository and name it whatever you want (ex. ACA-Lesson-Notes)
3. Copy the HTTPS clone URL
4. In your terminal, navigate (using `cd`) into a directory where you want to start keeping your repositories.
5. Clone your new repository by type `git clone <HTTPS clone URL>` (without carets "<>", ditto for future examples)
6. Navigate into the directory `cd <repository name>`
7. Open up a Sublime window by typing `subl LessonOneNotes.js`
8. Save it (`ctrl-s` or `command-s`)
9. In your terminal. Type `git status`
10. See that you have added one file.
11. Type `git add -A`. This will stage the file to be committed.
12. Type `git commit -m "Added LessonOneNotes"`
13. Type `git push origin master` to push it up to GitHub

From now on, all of your notes from class will be in this repo. Become friends with GitHub, it will become your newest social network, resume, portfolio, and encyclopedia.

### Set up your SSH Keys for GitHub
Having to type in your GitHub credentials everytime you push to GitHub from the terminal will get old and time consuming. Follow the instructions at [Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys/) to authorize your computer, keeping you from having to always type in your GitHub Credentials.

## Server-side JavaScript
JavaScript was born in the browser. It was created by Netscape to add dynamic code inside Netscape Navigator. Nearly all JavaScript was written in, designed for, and limited to the browser. Today is a different time.

Recently, the popularity of JavaScript has exploded, and many coders wanted to use a unified language on the front-end and back-end. [Node.js](https://nodejs.org/) is a result of this effort. We will begin our JavaScript journey using `node` in your terminal on your machine (aka. server-side / back-end).

### Using Node
To load a Node.js enviroment, simply type `node` in your terminal to open a REPL (Read-Eval-Print-Loop: or, an interactive JavaScript environment in your terminal). To break out of `node`, you press `ctrl + c` twice. You can also write JavaScript to a file (ex. _LessonOneNotes.js_) and run the script with `node LessonOneNotes.js`.
