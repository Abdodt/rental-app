// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQrCu_9LK7mu-R5KUDEEezoQhzdn47l2k",
  authDomain: "rentalapp-e29ba.firebaseapp.com",
  projectId: "rentalapp-e29ba",
  storageBucket: "rentalapp-e29ba.appspot.com",
  messagingSenderId: "283177433574",
  appId: "1:283177433574:web:7f4bf624ad933e31b3fe27",
  measurementId: "G-BMVCLXXLLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;