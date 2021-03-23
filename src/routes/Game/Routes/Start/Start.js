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
    }, [])


    const handleChangeSelected = (key) => {
        const pokemon = { ...pokemons[key] }
        pokemonsContext.onSelectedPokemons(key, pokemon)
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }
    const handleStartGameClick = () => {
        history.push('/game/board')
    }

    return (
        <div className={s.root}>
            <div style={{ textAlign: "center" }}>
                <button
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                >
                    Start Game
                  </button>

            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => <PokemonCard
                        key={key}
                        className={s.card}
                        keyId={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={true}
                        isSelected={selected}
                        minimize
                        handleClickChange={() => {
                            if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                handleChangeSelected(key)
                            }
                        }}
                    />)
                }
            </div>
        </div >
    )
}