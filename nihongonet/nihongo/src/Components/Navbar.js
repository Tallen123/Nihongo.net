import React from 'react'
import $ from 'jquery'

function Navbar() {
    var anim = false
    $(document).ready(function(){
        $(document).mousemove(function(){
             if($("#Alphabetbtn:hover").length !== 0){

                var Alphabetbtn = $("#Alphabetbtn:hover")
                var AlphabetMenu = document.getElementById("AlphabetMenu")

                AlphabetMenu.style.left = Alphabetbtn.position().left - 10 + "px"
                $('#AlphabetMenu').show()
                if(anim === false){
                    AlphabetMenu.style.animationPlayState = 'runnning'
                    anim = true
                }
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
        <div className='p-1.5'>
            <div className='inline m-3'>
                <button id='homebtn' className='btn text-3xl rounded-lg p-2 mb-2'>Home</button>
            </div>
            <div className='inline m-3'>
                <button id='Alphabetbtn' className='btn text-3xl rounded-lg p-2 mb-2' >Alphabet</button>
                <div hidden id='AlphabetMenu' className='AlphabetMenu'>
                    <ul>
                        <li><button className='btn text-3xl rounded-lg p-2 mb-2'>Hiragana</button></li>
                        <li><button className='btn text-3xl rounded-lg p-2 mb-2'>Katakana</button></li>
                        <li><button className='btn text-3xl rounded-lg p-2 mb-2'>Kanji</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Navbar
