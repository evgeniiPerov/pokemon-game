import React from 'react'


import cn from 'classnames'

import s from './style.module.css'

export default function Navbar({ onClickBurger, isOpen, bgActive = false }) {

    const handleClick = () => {
        onClickBurger && onClickBurger()
    }
    //className={s.root}
    return (
        <nav className={cn(s.root, { [s.bgActive]: bgActive })} >
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
          </p>
                <div onClick={handleClick} className={cn(s.menuButton, { [s.active]: isOpen })}>
                    <span />
                </div>
            </div>
        </nav >
    )
}
