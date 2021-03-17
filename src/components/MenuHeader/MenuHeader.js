import React, { useState } from 'react'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'

export default function MenuHeader() {
    const [isActive, setActive] = useState(false)
    //const [isActive, setActive] = useState('active')

    const handleClickActive = () => {

        setActive(prev => !prev)
    }
    return (
        <>
            return <Navbar onClickAnchor={handleClickActive} isActive={isActive} />
            <Menu isActive={isActive} />
        </>

    )

}
