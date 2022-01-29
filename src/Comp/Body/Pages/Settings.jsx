import React from 'react';

function Settings() {

  function Reset(){
    document.cookie= "Color=navy" +"SameSite=none; Secure";
    var body = document.getElementById("Body");
    body.style.backgroundColor = "navy"
    var Style = document.getElementById("Style");
    var btn = "button:hover{background:navy}";
    var active = ".Active{background:navy}"
    Style.innerHTML =  + btn + active
  }


  function ChangeBackGround()
  {
    var col = document.getElementById("Color")
    document.cookie= "Color=" + col.value +"SameSite=none; Secure";
    var body = document.getElementById("Body");
    body.style.backgroundColor = col.value
    var Style = document.getElementById("Style");
    var color = col.value.toString()
    var btn = "button:hover{background:" + color + "}";
    var active = ".Active{background:" + color + "}"
    Style.innerHTML =  + btn + active
  }
  return (
  <div>
      <div className='Pannel'>

        <br /><br />

        <input type="color" name="" onChange={ChangeBackGround} id="Color" />
        <h1>BackGround & button Color</h1>
        <p>Refresh page to see full results</p>

        <br />
        
        <p>Click reset to reset Color to default</p>

        <br />
        <button onClick={Reset} style={{width:"fit-content",padding:"10px"}}>Reset</button>
        
        <br /><br />
      </div>
      
  </div>
  );
}

export default Settings;
