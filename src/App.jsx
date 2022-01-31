import './App.css';
import Header from './Comp/Header/Header';
import Home from './Comp/Body/Pages/Home';
import Hiragana from './Comp/Body/Pages/Hiragana'
import Katakana from './Comp/Body/Pages/Katakana'
import Kanji from './Comp/Body/Pages/Kanji'
import Settings from './Comp/Body/Pages/Settings';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {

    function HomePage(){
        ReactDOM.render(
            <div>
                <React.StrictMode>
                <Header Name={"Nihongo.net"}   HomeClass={"Active"} SettingsClick={SettingsPage}  HomeClick={HomePage} HiraganaClick={HiraganaPage} KatakanaClick={KatakanaPage} KanjiClick={KanjiPage}/>
                <Home/>
                </React.StrictMode>
            </div>,
            document.getElementById('root')
        );
    }
    

    function HiraganaPage()
    {
        ReactDOM.render(
            <div>
                <React.StrictMode>
                <Header Name={"Hiragana"}   HiraganaClass={"Active"}  SettingsClick={SettingsPage} HomeClick={HomePage} HiraganaClick={HiraganaPage} KatakanaClick={KatakanaPage} KanjiClick={KanjiPage}/>
                <Hiragana/>
                </React.StrictMode>
            </div>,
            document.getElementById('root')
          );
    }
    function KatakanaPage()
    {
        ReactDOM.render(
            <div>
                <React.StrictMode>
                <Header Name={"Katakana"}   KatakanaClass={"Active"} SettingsClick={SettingsPage}  HomeClick={HomePage} HiraganaClick={HiraganaPage} KatakanaClick={KatakanaPage} KanjiClick={KanjiPage}/>
                <Katakana/>
                </React.StrictMode>
            </div>,
            document.getElementById('root')
          );
    }
    function KanjiPage()
    {
        ReactDOM.render(
            <div>
                <React.StrictMode>
                <Header Name={"Kanji"} KanjiClass={"Active"} Hidden={false} SettingsClick={SettingsPage}  HomeClick={HomePage} HiraganaClick={HiraganaPage} KatakanaClick={KatakanaPage} KanjiClick={KanjiPage}/>
                <Kanji/>
                </React.StrictMode>
            </div>,
            document.getElementById('root')
          );
    }
    function SettingsPage()
    {
        ReactDOM.render(
            <div>
                <React.StrictMode>
                <Header Name={"Settings"}   SettingsClass={"Active"} SettingsClick={SettingsPage} HomeClick={HomePage} HiraganaClick={HiraganaPage} KatakanaClick={KatakanaPage} KanjiClick={KanjiPage}/>
                <Settings/>
                </React.StrictMode>
            </div>,
            document.getElementById('root')
          );
    }
    
    var cookie = document.cookie;
    var firstIndex = cookie.indexOf("#");
    var SecondIndex = cookie.indexOf("S");
    var Color = cookie.slice(firstIndex,SecondIndex);
    var body = document.getElementById("Body");
    body.style.backgroundColor = Color;
    var Style = document.getElementById("Style");
    Style.innerHTML = "button:hover{background:" + Color + "}" + 
    "\n" + ".Active{background:" + Color + "}";

    return ( 
        <div className = "App">
            <React.StrictMode>
            <Header Name={"Nihongo.net"} HomeClass={"Active"} SettingsClick={SettingsPage}  HomeClick={HomePage} HiraganaClick={HiraganaPage} KatakanaClick={KatakanaPage} KanjiClick={KanjiPage}/>
            <Home/>
            </React.StrictMode>
        </div>
    );
}

export default App;