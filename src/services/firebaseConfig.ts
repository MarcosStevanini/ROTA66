import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB6JZ4wfb_MZNTOQZ928_7UWJV0ug5-8ps",
  authDomain: "approta66-630a7.firebaseapp.com",
  projectId: "approta66-630a7",
  storageBucket: "approta66-630a7.appspot.com",
  messagingSenderId: "355377107221",
  appId: "1:355377107221:web:af5ee65e5ac5833a7c991c",
  measurementId: "G-3RPWJ482JQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);

