import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ErrorPage() {

    const history = useHistory()
    const handleClickHome = () => {
        history.push('/home')
    }
    return (
        <div>

            <p>About Page </p>
            <button onClick={handleClickHome}>Return To Home</button>
        </div>
    )
}
