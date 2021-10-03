import React from 'react'
import './SignUp.css'
// import { farBars } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { farBars } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';

export default function SignUp(){
    return(

    <div>
        <nav className='navigation'>
        <div className='icons'>
        <FaBars />
        <FaHome />
        <FaUser />
        <FaStar />
        <FaClipboard />
        <FaCog />
        </div>

        </nav>
    </div>
    )
}