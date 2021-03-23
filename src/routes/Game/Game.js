import React, { useState } from 'react'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import StartPage from './Routes/Start/Start'
import BoardPage from './Routes/Board/Board'
import FinishPage from './Routes/Finish/Finish'
import { PokemonContext } from '../../context/pokemonContext'
const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const match = useRouteMatch();

    const handleSelectedPokemons = (key, pokemon) => {
        // console.log('selectedPokemons', selectedPokemons)
        //   console.log('key', key)
        // console.log('pokemon', pokemon)

        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState }
                delete copyState[key]

                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }
    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};
export default GamePage