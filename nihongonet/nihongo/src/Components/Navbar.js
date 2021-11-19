import React from 'react'
import $ from 'jquery'

function Navbar() {
    $(document).ready(function(){
        $(document).mousemove(function(){
             if($("#Alphabetbtn:hover").length !== 0){

                var Alphabetbtn = $("#Alphabetbtn:hover")
                var AlphabetMenu = document.getElementById("AlphabetMenu").style

                AlphabetMenu.left = Alphabetbtn.position().left - 5 + "px"
                $('#AlphabetMenu').show()
            }
            if($("body:hover").length === 0){
                $('#AlphabetMenu').hide()
            }
            if($("#homebtn:hover").length === 1){
                $('#AlphabetMenu').hide()
            }
        })
    })

    return (
    <div>
        <div>
            <div className='inline m-3'>
                <button id='homebtn' className='btn'>Home</button>
            </div>
            <div className='inline m-3'>
                <button id='Alphabetbtn' className='btn' >Alphabet</button>
                <div hidden id='AlphabetMenu' className='AlphabetMenu'>
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
