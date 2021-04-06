var firebaseConfig {
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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

document.addEventListener("DOMContentLoaded", event=>
{
  const app = firebase
  console.log(app)
  //checking if firebase is available.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = '../homeScreen/homepage.html';
    }
  });
});

function emailLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)

          .then(result =>
            {
              const user = result.user;
              document.write(`Hello ${user.displayName}`);
              //then upload photos.
              window.location = '../homeScreen/homepage.html';


              console.log(user)
            })
            .catch(console.log)
}
