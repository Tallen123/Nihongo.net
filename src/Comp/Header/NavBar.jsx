import React from 'react';

function NavBar({KanjiClass,KatakanaClass,HiraganaClass,HomeClass,KanjiClick,HiraganaClick,KatakanaClick,HomeClick, SettingsClick,SettingsClass}) {
  return (
    <div>
        <ol className='NavBar' id="NavBar">
            <li><button id='btn1' onClick={HomeClick} className={HomeClass}>HOME</button></li>
            <li><button id='btn2' onClick={SettingsClick} className={SettingsClass}>SETTINGS</button></li>
            <li><button id='btn3' onClick={HiraganaClick} className={HiraganaClass}>HIRAGANA</button></li>
            <li><button id='btn4' onClick={KatakanaClick} className={KatakanaClass}>KATAKANA</button></li>
            <li><button id='btn5' onClick={KanjiClick} className={KanjiClass}>KANJI</button></li>
        </ol>
    </div>
  );
}

export default NavBar;
