import React, {useState} from 'react'
import './Points_select.css'

export default function Points_select(){
    // const {popupPoints ,setPopupPoints} = props
    return(
        <div className='points_select'>
            <div className='point'>
                <img src='/images/pensil.svg'/>
                <div className='point_text'>Edit</div>
            </div>
            <div className='point'>
                <img src='/images/change.svg'/>
                <div className='point_text'>Change history</div>
            </div>
            <div className='point'>
                <img src='/images/share.svg'/>
                <div className='point_text'>Share contact</div>
            </div>
            <div className='point'>
                <img src='/images/delete.svg'/>
                <div className='point_text'>Delete contact</div>
            </div>
        </div>
    )
}