import React from 'react'
import Navbar from './Navbar'
function Header({text}) {
    return (
        <div id='NameDiv'>
            <h1 className="Name">{text}</h1>
            <Navbar/>
        </div>
    )
}

export default Header
