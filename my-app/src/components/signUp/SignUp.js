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
import {FaSearch} from 'react-icons/fa';
import {FaSlidersV} from 'react-icons/fa';



export default function SignUp(){
    return(

    <div className='page'>
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
        <div className='main'>
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
        <div className='content'>
            <div className='contacts'>
                <div className='me'>
                    <img src='/images/me_cut.png'/>
                    <h5>Eleanor Pena</h5>
                    <FaStar className='myStar' />
                </div>

                <div className='contact'>
                    <img src='/images/1.png'/>
                    <h5>Wade Warren</h5>
                </div>
                <div className='contact'>
                <img src='/images/2.png'/>
                    <h5>Esther Howard</h5>
                </div>
                <div className='contact'>
                <img src='/images/3.png'/>
                    <h5>Cameron Williamson</h5>
                </div>
                <div className='contact'>
                <img src='/images/4.png'/>
                    <h5>Leslie Alexander</h5>
                </div>
                <div className='contact'>
                <img src='/images/5.png'/>
                    <h5>Jenny Wilson</h5>
                </div>
                <div className='contact'>
                <img src='/images/6.png'/>
                    <h5>Robert Fox</h5>
                </div>
                <div className='contact'>
                <img src='/images/7.png'/>
                    <h5>Jacob Jones</h5>
                </div>
                <div className='contact'>
                <img src='/images/8.png'/>
                    <h5>Kristin Watson</h5>
                </div>
                <div className='contact'>
                <img src='/images/9.png'/>
                    <h5>Arlene McCoy</h5>
                </div>
                <div className='contact'>
                <img src='/images/10.png'/>
                    <h5>Savannah Nquyen</h5>
                </div>


            </div>
            <div className='aboutMe'></div>
            <div className='myInfo'></div>
        </div>
        </div>
    </div>
    )
}