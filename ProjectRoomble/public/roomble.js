// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAntjt2kCb6-HpIcfmswpu7lNly-6vaItA",
    authDomain: "roomble-73694.firebaseapp.com",
    databaseURL: "https://roomble-73694-default-rtdb.firebaseio.com",
    projectId: "roomble-73694",
    storageBucket: "roomble-73694.appspot.com",
    messagingSenderId: "44177614441",
    appId: "1:44177614441:web:e6c2b18f7ba4a6b9d624f8",
    measurementId: "G-X8DB013271"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

//firebase.analytics();
//var db = app.database(); //access firebase
//var db = firebase.database(); //MAY NEED TO ADD AGAIN LATER
function readURL(input, target)
{
    document.getElementById(target).style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById(target).src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}


function emailLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)

          .then(result =>
            {
              const user = result.user;
              document.write(`Hello ${user.displayName}`);
              /*
             //new code
              return user.getIdToken().then(idToken = > {
              // Session login endpoint is queried and the session cookie is set.
              // CSRF protection should be taken into account.
              // ...
             const csrfToken = getCookie('csrfToken')
             return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
            //end of new code
            */
              //then upload photos.
              //window.location = '../photoPage/photospage.html';
              window.location = '../settingsPage/profilesettings.html';


              console.log(user)
            })
            .catch(console.log)
}
function emailLoginData() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)

          .then(result =>
            {
              const user = result.user;
              //document.write(`Hello ${user.displayName}`);
              /*
             //new code
              return user.getIdToken().then(idToken = > {
              // Session login endpoint is queried and the session cookie is set.
              // CSRF protection should be taken into account.
              // ...
             const csrfToken = getCookie('csrfToken')
             return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
            //end of new code
            */
              //then upload photos.
             //window.location = '../photoPage/photospage.html';


              console.log(user)
            })
            .catch(console.log)
}

  //function that adds data from photospage.html to database
  //THIS IS THE ONE THAT WORKS
  //NOT USING THIS RIGHT NOW
  function addPhotoToDatabase()
  {
    //Get user UID
    emailLoginData();
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    // User logged in already or has just logged in.
    console.log(user.uid);
    } else {
    // User not logged in or has just logged out.
  }
  });
    var userID = user.uid;
    console.log(userID);
    var url = document.getElementById("photo_form").item_url.value;

    if(url == "")
    {
      alert("Error: provide a value for each field");
      return;
    }

       firebase.database().ref("users/").push({
         userID: userID,
         link: url
       });
       displayPhoto();
  }

  function addProfileToDatabase()
  {
    emailLoginData();
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    // User logged in already or has just logged in.
    console.log(user.uid);
    } else {
      console.log('its not working');
    // User not logged in or has just logged out.
    }
    });
    var userID = user.uid;
    // Get all the data from the form
    var form = document.getElementById("profile_form");
    var fullName = form.fullName.value;
    var phoneNumber = form.phoneNumber.value;
    var photoUrl = form.item_url.value;
    var birthDate = form.birthday.value;
    var gender = form.gender.value;
    var bio = form.bio.value;
    console.log(userID);
    console.log(fullName);

    if(form == "" || fullName == "" || phoneNumber == "" || photoUrl == "" || birthDate == "" || gender == "" || bio == "")
    {
      alert("Error: provide a value for each field");
      return;
    }
  //var usersRef = firebase.database().ref.child('users');
  firebase.database().ref("users/").push({
    userID: userID,
    fullName: fullName,
    phoneNumber: phoneNumber,
    image: photoUrl,
    birthDate: birthDate,
    gender: gender,
    bio: bio
  });
  //createCard(userID, photoUrl, phoneNumber, fullName, birthDate, gender, bio);
}
//NOT SURE IF THIS ONE WORKS
/*
function displayPhoto()
{
  var dbRef = firebase.database().ref();
  var usersRef = firebase.database().ref("users/");
  usersRef.on("child_added", function(data, prevChildKey) {
   var newUser = data.val();
   // console.log("PhotoURL: " + newUser.photoUrl);
   // console.log("Name: " + newUser.fullName);
   // console.log("Gender: " + newUser.gender);
   // console.log("Birthday: " + newUser.birthDate);
   // console.log("Bio: " + newUser.bio);
  document.write("Hi! Meet "+ newUser.fullName+". " + newUser.gender + " says "+ newUser.bio +
  ". Their birthday is " + newUser.birthDate + " and if you want to reach out to them, here is their phone number: "
  + newUser.phoneNumber);
   // console.log("Phone Number: " + newUser.phoneNumber);
});

}
*/
// function displayPhoto()
// {
//    $(document).ready(function() {
//       // var itemRow;
//       //   itemRow = document.createElement("div");
//       //   itemRow.setAttribute('class', 'row justify-content-md-center');
//       //   var dbRef = firebase.database().ref();
//       //   var usersRef = firebase.database().ref("users/");
//       //   usersRef.on("child_added", function(data, prevChildKey) {
//       //    var newUser = data.val();
//       //    var title = document.createTextNode(newUser.fullName);
//         //  var columns = document.createElement("div");
//         displayInfo(newUser.fullName);
//         //  columns.setAttribute('class','col-sm-2');
//         //  var cbody = document.createElement("div");
//         // cbody.setAttribute('class', 'card-body');
//         // var card = document.createElement("div");
//         // card.setAttribute('class', 'card');
//         // var img = document.createTextNode(newUser.bio);
//         // //img.setAttribute('class', 'card-body');
//         // card.appendChild(img);
//         // cbody.appendChild(title);
//         // card.appendChild(cbody);
//         // columns.appendChild(card);
//         // itemRow.appendChild(columns);
//       });
//     })
// }
// function createCard(userID, url, phoneNumber, fullName, birthDate , gender, bio)
// {
//   // Get all the info submitted by the modal form and create a card with all those attributes
//   var container = document.getElementById('item_card_holder');
//   var newCard = document.createElement('div');
//   newCard.classList = 'card';
//   var item_id = userID;
//   var name = fullName;
//   var img = url;
//   var phoneNumber=phoneNumber;
//   var age = birthDate;
//   var bio = bio;
//   var gender = gender;
//   var tag_content = ``;
//   if(userID.length != 0)
//   {
//     tag_content += `
//     <br><br>`;
//     for(var i = 0; i < userID.length; i++)
//     {
//       tag_content += `
//       <span class="label ${userID[i]}">${userID[i]}</span>`;
//     }
//   }
//
//   // May need to add the <div class="col-auto mb-3"> to keep it in format
//   var content = `
//   <div id="${userID}" class="card" style="width: 20rem;">
//     <img src="${img}" class="card-img-top" alt="${name}">
//     <div class="card-body">
//       <h4 class="card-title">${name}</h5>
//       <h5 class="card-text">${location}</h5>
//       <h5 class="card-text">${gender}</h5>
//       <h5 class="card-text">${age}</h5>
//       <h5 class="card-text">${phoneNumber}</h5>
//       <h5 class="card-text">${bio}</h5>
//     </div>
//   </div>
//   `;
//     container.innerHTML += content;
//   //console.log(content);
//
// }

