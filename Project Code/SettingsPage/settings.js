var admin = require("firebase-admin");

var serviceAccount = require("./roomble-5fbeb-firebase-adminsdk-aj92v-29c7a9fe8f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://roomble-5fbeb-default-rtdb.firebaseio.com"
});

console.log("JS accessed");


//var slider = document.getElementById("rent");
//var output = document.getElementById("value");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
}


function outputUpdate(rent){
  document.querySelector('#rentOutput').value = rent;
}

function outputUpdate2(age){
  document.querySelector('#ageOutput').value = age;
}
