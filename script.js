console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
const favoriteFoods = ["pizza", "steak", "sandwiches", "enchiladas", "salmon", "crab"];


// 2. Print out each food in the array using a for loop in the format:
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}





// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}






// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}



// 4b. Call the function for the first 3 foods in your favoriteFoods array.
for (let i = 0; i < 3; i++) {
  printFoodRecommendation(favoriteFoods[i]);
}



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  
  // check if the food contains "a"
  if (food.toLowerCase().includes("a")) {
    console.log(food);
  }
}



// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  
  if (food.toLowerCase().includes("a")) {
    foodsWithA.push(food);
  }
}
console.log(foodsWithA);



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  
  if (food.length > 6) {
    longFoodNames.push(food);
  }
}

console.log(longFoodNames);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = []; // start with an empty array

for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];

  if (food.length <= 6) {
    shortFoodNames.push(food);
  }
}

console.log(shortFoodNames);


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log("Long-named foods:", longFoodNames);
console.log("Short-named foods:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are the same number of long- and short-named foods.");
}


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
