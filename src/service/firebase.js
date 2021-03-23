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

class Firebase {
    constructor() {


        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }
    //off soket
    offPokemonSoket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon)
    }

    // addPokemon = (data, cb) => {
    //     const newKey = this.database.ref().child('pokemons').push().key;
    //     //set
    //     this.database.ref('pokemons/' + newKey).set(data).then(() => cb())
    // }
    addPokemon = (data) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        //set
        this.database.ref('pokemons/' + newKey).set(data)
    }
}
//export firebase consts
//using firebase database configs

//export all 
export default Firebase