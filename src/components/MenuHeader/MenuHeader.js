import React, { useState } from 'react'

import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'

export default function MenuHeader({ bgActive }) {
    const [isOpen, setOpen] = useState(null)



    const handleClickActive = () => {

        setOpen(prev => !prev)
    }
    return (
        <>
            <Menu isOpen={isOpen} onClickLink={handleClickActive} />
            <Navbar onClickBurger={handleClickActive} isOpen={isOpen} bgActive={bgActive} />
        </>

    )

}
