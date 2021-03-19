import React from 'react'

import { Link } from 'react-router-dom'

import cn from 'classnames'

import s from './style.module.css'

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACNT',
        to: '/contact',
    },

]

export default function Menu({ isOpen, onClickLink }) {

    const closeMenu = () => {

        onClickLink && onClickLink()
    }

    //className="menuContainer active/deactive"
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isOpen === true,
            [s.deactive]: isOpen === false
        })}>
            <div className={s.overlay} />
            <div>
                <ul>
                    {
                        MENU.map(({ title, to }, index) => (
                            <li key={index}>
                                <Link to={to} onClick={closeMenu}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}
