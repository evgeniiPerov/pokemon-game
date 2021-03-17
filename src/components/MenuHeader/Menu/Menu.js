import React from 'react'
import cn from 'classnames'

import s from './style.module.css'

export default function Menu({ isActive }) {
    const menuList = ['welcome', 'game', 'about', 'contact'];
    const menuItems = menuList.map((name) => {
        return (
            <li>
                <a href={"#" + name}>
                    {name.toUpperCase()}
                </a>
            </li>
        )
    }
    );

    const activeStyle = isActive ? [s.active] : [s.deactive]
    //className="menuContainer active/deactive"
    return (
        <div className={cn(s.menuContainer, activeStyle)}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {menuItems}
                </ul>
            </div>
        </div>
    )
}
