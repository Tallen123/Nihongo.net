import React from 'react'

function Navbar() {
    return (
    <div>
        <div >
            <div className='inline m-3'>
                <button className='hover:bg-red-800 rounded p-1'>Home</button>
            </div>
            <div className='inline m-3'>
                <button className='hover:bg-red-800 rounded p-1' >Alphabet</button>
            </div>
            <div className='inline m-3'>
                <button className='hover:bg-red-800 rounded p-1'>Placeholder</button>
            </div>
        </div>
    </div>
    )
}

export default Navbar
