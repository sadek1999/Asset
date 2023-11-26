// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC-SS_3xIqu3Y5BAoi2xPoJayD0Jl5EvNI",
  authDomain: "asset-d91a1.firebaseapp.com",
  projectId: "asset-d91a1",
  storageBucket: "asset-d91a1.appspot.com",
  messagingSenderId: "263583408957",
  appId: "1:263583408957:web:2237db5b577ebdc6065b54"


  // apiKey:import.meta.envVITE_apiKey ,
  // authDomain:import.meta.envVITE_authDomain ,
  // projectId:import.meta.envVITE_projectId ,
  // storageBucket:import.meta.envVITE_storageBucket ,
  // messagingSenderId:import.meta.envVITE_messagingSenderId ,
  // appId:import.meta.envVITE_appId ,
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export default auth;