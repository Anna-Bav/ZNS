import React from "react";
import './Contact.css';
import {FaTag} from 'react-icons/fa';

export default function Contact() {
    return(

    
<div className='aboutContact'>
                <div className='onContact'>
                    <img src='/images/me.png'/>
                </div>
                <div>
                    <button className='createEvent'>Create event</button>
                </div>
                <div className='common'>
                    <h5>Common contact with 10 people:</h5>
                    <img src='/images/6.png'/>
                    <img src='/images/9.png'/>
                    <img src='/images/2.png'/>
                    <img src='/images/10.png'/>
                    <img src='/images/1.png'/>
                    <img src='/images/3.png'/>
                </div>
                <div className='tags'>
                <div className='iconTag'>
                   <FaTag/>
                    <h5>Tags</h5>
                </div>
                <div className='tagsButton'>
                    <button>Work</button>
                    <button>Finance</button>
                </div>
                </div>

        </div>
        )
    }