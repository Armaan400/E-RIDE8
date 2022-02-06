import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBESF0q3DsheOwoR-EpDCDg6sth9vDSzSY",
  authDomain: "e-ride-28a36.firebaseapp.com",
  projectId: "e-ride-28a36",
  storageBucket: "e-ride-28a36.appspot.com",
  messagingSenderId: "89963207054",
  appId: "1:89963207054:web:a843a4e4047ae797ea2cdf"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
