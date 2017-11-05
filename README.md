# Sprint 2: Pizzabot – Part 2

Today's assignment is further develop our Pizzabot with arrays, objects and classes. 

## How to complete this assignment

You can start by programming this in codepen and then copy paste the code in a `js` file before handing it in. The setup for codepen is the same as yesterday. 

### 1. Practice Arrays

Start by copy all the code you did yesterday into codepen. The bot should function the same way as yesterday, with the changes:  

Instead of having all of your pizzas in variables, add them to an `array`. 

Iterate over your `array` and print your menu for the user.  

Make sure the pizzas are [sorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) in alpabethical order when printed. 

Also, print: `"Hey! Happy to serve your pizza. On our menu we have X number of pizzas. Menu: 1. PIZZA 80 kr 2...."`

### 2. Objects

Let's give all the pizzas their own price by using objects. 

In your `array`, create an `object` for every type of pizza that you have. Each pizza should have a name, a price and a true and false option for it that pizza is dicounted or not. 

Print your menu by using your object's names and price. 

Update the function that calculates the total price to use the object's price instead – so it can handle that the pizzas now have different prices. 

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

Update the rest of your bot to work the way it's suppose to. 

### 5. Hand in assignment
The `starter-code` contains an empty javascript file that you will copy your code from codepen into. 

To complete this assignment, you need to fork this repository, paste your code into, and then submit a pull request on GitHub (from your repository into the technigo one) for review. Make sure you fork this repo for today's add ons, we want these in a separate hand-in than yesterdays. 

### :books: Reading List

* [w3 Schools – Arrays](https://www.w3schools.com/js/js_arrays.asp)
* [w3 Schools - Array methods](https://www.w3schools.com/js/js_array_methods.asp)
* [MDN – Javascript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [MDN – Javascript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language your're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

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

1. Add an average rating attribute to your pizza objects. After the order is finished, ask the user how she/he would rate the pizza from 1-5. Update the rating attribute with the new average after each user. Tip: Add a new method in the class that calculates the average. 

Print the rating in the menu. 

2. After finished your readings, when do you think it's suitable to use objects instead of classes and vice versa? 

3. Instead of having your pizzabot live in the console make a form in HTML for the input from the user, pizza type and number of pizzas. Then make your program print it's response in HTML instead. Start by making it work in codepen and then move it into real `html` and `js` files.

A combination of these two examples will help you on the way: [Forms submissions with Javascript](https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit) and [Get Element by ID](https://www.w3schools.com/js/exercise.asp?filename=exercise_arrays4). 
`
