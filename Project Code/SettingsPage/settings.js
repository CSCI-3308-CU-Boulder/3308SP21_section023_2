var admin = require("firebase-admin");

var serviceAccount = require("./roomble-5fbeb-firebase-adminsdk-aj92v-29c7a9fe8f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://roomble-5fbeb-default-rtdb.firebaseio.com"
});