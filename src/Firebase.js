import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVlCrCjN6aNPwrKizD9-q3CWe3oCJcaeQ",
  authDomain: "ecommerce-site-1f68c.firebaseapp.com",
  databaseURL: "https://ecommerce-site-1f68c.firebaseio.com",
  projectId: "ecommerce-site-1f68c",
  storageBucket: "ecommerce-site-1f68c.appspot.com",
  messagingSenderId: "781477595927",
  appId: "1:781477595927:web:44bb0ec57b77898ca3c552",
});

const auth = firebase.auth();

export { auth };