// Handler that deals with remove item calls
$(document).on("click", ".open-delete_item", function () {
     itemToDelete = $(this).data('id');
});
/*.then(function() {
    console.log("Document successfully written!");
    successfulAdd(true);
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
// Create the corresponding card
createCard('card_' + id, itemName, url, descrip, quan, tags);
}
}
  //function that adds data from homepage.html to database
  function addMatchToDatabase()
  {
    // Get all the data from the form
    var form = document.getElementById("add_item_form")
    var itemName = form.item_name.value;
    var url = form.item_url.value;
    var descrip = form.inputted_description.value;
    var quan = form.item_quantity.value;
    console.log(form.foodBox.checked);
    if(itemName == "" || url == "" || descrip == "" || quan == "")
    {
      alert("Error: provide a value for each field");
      return;
    }
  }
  //function that adds data from preferencesettings.html to database
/*  function addPreferencesToDatabase()
  {
    // Get all the data from the form
    var form = document.getElementById("add_item_form")
    var itemName = form.item_name.value;
    var url = form.item_url.value;
    var descrip = form.inputted_description.value;
    var quan = form.item_quantity.value;
    console.log(form.foodBox.checked);
    if(itemName == "" || url == "" || descrip == "" || quan == "")
    {
      alert("Error: provide a value for each field");
      return;
    }
  }
  //function that adds data from profilesettings.html to database
/*  function addProfileToDatabase()
  {
    // Get all the data from the form
    var form = document.getElementById("add_item_form")
    var itemName = form.item_name.value;
    var url = form.item_url.value;
    var descrip = form.inputted_description.value;
    var quan = form.item_quantity.value;
    console.log(form.foodBox.checked);
    if(itemName == "" || url == "" || descrip == "" || quan == "")
    {
      alert("Error: provide a value for each field");
      return;
    }
  }
//function to display profile on home page, called in onLoad
/*function createCard(itemID, itemName, itemImg, itemDescrip, itemQuantity, itemTags)
{
  // Get all the info submitted by the modal form and create a card with all those attributes
  var container = document.getElementById('item_card_holder');
  var newCard = document.createElement('div');
  newCard.classList = 'card';
  var item_id = itemID;
  var card_id = item_id;
  var item_name = itemName;
  var item_img = itemImg;
  var description = itemDescrip;
  var item_tags = itemTags; // Items can have many tags or none -- have to add them!
  var tag_content = ``;
  if(item_tags.length != 0)
  {
    tag_content += `
    <br><br>`;
    for(var i = 0; i < item_tags.length; i++)
    {
      tag_content += `
      <span class="label ${item_tags[i]}">${item_tags[i]}</span>`;
    }
  }
}
//calls createCard and its passed the users array and takes data from each user to display in createCard
function onLoad(users) {
  // TODO: Need to check for the user!
  // console.log(users);
  var user_keys = firebase.auth().users;
  for (i = 0; i < user_keys.length; i++) {
    var userID = user_keys[i];
    var userEmail = users[userID]['email'];
    if(userEmail == isNotEmail)
    {
      var itemName = items[itemID]['name'];
      var itemImg = items[itemID]['image'];
      var itemDescrip;
      if (items[itemID]['description'].length > 20){
        itemDescrip = items[itemID]['description'].substring(0, 30);
      }
      else {
        itemDescrip = items[itemID]['description'];
      }
      var itemQuantity = items[itemID]['quantity'];
      var itemTags = items[itemID]['tags'];
      createCard(itemID, itemName, itemImg, itemDescrip, itemQuantity, itemTags);
    }
  }
}
//BARTERHUB CODE USE FOR REFERENCES
/*
// FIREBASE CONFIG
var firebaseConfig = {
  apiKey: "",
  authDomain: "barterhub-3c37c.firebaseapp.com",
  databaseURL: "https://barterhub-3c37c.firebaseio.com",
  projectId: "barterhub-3c37c",
  storageBucket: "barterhub-3c37c.appspot.com",
  messagingSenderId: "1040823246711",
  appId: "1:1040823246711:web:7e8041584d5cd2fd7a0b72",
  measurementId: "G-ZD27G0MVXH"
};
// Initialize Firebase (this is standard, don't change these two lines)
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const docRef = firestore.collection("inventory");
// Array to hold all items that belong to the current user
// var item_keys = [];
var items = {};
var itemToDelete;
var prevNumCards = 0;
// Stores all the user's new item in the database
function addItemToDatabase()
{
  // Get all the data from the form
  var form = document.getElementById("add_item_form")
  var itemName = form.item_name.value;
  var url = form.item_url.value;
  var descrip = form.inputted_description.value;
  var quan = form.item_quantity.value;
  console.log(form.foodBox.checked);
  if(itemName == "" || url == "" || descrip == "" || quan == "")
  {
    alert("Error: provide a value for each field");
    return;
  }
  // Other info that will be sent to the database (sold and date posted):
  var id = Math.floor(Math.random()*1000000);
  var item_tags = [];
  var noneChecked = true;
  if(form.foodBox.checked) { item_tags.push('food'); noneChecked = false;}
  if(form.clothesBox.checked) { item_tags.push('clothes'); noneChecked = false;}
  if(form.furnitureBox.checked) { item_tags.push('furniture'); noneChecked = false;}
  if(form.appliancesBox.checked) { item_tags.push('appliances'); noneChecked = false;}
  if(form.artsBox.checked) { item_tags.push('arts'); noneChecked = false;}
  if(form.toysBox.checked) { item_tags.push('toys'); noneChecked = false;}
  if(form.booksBox.checked) { item_tags.push('books'); noneChecked = false;}
  if(form.technologyBox.checked) { item_tags.push('technology'); noneChecked = false;}
  if(form.toolsBox.checked) { item_tags.push('tools'); noneChecked = false;}
  if(form.servicesBox.checked) { item_tags.push('services'); noneChecked = false;}
  if(noneChecked)
  {
    alert("Error: provide a value for each field");
    return;
  }
  // Add a new document in collection "inventory"
  firestore.collection("inventory").doc('card_' + id.toString()).set({
      date_posted: firebase.firestore.Timestamp.now(),
      description: descrip,
      image: url,
      name: itemName,
      quantity: quan,
      sold: false,
      email: isNotEmail,
      tags: item_tags
  })
  .then(function() {
      console.log("Document successfully written!");
      successfulAdd(true);
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  // Create the corresponding card
  createCard('card_' + id, itemName, url, descrip, quan, tags);
}
// Creates a new card on the webpage containing the new item
function createCard(itemID, itemName, itemImg, itemDescrip, itemQuantity, itemTags)
{
  // Get all the info submitted by the modal form and create a card with all those attributes
  var container = document.getElementById('item_card_holder');
  var newCard = document.createElement('div');
  newCard.classList = 'card';
  var item_id = itemID;
  var card_id = item_id;
  var item_name = itemName;
  var item_img = itemImg;
  var description = itemDescrip;
  var item_tags = itemTags; // Items can have many tags or none -- have to add them!
  var tag_content = ``;
  if(item_tags.length != 0)
  {
    tag_content += `
    <br><br>`;
    for(var i = 0; i < item_tags.length; i++)
    {
      tag_content += `
      <span class="label ${item_tags[i]}">${item_tags[i]}</span>`;
    }
  }
  // May need to add the <div class="col-auto mb-3"> to keep it in format
  var content = `
  <div id="${card_id}" class="card" style="width: 20rem;">
    <img src="${item_img}" class="card-img-top" alt="${item_name}">
    <div class="card-body">
      <h5 class="card-title">${item_name}</h5>
      <p class="card-text"><b>Quantity: </b>${itemQuantity}</p>
      <p class="card-text">${description}</p>
      <input type="button" data-id="${card_id}" class="open-delete_item btn btn-outline-danger" data-toggle="modal" data-target="#delete_item" value="Remove Item"/>
      ${tag_content}
    </div>
  </div>
  `;
  container.innerHTML += content;
}
// Handler that deals with remove item calls
$(document).on("click", ".open-delete_item", function () {
     itemToDelete = $(this).data('id');
});
function removeCard()
{
  var elem = document.getElementById(itemToDelete);
  elem.parentNode.removeChild(elem);
  return false;
}
function removeItemFromDatabase()
{
  docRef.doc(itemToDelete).delete().then(function() {
      console.log("Document successfully deleted!");
      successfulAdd(true);
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  removeCard();
}
function successfulAdd(success)
{
  if(success)
  {
    location.reload();
  }
}
getRealTimeUpdates = function(callback){
  docRef.onSnapshot({
    includeMetadataChanges: true
  }, function (querySnapshot){
      querySnapshot.forEach(function(doc) {
          items[doc.id] = doc.data();
      });
      callback(items);
  });
}
function onLoad(items) {
  // TODO: Need to check for the user!
  // console.log(items);
  var item_keys = Object.keys(items);
  for (i = 0; i < item_keys.length; i++) {
    var itemID = item_keys[i];
    var itemEmail = items[itemID]['email'];
    if(itemEmail == isNotEmail)
    {
      var itemName = items[itemID]['name'];
      var itemImg = items[itemID]['image'];
      var itemDescrip;
      if (items[itemID]['description'].length > 20){
        itemDescrip = items[itemID]['description'].substring(0, 30);
      }
      else {
        itemDescrip = items[itemID]['description'];
      }
      var itemQuantity = items[itemID]['quantity'];
      var itemTags = items[itemID]['tags'];
      createCard(itemID, itemName, itemImg, itemDescrip, itemQuantity, itemTags);
    }
  }
}
getRealTimeUpdates(onLoad);
*/
