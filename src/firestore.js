import firebase from 'firebase';

 const config = {
   apiKey: "AIzaSyC7GyDo5iS1sC6OQEyBfF9TPsIDH3tyv-s",
   authDomain: "enye-challenge.firebaseapp.com",
   databaseURL: "https://enye-challenge.firebaseio.com",
   projectId: "enye-challenge",
   storageBucket: "enye-challenge.appspot.com",
   messagingSenderId: "658858403152",
   appId: "1:658858403152:web:4b1ec75ab6f12fa70c3855",
   measurementId: "G-XGXKMCRYYS"
 }

 const firebaseApp = firebase.initializeApp(config);
 const db = firebaseApp.firestore()

 export default  db ;