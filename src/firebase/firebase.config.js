// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3Pd1XcyLCTkRmyvw56VcDyhfDUC-sFqQ",
    authDomain: "simple-ecommerce-7a91c.firebaseapp.com",
    projectId: "simple-ecommerce-7a91c",
    storageBucket: "simple-ecommerce-7a91c.appspot.com",
    messagingSenderId: "387046133690",
    appId: "1:387046133690:web:0acbff6021a103492b1783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;