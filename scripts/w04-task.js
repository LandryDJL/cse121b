/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};
myProfile = {  name: "Jacob Landry Dally",
  photo: "images/Jacob.png",
  favoriteFoods: [
    "Garba(attieke) with fried tuna",
    "fried rice with chicken",
    "Jollof rice with chicken",
    "roasted fish with attieke",
    "fried pork with attieke",
    "plain rice with grannut soup"
  ],
  hobbies: [
    "Football",
    "Reading books",
    "Jogging",
    "Learn about new tech"
  ],
  placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Abidjan, Ivory Coast',
      length: '20 years'
    },
    {
      place: 'Daoukro, Ivory Coast',
      length: '6 months'
    },
    {
      place: 'Acra, Ghana',
      length: '2 years'
  }
  );


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
  });

