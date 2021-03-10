import React from 'react'
import f from './footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={f.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}
