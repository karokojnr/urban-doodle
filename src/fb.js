import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDm7Muf7UsV_1Uina3TG8uMR_SNhmL62GY",
    authDomain: "vue-karokojnr.firebaseapp.com",
    databaseURL: "https://vue-karokojnr-default-rtdb.firebaseio.com",
    projectId: "vue-karokojnr",
    storageBucket: "vue-karokojnr.appspot.com",
    messagingSenderId: "216639228379",
    appId: "1:216639228379:web:2923584a06b3cd4608fffe",
    measurementId: "G-ZL89LNGJ7M"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
