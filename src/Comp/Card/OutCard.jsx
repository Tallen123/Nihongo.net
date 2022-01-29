import React from 'react';
import InnerCard from './InnerCard';

function OutCard({TopText,BottomText}) {
  return(
      <div className='OuterCard'>
          <InnerCard  TopText={TopText} BottomText={BottomText}/>
      </div>
    );
}

export default OutCard;