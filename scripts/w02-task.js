/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jacob Landry Dally";
let currentYear = new Date().getFullYear();
let profilePicture = "images/Jacob.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = [
  "Garba(attieke) with fried tuna",
  "fried rice with chicken",
  "Jollof rice with chicken",
  "roasted fish with attieke",
  "fried pork with attieke",
  "plain rice with grannut soup"
];

let foodString = "";
for (let i = 0; i < favoriteFoods.length; i++) {
    foodString += `${favoriteFoods[i]} <br>`;
}

// foodElement.innerHTML = foodString;

const singleFavoriteFood = "plain rice with palm nut soup";
favoriteFoods.push(singleFavoriteFood);

foodString = "";
favoriteFoods.shift();
favoriteFoods.pop();
for (let i = 0; i < favoriteFoods.length; i++) {
    foodString += `${favoriteFoods[i]} <br>`;
}

foodElement.innerHTML = foodString;