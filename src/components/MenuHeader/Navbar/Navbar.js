import React from 'react'


import cn from 'classnames'

import s from './style.module.css'

export default function Navbar({ onClickAnchor, isActive }) {

    const handleClick = () => {
        onClickAnchor && onClickAnchor()
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
          </p>
                <a href='#ancor' onClick={handleClick} className={cn(s.menuButton, { [s.active]: isActive })}>
                    <span />
                </a>
            </div>
        </nav >
    )
}
