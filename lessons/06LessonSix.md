![](http://static1.squarespace.com/static/538f3fcde4b05c5fecc7a40e/t/538f48a4e4b00d94e8c253b3/1453396632576/?format=400w)
# Frontend Intermediate Textbook
## Lesson Six
### Object Oriented Programming (OOP)
#### The object
Object oriented programming is the "real deal" of programming. It's a little weird to wrap yor head around at first, and the syntax, reserved words, and vocabulary can be a little intimidating. But once you "get it", your ability to program and pick up new skills and tools will skyrocket. Let's get started with a simple example:

A human is a **class**. There is not physical example of a human, just a list of charastics that, if an **object** has these characteristics, it is considered to be of **class** human. Some general characteristics of a human could be:
* can say "I'm a human!"
* is from Earth

Let's create a `Human` **class** using the _constructor_ method (basically means using a function)
```javascript
function Human() {
  this.planetaryOrigin = 'Earth';
  
  this.explainYourself = function () {
    return "I'm a Human!";
  }
}
```
The first thing we notice is the keyword `this`. `this` is one of the most important words in JavaScript. It refers to your 'context', or basically what **object** you are currently in. We use `this` to attach properties, like `planetaryOrigin`, and methods, like the function `explainYourself()` to the individual `Human` **instances** we are about to create.

Great. We now have zero `Human`s, but at least we defined what a human would look like should we ever come across one. Oh look, there's one now.
```javascript
var humanOne = new Human();
```
Boom! `humanOne` is a walking, talking, breathing `Human` instance. Let's talk to it.
```javascript
// what are you?
console.log(humanOne.explainYourself());
//=> "I'm a Human!"

// where are you from?
console.log(humanOne.planetaryOrigin);
//=> 'Earth'
```

But we know there are a million little characteristics that make each `Human` different. A world with these bland `Humans` walking around would be pretty boring. Let's add some customizeable traits that we can pass into each new **instance**
```javascript
function Human(name, gender, hobby) {
  this.name = name;
  this.gender = gender;
  this.hobby = hobby;

  this.planetaryOrigin = 'Earth';
  
  this.explainYourself = function () {
    return "I'm a Human!";
  }
}
```

Now let's make some `Human`s!
```javascript
var todd = new Human('Todd', 'Male', 'Surfing');
var laura = new Human('Laura', 'Female', 'Swimming');
```

Now we have a little more diverse bunch.

Now let's make a bunch of randomly generatoed `Human`s!
```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var genders = ['Male', 'Female'];
var hobbies = ['Surfing', 'Swimming', 'Sailing', 'Hiking', 'Running', 'Jumping', 'Reading', 'Sleeping'];
var names = ['Hillary', 'Donald', 'Bernie', 'Jeb', 'Joe'];

var austinTx = [];

for (var i = 0; i < 1000; i++) {
  austinTx.push(
    new Human(
      names[getRandomInt(0, names.length)],
      genders[getRandomInt(0, genders.length)],
      hobbies[getRandomInt(0, hobbies.length)]
    )
  );
}
```
Now `austinTx` contains a 1000 mixed presidential candidates.
