import React from "react";
import './NuvBar.css'
import { FaBars } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import {Link} from 'react-router-dom'


export default function NuvBar(){
    return(
        <nav className='navigation'>
        <div className='icons'>
        <div className='icon'><FaBars  /></div>
        <Link to='/home'><div className='icon'><FaHome /></div></Link>
        <Link to='/signup'><div className='icon'><FaUser /></div></Link>
        <Link to='/favorites'><div className='icon'><FaStar /></div></Link>
        <Link to='/notes'><div className='icon'><FaClipboard /></div></Link>
        <Link to='/settings'><div className='icon'><FaCog /></div></Link>
        </div>
        </nav>
    )
}