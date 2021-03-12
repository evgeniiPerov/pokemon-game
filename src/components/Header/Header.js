import React from 'react'
import h from './header.module.css'

export default function Header({ title, desc }) {
    return (
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </header>
    )
}
