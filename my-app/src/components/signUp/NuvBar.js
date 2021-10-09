import React from "react";
import { FaBars } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';

export default function NuvBar(){
    return(
        <nav className='navigation'>
        <div className='icons'>
        <div className='icon'><FaBars  /></div>
        <div className='icon'><FaHome /></div>
        <div className='icon'><FaUser /></div>
        <div className='icon'><FaStar /></div>
        <div className='icon'><FaClipboard /></div>
        <div className='icon'><FaCog /></div>
        </div>
        </nav>
    )
}