# Sprint 2: Pizzabot – Part 2

Today's assignment is further develop our Pizzabot with arrays, objects and classes. 

## How to complete this assignment

You can start by programming this in codepen and then copy paste the code in a `js` file before handing it in. The setup for codepen is the same as yesterday. 

### 1. Practice Arrays

Start by copy all the code you did yesterday into codepen. The bot should function the same way as yesterday, with the changes:  

Instead of having all of your pizzas in variables, add them to an `array`. 

Iterate over your `array` and print your menu for the user.  

Make sure the pizzas are [sorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) in alpabethical order when printed. 

Also, print: ``"Hey! Happy to serve your pizza. On our menu we have X number of pizzas. Menu: 1. PIZZA 80 kr 2....`

### 2. Objects

Let's give all the pizzas their own price by using objects. 

In your array, create an object for every type of pizza that you have. Each pizza should have a name, a price and a true and false option for it that pizza is dicounted or not. 

Print your menu by using your objects names and price. 

Update the function that calculates the total proce to use the objects price instead – so it can handle that the pizzas now have different prices. 

Update the discount function to use the discount value instead, so every pizza can have a discount, not just Hawaii. 

### 3. Classes

Let's do the same thing but with classes instead. 

Create a pizza class where the name, price and discount are attributes. 

Convert your pizza `array`to use instances of your pizza class instead of objects. 

Re-implement your menu using your new class and instances. 

Change your discount attribute to be a integer instead of a booleen, so different pizzas can have different discount rates. 

Make a method in your class that calculates the price by using the discount attribute, So every pizza knows their own price. 

You can now skip your discount function from before since your class is doing this for us. 

Re-implement your summary function to use the price attribute and to take into account if the pizza have a discount or not.  

### 5. Hand in assignment
The `starter-code` contains an empty javascript file that you will copy your code from codepen into. 

To complete this assignment, you need to fork this repository, paste your code into, and then submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [MDN – Javascript Grammar and Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
* [MDN – Control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
* [w3 Schools String methods](https://www.w3schools.com/js/js_string_methods.asp)

---

### :boom: Success!

After completing this assignment your should be confortable using: 
* Arrays in Javascript
* Array methods Javascript
* Objects in Javascript
* Classes and attributes in Javascript

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Go to the Wikipedia Article about [Hawaiian Pizza](https://en.wikipedia.org/wiki/Hawaiian_pizza) and:

* Copy the first three paragraphs. Store the text in a String
* Make your program count the number of words in the string
* Make your program count the number of times the latin word etappears

2. Instead of having your pizzabot live in the console make a form in HTML for the input from the user, pizza type and number of pizzas. Then make your program print it's response in HTML instead. Start by making it work in codepen and then move it into real `html` and `js` files.

A combination of these two examples will help you on the way: [Forms submissions with Javascript](https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit) and [Get Element by ID](https://www.w3schools.com/js/exercise.asp?filename=exercise_arrays4). 
`
