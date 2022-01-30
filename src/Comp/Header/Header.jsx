import React from 'react';
import NavBar from './NavBar';
import KanjiSearch from './KanjiSearch';

function Header({Hidden,Name,KanjiClass,KatakanaClass,HiraganaClass,HomeClass,KanjiClick,HiraganaClick,KatakanaClick,HomeClick, SettingsClick,SettingsClass}) {
    return (
        <header>
            <div className="Header">
                <h1 className='HeaderText'>{Name}</h1>
                <div className='boundery'>
                    <br />
                    <NavBar SettingsClass={SettingsClass} SettingsClick={SettingsClick} KanjiClass={KanjiClass} KanjiClick={KanjiClick} HomeClick={HomeClick} HomeClass={HomeClass} HiraganaClick={HiraganaClick} HiraganaClass={HiraganaClass} KatakanaClass={KatakanaClass} KatakanaClick={KatakanaClick}/>
                    <KanjiSearch hidden={Hidden}/>
                </div>
            </div>
        </header>
    );
}
export default Header;
