import {initializeApp} from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAcnQrWp5dfkVF_gIhQL9zvUC8ppfgOfEg",
    authDomain: "realtime-projects.firebaseapp.com",
    projectId: "realtime-projects",
    storageBucket: "realtime-projects.appspot.com",
    messagingSenderId: "913048248123",
    appId: "1:913048248123:web:cfc4a8ff99ef6ebef5a11e",
    measurementId: "G-FF12XC74C6"
  };

  // App initialization
const app= initializeApp(firebaseConfig);


// Database creation 
const db= getFirestore();
const RecCollectionRef= collection(db, "reccollection");


// storage creation

 const projectStorage= getStorage(); 


export {app,db, RecCollectionRef, projectStorage};
