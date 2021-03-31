import React, { useState } from 'react'
import PokemonCard from '../../../../../../components/PokemonCard/PokemonCard'

import cn from 'classnames'
import s from './style.module.css'

export const PlayerBoard = ({ cards, onClickCard, player }) => {
    const [isSelected, setSelected] = useState(null)
    return (

        <>
            {
                cards.map((item) => (
                    <div className={cn(s.cardBoard, {
                        [s.selected]: isSelected === item.id
                    })}
                        onClick={() => {
                            setSelected(item.id)
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            })
                        }}
                    >
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            isActive
                            minimize
                        />
                    </div>
                ))
            }
        </>
    )
}
