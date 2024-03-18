import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM5vDnJ4r3dSuzielBAl4_vmte3Dfnt3s",
  authDomain: "citygel-31bde.firebaseapp.com",
  projectId: "citygel-31bde",
  storageBucket: "citygel-31bde.appspot.com",
  messagingSenderId: "8735051299",
  appId: "1:8735051299:web:a3b1655a31c88e463a6b96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth(app);

export default auth;
