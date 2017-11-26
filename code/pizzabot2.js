//Put your Javscript code here:
const pizzas = [
  {name: "Vegetarian Pizza", price: 95},
  {name: "hawaiian Pizza", price: 75},
  {name: "Pepperoni Pizza", price: 90}
]




const checkOrderName = (userEntry) => {
  if(orderName === pizzas[0].name || orderName === pizzas[1].name || orderName === pizzas[2].name) {
   return true
 } else
   return false
 }

const totalCost = (qty, price) => {
  return qty * price
}

const cookingTime = (qty) => {
  if (qty >= 3 && qty <= 5) {
     return "The pizzas will take 15 minutes."
   } else if (qty >= 6) {
     return "The pizzas will take 20 minutes."
   } else {
     return "The pizzas will take 10 minutes."
   }
 }


let welcomeMessage = "Hey! Happy to serve your pizza. On our menu we have:"

pizzas.forEach((pizza, index) => {
  welcomeMessage += ` ${index + 1}. ${pizza.name} ${pizza.price}kr`
})

alert(welcomeMessage)

const orderName = prompt ("Enter the name of the pizza you want to order today")

const orderPizza = pizzas.find((pizza) => {
  return pizza.name === orderName
})

 if (orderPizza) {
    const orderQuantity = prompt (`How many of ${orderName} do you want?`)

    const order = checkOrderName(orderName)

    alert (`Great, I'll get started on your  ${orderName} right away, it will cost  ${totalCost(orderQuantity, orderPizza.price)} kr. ${cookingTime(orderQuantity)}`)
  } else {
   alert ("Sorry, we don't have that!")
 }
