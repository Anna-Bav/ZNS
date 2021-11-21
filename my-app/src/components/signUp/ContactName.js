
import React from 'react';
import './ContactName.css'
import Points_select from './Points_select'

export default function ContactName(props){
    const { setPopupPoints, popupPoints} = props;
    
    return(

 <div className='contactName'>
      {popupPoints && <div><Points_select setPopupPoints={setPopupPoints} popupPoints={popupPoints}/></div>}
    <div className='name_text'>
        <h2>Eleanor Pena</h2>
        <h5>Frontend developer at PTHTS</h5>
    </div>
    <div className='points'>
    <img onClick={() => setPopupPoints(!popupPoints)} 
    src='/images/points.svg'/>
    </div>
</div>
    )
}


