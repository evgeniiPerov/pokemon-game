import React from 'react'
import { useHistory } from 'react-router-dom'


import h from './header.module.css'

export default function Header({ title, desc }) {
    const history = useHistory()

    const handleClick = () => {
        history.push('/game')
    }
    return (
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.silhouette}></div>
            <div className={h.moon}></div>

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
