import React from 'react'

function Header({text}) {
    return (
        <div>
            <h1 style={{backgroundColor:"red"}} className="rounded">{text}</h1>
        </div>
    )
}

export default Header
