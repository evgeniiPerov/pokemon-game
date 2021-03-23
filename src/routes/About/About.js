import React, { useContext } from 'react'
import { TestContext } from '../../context/TestContext'



export default function AboutPage() {


    const themeContext = useContext(TestContext)
    console.log('themeContext', themeContext)
    const handlerClick = () => {
        themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div>

            <p>About Page </p>
            <button onClick={handlerClick}>
                Change Theme
        </button>
        </div>
    )
}
