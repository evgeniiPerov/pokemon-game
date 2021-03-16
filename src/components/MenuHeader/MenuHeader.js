import React, { useState } from 'react'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'

export default function MenuHeader() {
    const [isActive, setActive] = useState('active')

    const handleClickActive = (isActive) => {
        console.log('<MenuHeader/>')
        setActive(isActive)
    }
    switch (isActive) {
        case 'active':
            return <Navbar onClickAnchor={handleClickActive} isActive={isActive} />

        case 'deactive':
            return <Menu onClickDiv={handleClickActive} isActive={isActive} />

        default:
            return <Navbar />

    }

}
