import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAh-p-V04CEGmL22MsnRCCsl956XjaKFSo",
    authDomain: "meri-todolist.firebaseapp.com",
    projectId: "meri-todolist",
    storageBucket: "meri-todolist.appspot.com",
    messagingSenderId: "234853072048",
    appId: "1:234853072048:web:797c1f79046e619f3e4f75",
    measurementId: "G-EXEMC7H3PL"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }