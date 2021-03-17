import React from 'react'

import MenuHeader from '../MenuHeader/MenuHeader'



import h from './header.module.css'

export default function Header({ title, desc, onClickButton }) {

    const handleClick = () => {
        console.log('<Header/>')
        onClickButton && onClickButton('game')
    }
    return (
        <header className={h.root}>
            <MenuHeader />
            <div className={h.forest}></div>
            <div className={h.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}
