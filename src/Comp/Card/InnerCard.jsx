import React from 'react';
import { useSpeechSynthesis } from "react-speech-kit";

function InnerCard({TopText,BottomText}) {
  const { speak,voices } = useSpeechSynthesis();

  return(
    <div onClick={() => speak({text:TopText,voice:voices[2],rate:"0.7"})} className='InnerCard'>
      <div>
        <p>{TopText}</p>
      </div>
      <hr />
      <div>
        <p>{BottomText}</p>
      </div>
    </div>
    );
}

export default InnerCard;
