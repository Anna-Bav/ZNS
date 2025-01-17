import React, { useState } from 'react';
import './contactInfo.css'

import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaGlobe} from 'react-icons/fa';
import {FaPaperPlane} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGift} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaGraduationCap} from 'react-icons/fa';
import {FaSuitcase} from 'react-icons/fa';
import Info from './Info'
import ContactName from './ContactName'
import ContactNav from './ContactNav'


export default function ContactInfo(){
   
    const [info, setInfo] = useState(true)
    const [files, setFiles] = useState(false)
    const [notes, setNotes] = useState(false)
    const [history, setHistory] = useState(false)
    return(

   
<div className='contactInfo'>
    <ContactName />
            {/* <div className='contactName'>
                <h2>Eleanor Pena</h2>
                <h5>Frontend developer at PTHTS</h5>
            </div> */}
            <ContactNav setNotes ={setNotes} setInfo={setInfo} setFiles={setFiles} setHistory={setHistory}/>
            {/* <div className='contactNav'>
                <Link to='/Info'><button>Info</button></Link>
                <button>Notes</button>
                <button>Files</button>
                <button>History</button>
            </div> */}


            <Info notes={notes} info={info} files={files} history={history}/>
            {/* <div className='phone'>
                <div className='phoneIcon'><FaPhone /></div>
                <div className='phoneText'>Phone:</div>
                <div className='phoneNumber'>
                    <div>(405) 555-0128</div>
                    <div>(505) 555-0125</div>
                </div>
            </div>
            <div className='mail'>
            <div className='mailIcon'><FaEnvelope /></div>
                <div className='phoneText'>E-mail:</div>
                <div className='phoneNumber'>
                    nikitosparavoz2019@gmail.com
                </div>
            </div>
            <div className='webSite'>
            <div className='siteIcon'><FaGlobe /></div>
                <div className='phoneText'>Website:</div>
                <div className='siteName'>
                    https://nikitosrulit.com
                </div>
            </div>

            <div className='social'>
            <div className='socialIcon'><FaPaperPlane /></div>
                <div className='phoneText'>Social:</div>
                <div className='socialName'>
                    <FaTwitter className='twitter'/>
                    <FaFacebook className='facebook'/>
                    <FaLinkedinIn className='linkedin'/>
                </div>
            </div>

            <div className='birthday'>
            <div className='birthIcon'><FaGift /></div>
                <div className='phoneText'>Date of berthday:</div>
                <div className='birthName'>
                   8/16
                </div>
            </div>

            <div className='location'>
                <div className='locationIcon'><FaMapMarkerAlt /></div>
                <div className='phoneText'>Location:</div>
                <div className='locationName'>
                    <div>USA, Florida, Miami</div>
                    <div>USA, Florida, Miami</div>
                    <div>Spain, Barcelona</div>
                </div>
            </div>

            <div className='education'>
                <div className='educationIcon'><FaGraduationCap /></div>
                <div className='phoneText'>Education:</div>
                <div className='educationName'>
                    <div>Escuela Tecnica Superior Ingeniería Informática</div>
                    <div className='grey'>Ingeniería de software</div>
                    <div className='grey'>2010 - 2012</div>
                </div>
            </div>

            <div className='work'>
                <div className='workIcon'><FaSuitcase /></div>
                <div className='phoneText'>Education:</div>
                <div className='workName'>
                    <div>Frontend developer at PTНTS company</div>
                    <div className='grey'>2018 - Present</div>
                    <div>Accountant at the RES company</div>
                    <div className='grey'>2015 - 2017 (2 years 1month)</div>
                    
                    
                </div>
            </div> */}

            
            </div>
             )
            }