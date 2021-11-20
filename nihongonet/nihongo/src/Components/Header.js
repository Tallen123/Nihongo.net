import React from 'react'
import Navbar from './Navbar'
function Header({text}) {
    return (
        <div className='Background'>
            <h1 className="text-4xl">{text}</h1>
            <Navbar/>
        </div>
    )
}

export default Header
