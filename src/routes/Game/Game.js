import React from 'react'

export default function GamePage({ onChangePage }) {
    const handleClickHome = () => {
        console.log('<GamePage />')
        onChangePage && onChangePage('app')
    }
    return (
        <div>
            This is game
            <button onClick={handleClickHome}>Return To Home</button>
        </div>
    )
}
