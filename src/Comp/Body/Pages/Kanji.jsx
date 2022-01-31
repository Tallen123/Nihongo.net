import React from 'react';
import $ from "jquery"
import KanjiSearch from '../../Header/KanjiSearch';
function Kanji() {

  function JLTPChange(){
    var JLPTVal = document.getElementById("JLPT");
    var val = JLPTVal.value
    var num = String(val).slice(String(val).length -1,String(val).length)
    console.log(num)
  }

  function GRADEChange(){
    var GRADEVal = document.getElementById("Grades");
    var val = GRADEVal.value
    var num = String(val).slice(String(val).length -1,String(val).length)
    console.log(num)
  }

  ApiGrade(1)

  function ApiGrade(Grade){
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=" + Grade,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        "x-rapidapi-key": "f63b1552a6msh5c92b36f426e39fp1dfdcfjsn43b574ea21ae"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      //var content = document.getElementById("Content")
    });
  }
  return (
    <div className='Pannel'>
      <KanjiSearch GRADEChange={GRADEChange} JLTPChange={JLTPChange}/>
      <div id='Content'>

      </div>
    </div>
    );
}

export default Kanji;
