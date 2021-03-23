import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDXKI40KqwkGh7ZYXZVutRuT4cEveECvM4",
    authDomain: "pokemon-game-934ee.firebaseapp.com",
    databaseURL: "https://pokemon-game-934ee-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-934ee",
    storageBucket: "pokemon-game-934ee.appspot.com",
    messagingSenderId: "877332519894",
    appId: "1:877332519894:web:48e6833f15f1d91b782277"
};

//Inicializa with config from doc firebase
firebase.initializeApp(firebaseConfig)

//export firebase consts
//using firebase database configs
export const fire = firebase
export const database = fire.database()
//export all 
export default database