import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PokemonCard from '../../../../components/PokemonCard/PokemonCard'
import { FirebaseContext } from '../../../../context/FirebaseContext'
import { PokemonContext } from '../../../../context/pokemonContext'



import s from './style.module.css'



export default function StartPage() {
    const firebase = useContext(FirebaseContext)
    //console.log('firebase', firebase)
    const pokemonsContext = useContext(PokemonContext)
    // console.log('context', pokemonContext)
    const history = useHistory()

    const [pokemons, setPokemons] = useState({})



    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })

        return () => firebase.offPokemonSoket()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firebase])


    const handleChangeActiveSelected = (key) => {
        const pokemon = { ...pokemons[key] }
        pokemonsContext.onSelectedPokemons(key, pokemon);
        if (pokemons[key]) {
            const copyState = { ...pokemons };
            copyState[key]["selected"] = !copyState[key]["selected"]

            setPokemons(copyState);
        }
    };
    const handleStartGame = () => {
        history.push('/game/board');
    }

    return (
        <div className={s.root}>
            <div style={{ textAlign: "center", margin: "0 0 20px 0" }}>
                <button
                    onClick={handleStartGame}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5 ? 'disabled' : ''}>
                    Start game
            </button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, { keyId, name, img, id, type, values, selected }]) =>
                        <PokemonCard
                            key={key}
                            keyId={key}
                            name={name}
                            img={img}
                            id={id}
                            type={type}
                            values={values}
                            isActive
                            isSelected={selected}
                            handleClickChange={() => {
                                if (Object.keys(pokemonsContext.pokemons).length < 5 || selected)
                                    handleChangeActiveSelected(key, selected);
                            }}
                            minimize={false}
                            className={s.card}
                        />)
                }
            </div>
        </div>
    )
}