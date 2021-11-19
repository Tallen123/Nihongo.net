import React from 'react'
import $ from 'jquery'

function Navbar() {
    $(document).ready(function(){
        $(document).mousemove(function(){
             if($("#Alphabetbtn:hover").length != 0){
                $('#AlphabetMenu').show()
            }
            if($("body:hover").length == 0){
                $('#AlphabetMenu').hide()
            }
        })
    })

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
                        <li><button className='btn'>Hiragana</button></li>
                        <li><button className='btn'>Katakana</button></li>
                        <li><button className='btn'>Kanji</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Navbar
