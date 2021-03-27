
import { useHistory } from "react-router-dom";

import { FirebaseContext } from '../../../../context/FirebaseContext'
import { PokemonContext } from '../../../../context/pokemonContext'

import { useContext, useState, useEffect } from "react";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";

import style from "./style.module.css";
import cn from "classnames";
const FinishPage = () => {
    const pokemonsContext = useContext(PokemonContext);
    const firebaseContext = useContext(FirebaseContext);
    // eslint-disable-next-line
    const [enemyPokemons, setEnemyPokemons] = useState(pokemonsContext.enemyPopemons)
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    const history = useHistory();

    const myCards = Object.values(pokemonsContext.pokemons);
    // eslint-disable-next-line
    const enemyCards = pokemonsContext.enemyPopemons;



    const handleEndGameClick = () => {
        if (selectedPokemon) {
            delete selectedPokemon.isSelected;

            firebaseContext.addPokenon(selectedPokemon, () => {
                pokemonsContext.onClearContext();
                history.push({ pathname: "/game/" });
            });
        } else {
            pokemonsContext.onClearContext();
            history.push({ pathname: "/game/" });
        }
    }

    const handleChangeActiveSelected = (id, isSelected) => {
        const copyState = enemyPokemons;
        // eslint-disable-next-line
        const newState = copyState.map((item, index) => {
            if (item.id === id) {
                item.isSelected = !isSelected;
                setSelectedPokemon(item);
            } else {
                item.isSelected = false;
            }
        })
        pokemonsContext.onEnemyPokemons(newState);
    };

    useEffect(() => {
        if (!myCards.length) {
            history.push({ pathname: "/game/" });
        }
    });

    return (
        <>
            <div className={style.flex}>
                {
                    myCards.map(({ id, name, img, type, values }) => (
                        <div
                            key={id}>
                            <PokemonCard
                                className={cn(style.card, style.noSelected)}
                                key={id}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={style.buttonWrap}>
                <h1>You {pokemonsContext.statusGame}</h1>
                <button
                    onClick={handleEndGameClick}
                // disabled={pokemonsContext.statusGame !== "WIN"}
                >END GAME</button></div>
            <div className={style.flex}>
                {
                    enemyPokemons.map(({ id, name, img, type, values, isSelected }) => (
                        <div
                            key={id}>
                            <PokemonCard
                                className={cn(style.card, {
                                    [style.noSelected]: pokemonsContext.statusGame !== "WIN",
                                    [style.isSelected]: isSelected
                                })
                                }
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={isSelected}
                                onChangeParentState={() => {
                                    if (pokemonsContext.statusGame === "WIN") {
                                        handleChangeActiveSelected(id, isSelected)
                                    }
                                }}
                            />
                        </div>

                    ))
                }
            </div>
        </>
    )
}
export default FinishPage;