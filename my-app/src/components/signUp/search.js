import React  from "react";
import './search.css'

import { FaCog } from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';

export default function Search(){
    return(
<div className='search'>
        <div><img className='av' src='/images/avatar.png'/></div>
        <div><h3 className='name'>Tomasz Kowalski</h3></div>
        <div className='inputSearch'>
            {/* <img classNme='imgSearch' src='/images/search.png'/> */}
            <FaSearch className='imgSearch'/>
        <input className='fieldSearch' type='text' placeholder="Search people, notes, documents, events, tags"/>
        {/* <img className='imgSettings' src='/images/settings.png'/>  */}
        <FaCog className='imgSettings'/>
        </div>
    </div>
    )
}