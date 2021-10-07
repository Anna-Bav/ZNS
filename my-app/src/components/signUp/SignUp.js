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
import {FaTag} from 'react-icons/fa';
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







export default function SignUp(){
    return(

    <div className='page'>
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
                <div className='contact'>
                    <img src='/images/me_cut.png'/>
                    <h5>Eleanor Pena</h5>
                    {/* <FaStar className='myStar' /> */}
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
            <div className='contactInfo'>
            <div className='contactName'>
                <h2>Eleanor Pena</h2>
                <h5>Frontend developer at PTHTS</h5>
            </div>
            <div className='contactNav'>
                <button>Info</button>
                <button>Notes</button>
                <button>Files</button>
                <button>History</button>
            </div>
            <div className='phone'>
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
            </div>

            
            </div>
        </div>
        </div>
    </div>
    )
}