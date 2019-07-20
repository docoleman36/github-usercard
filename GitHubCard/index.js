/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const testRequest = axios.get('https://api.github.com/users/docoleman36')
  .then((axiosData) => {
    console.log("data", axiosData);
    return new gitData(axiosData);
  })
  .catch(err => {
    console.log("Api is currently down", error)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(value => {
  axios.get('https://api.github.com/users/' + value)
    .then((axiosData) => {
      console.log("data", axiosData);
      return new gitData(axiosData);
    })
    .catch(err => {
      console.log("Api is currently down", error)
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
 
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
 
*/
const cardsDiv = document.querySelector(".cards");

function gitData(obj) {
  const cards = document.createElement("div");
  cards.classList.add('card');
  cardsDiv.appendChild(cards);

  const img = document.createElement("img");
  img.src = obj.data.avatar_url;
  cards.appendChild(img);

  const cardsInfo = document.createElement("div");
  cardsInfo.classList.add("card-info");
  cards.appendChild(cardsInfo);

  const text = document.createElement("h3");
  text.classList.add("name");
  text.textContent = obj.data.name;
  cardsInfo.appendChild(text);

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.textContent = obj.data.login;
  cardsInfo.appendChild(userName);

  const location = document.createElement("p");
  location.textContent = "Location:" + obj.data.location;
  cardsInfo.appendChild(location);

  const profile = document.createElement("p");
  profile.textContent = "Profile:";
  cardsInfo.appendChild(profile);

  const a = document.createElement("a");
  a.href = obj.data.html_url;
  a.textContent = obj.data.html_url;
  profile.appendChild(a);

  const followers = document.createElement("p");
  followers.textContent = obj.data.followers;
  cardsInfo.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = obj.data.following;
  cardsInfo.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = "Bio:" + obj.data.bio;
  cardsInfo.appendChild(bio);
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


