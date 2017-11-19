# Sprint 2: Pizzabot – Part 2

Today's assignment is further develop our Pizzabot with arrays, objects and classes.

## How to complete this assignment

Write your bot in `code/pizzabot2.js`, then open `code/index.html` in the browser to use the bot. In this assignment, when we say to print a message, its up to you this time to decide how to do this. You could use either `console.log()`, `alert()`, or even `document.getElementById("...").innerHTML = ""`, or some other technique if you prefer!.

### 1. Practice Arrays

Start by copying all the code you did yesterday into `code/pizzabot2.js`. We will build upon the code from yesterday, so make sure that works before proceeding!

Instead of storing all of your pizza names in variables, add them to an array.

Iterate over your array and print your menu for the user.

[Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) your pizzas in alpabetical order when you print them.

Also, summarize how many pizzas you have and print: `"Hey! Happy to serve your pizza. On our menu we have X number of pizzas. Menu: 1. Hawaii 80 kr 2. Vegatariana 80 kr...."`

### 2. Objects

Lets change the pizza variables from just being strings to being an object which can group information about that pizza. Each object should have the following keys:

* name (string)
* price (integer)

Update your objects so that the "Vegetarian" pizza costs 95:-, the "Hawaiian" costs 75:- and the "Pepperoni" costs 90:-.

Print your menu by using your pizza object's names and prices.

Update the function that calculates the total price to use the object's price instead – so it can handle that the pizzas now have different prices.

### 3. Classes

Let's try and do the same thing but with classes. Create a `Pizza` class with attributes for `name` and `price`. The class should have a constructor which sets those attributes.

Convert your pizza array to use instances of your pizza class instead of objects.

Re-implement your menu using your new class and instances.

Update the rest of your bot to make sure it works the way it was intended to.

### 5. Hand in assignment

As always, when you're done, submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [MDN - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN – Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language your're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment your should be comfortable using:

* Arrays in Javascript
* Array methods Javascript
* Objects in Javascript
* Classes and class attributes in Javascript

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Add an average rating attribute to your pizza objects. After the order is finished, ask the user how she/he would rate the pizza from 1-5. Update the rating attribute with the new average after each user. Tip: Add a new method in the class that calculates the average.

Print the rating in the menu.

2. After finished your readings, when do you think it's suitable to use objects instead of classes and vice versa?

3. Instead of having your pizzabot live in the console make a form in HTML for the input from the user, pizza type and number of pizzas. Then make your program print it's response in HTML instead.

A combination of these two examples will help you on the way: [Forms submissions with Javascript](https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit) and [Get Element by ID](https://www.w3schools.com/js/exercise.asp?filename=exercise_arrays4).
`
