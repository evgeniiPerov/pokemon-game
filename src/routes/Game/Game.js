import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

import database from '../../service/firebase'

import s from './style.module.css'


export default function GamePage() {

    const [pokemons, setPokemons] = useState({})



    useEffect(() => {
        databasePokemons()
    }, [])

    //pokemons from database
    const databasePokemons = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }

    // Формула дом задания + формула с доков firebase 
    const handleClickChange = (keyId, id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (item[0] === keyId) {
                    pokemon.active = true;
                    database.ref('pokemons/' + keyId).update({
                        active: pokemon.active,
                    }, (error) => {
                        if (error) {
                            console.log("update error!")
                        }
                        else {
                            console.log("update complited!")
                        }
                    })
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    }
    //Resert all cards 
    const handleResetCardsClick = () => {
        let check = null;
        // eslint-disable-next-line array-callback-return
        Object.entries(pokemons).map(([key, { active }]) => {
            if (active === true) {
                if (check === null)
                    check = false;
                database.ref('pokemons/' + key).update({
                    active: false,
                }, (error) => {
                    if (error) {
                        check = true;
                        console.log("Error save reset data!");
                    }
                    else {
                        console.log("Reseted data saved!");
                    }
                })
            }
        }
        )
        if (!check) {
            databasePokemons();
        }
    }

    const handleAddCardClick = () => {
        const obj = pokemons;
        //klici objektu pokemons
        const keys = Object.keys(pokemons);
        // var newPostKey = firebase.database().ref().child('posts').push().key;
        // updates['/posts/' + newPostKey] = postData;
        const newKey = database.ref().child('pokemons').push().key;
        //set - add new obj v databaze Posledni!
        database.ref('pokemons/' + newKey).set(obj[keys[keys.length - 1]]);
        databasePokemons();
    }


    const history = useHistory()
    const handleClickHome = () => {
        history.push('/home')
    }
    return (
        <div className={s.root}>
            <div style={{ textAlign: "center" }}>
                <button onClick={handleResetCardsClick}>
                    Reset Cards
                  </button>
                <button onClick={handleAddCardClick}>
                    Add Card
            </button>
                <button onClick={handleClickHome}>
                    Return To Home
                    </button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) => <PokemonCard
                        key={key}
                        keyId={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        handleClickChange={handleClickChange}
                        isActive={active}
                    />)
                }
            </div>
        </div >
    )
}
