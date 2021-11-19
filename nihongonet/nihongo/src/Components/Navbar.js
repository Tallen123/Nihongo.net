import React from 'react'

function Navbar() {
    return (
    <div>
        <div >
            <div className='inline m-3'>
                <button className='btn'>Home</button>
            </div>
            <div className='inline m-3'>
                <button id='Alphabetbtn' className='btn' >Alphabet</button>
                <div hidden id='AlphabetMenu'>
                    <ul>
                        <li>Hiragana</li>
                        <li>Katakana</li>
                        <li>Kanji</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar
