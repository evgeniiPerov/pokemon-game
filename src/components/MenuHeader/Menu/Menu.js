import React from 'react'
import cn from 'classnames'

import s from './style.module.css'

export default function Menu({ onClickDiv, isActive }) {

    const handleClick = () => {
        console.log('<Menu/>')
        onClickDiv && onClickDiv('active')
    }
    // const active = isActive ? s.active : s.deactive
    //className="menuContainer active/deactive"
    return (
        <div onClick={handleClick} className={cn(s.menuContainer, { [s.active]: isActive, [s.deactive]: !isActive })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
