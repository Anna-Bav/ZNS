import React, {useState} from 'react'
import './Landing.css'
import {Link} from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaSkype} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {FaCommentAlt} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaClipboard} from 'react-icons/fa';
import {FaStickyNote} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import {FaGooglePlay} from 'react-icons/fa';

import mapImg from '../../components/mapbase.png'
import downloadImg from '../../components/download_cut.png'
import Header_landing from './header_landing/Header_landing'
import Registration from '../registration/Registration'
import Login from '../login/Login'
import Footer from '../landing/footer/Footer'



export default function Landing(props) {
    const [popup, setPopup] = useState(false);
    const [popupReg, setPopupReg] = useState(false);
    console.log('landingPopup',popup)
    return(
        
        <div className='landing'>
            {popup && <Login popup={popup} setPopup={setPopup}   setPopupReg={setPopupReg}
            popupReg={popupReg}/>}
            {popupReg && <Registration popup={popup} setPopup={setPopup}   setPopupReg={setPopupReg}
            popupReg={popupReg}/>}
             
            <Header_landing popup={popup} setPopup={setPopup}   setPopupReg={setPopupReg}
            popupReg={popupReg}/>
           
            {/* <div className='header'>
             <div className='header_1'>
                <div className='zns'>
                    <div className='emblem'>
                        <div className='name_zns'><h3>zns</h3></div>
                    </div>
                    <div className='zborka'>
                        <div>zborka</div>
                        <div>network</div>  
                        <div>system</div>
                    </div>
                </div>
                <div className='text_zns'>
                    <h1>ZNS.</h1>
                    <h1>Управляйте своими</h1>
                    <h1>контактами</h1>
                    <h2>Регистрируясь в ZNS, вы получаете продукт, помогающий</h2>
                    <h2>вам организовать контакты из социальных сетей, почты </h2>
                    <h2>и мессенджеров.</h2>
                </div>
                <div className='zns_button'>
                <Link to='/registration'>
                    <button onClick={() => setPopup(!popup)}>Бесплатная регистрация</button>
                </Link>
                </div>
            </div>

            <div className='header_2'>
                <div className='header_2_nav'>
                    <button>Функции</button>
                    <button>Контакты</button>
                    <Link to='/login'><button>Вход</button></Link>
                    <Link to='/registration'><button>Регистрация</button></Link>
                    <button>Ru</button>
                </div>
                <div className='pictures'>
                    <div className='pic1'>
                        <img src='/images/contacts_cut.png'/>
                    </div>
                    <div className='pic2'>
                    <img src='/images/iPhone.png'/>
                    </div>
                </div>
            </div>
        </div> */}

        <div className='zns_mean'>
            <div className='zns_mean_header'>
                <h1>ZNS - что это?</h1>
                <h4><div>Мы создали удобную платформу для вашей работы с контактами, задачами</div>
                <div> и планами. Воплотили в реальность .................................</div></h4>
            </div>
            <div className='zns_mean_wrap'>
                <div className='zns_mean_inner1'>
                    <h1><div>Все ваши контакты.</div>
                    <div>Из всех социальных сетей.</div> 
                    <div>В ZNS</div></h1>
                    <h3>Объединяйте все ваши контакты из социальных сетей, мессенджеров и почты в одном удобном приложении.</h3>
                </div>
                <div className='zns_mean_inner2'>
                    
                        <div className='social_inner'><div className='whatSapp_wrap'><FaWhatsapp className='whatSapp'/></div></div>
                        <div className='social_inner'><img src='/images/social1.png'/></div>
                        <div className='social_inner'><div className='linkedIn_wrap'><FaLinkedinIn className='linkidIn'/></div></div>
                        <div className='social_inner'><img src='/images/social2.png'/></div>
                        <div className='social_inner'><img src='/images/social3.png'/></div>
                        <div className='social_inner'><div className='telegram_wrap'><FaTelegramPlane className='telegram'/></div></div>
                        <div className='social_inner'><img src='/images/social4.png'/></div>
                        <div className='social_inner'><div className='instagram_wrap'><FaInstagram className='instagram'/></div></div>
                        <div className='social_inner'><div className='skype_wrap'><FaSkype className='skype'/></div></div>
                        <div className='social_inner'><img src='/images/social5.png'/></div>
                        <div className='social_inner'><div className='envelope_wrap'><FaEnvelope className='envelope'/></div></div>
                        <div className='social_inner'><img src='/images/social6.png'/></div>
                </div>
            </div>
        </div>

        <div className='map'>
            <div className='map_inner' style={{backgroundImage: `url(${mapImg})` }}>
                <div className='person1'>
                    <img className='per1' src='/images/per1.png'/>
                    <img className='face1' src='/images/person1.png'/>
                    </div>
                <div className='person2'>
                    <img className='per2' src='/images/per2.png'/>
                    <img className='face2' src='/images/person2.png'/>
                </div>
                <div className='person3'>
                    <img className='per3' src='/images/per3.png'/>
                    <img className='face3' src='/images/person3.png'/>
                </div>
                <div className='person4'>
                    <img className='per4' src='/images/per4.png'/>
                    <img className='face4' src='/images/person4.png'/>
                </div>
                <div className='person5'>
                    <img className='per5' src='/images/per5.png'/>
                    <img className='face5' src='/images/person5.png'/>
                </div>
                <div className='person6'>
                    <img className='per6' src='/images/per6.png'/>
                    <img className='face6' src='/images/person6.png'/>
                </div>

                <div className='map_text'>
                    <h2>Найдите нужного человека, даже если забыли его имя. </h2>
                    <h3>Просто введите место или время когда контакт был записан и ZNS найдет его.</h3>
                </div>
            </div>
        </div>
       
       <div className='together'>
           <div className='together_inner'>
               <div className='together_head'>
                   <h1>Вместе с ZNS Вы сможете:</h1>
               </div>
               <div className='together_main'>
                    <div className='main1'>
                        <div className='main_icon'><FaUserFriends className='userFriends'/></div>
                        <div className='text'>
                            <h1>Совместно работать с контактами</h1>
                            <h3>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</h3>
                        </div>
                    </div>
                    <div className='main2'>
                        <div className='main_icon'><FaCommentAlt className='userFriends'/></div>
                        <div className='text'>
                            <h1>Собрать все переписки в одном месте</h1>
                            <h3>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</h3>
                        </div>
                    </div>
                    <div className='main3'>
                        <div className='main_icon'><FaUser className='userFriends'/></div>
                        <div className='text'>
                            <h1>Легко найти нужного вам человека</h1>
                            <h3>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </h3>
                        </div>
                    </div>
                    <div className='main4'>
                    <div className='main_icon'><FaClipboard className='userFriends'/></div>
                        <div className='text'>
                            <h1>Делиться своими планами</h1>
                            <h3>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </h3>
                        </div>
                    </div>
                    <div className='main5'>
                    <div className='main_icon'><FaStickyNote className='userFriends'/></div>
                        <div className='text'>
                            <h1>Создавать заметки и делиться ими</h1>
                            <h3>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </h3>
                        </div>
                    </div>
                    <div className='main6'>
                    <div className='main_icon'><FaUserFriends className='userFriends'/></div>
                        <div className='text'>
                            <h1>Совместно работать с контактами</h1>
                            <h3>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</h3>
                        </div>
                    </div>
               </div>
           </div>

       </div>



       <div className='choose'>
        <div className='choose_inner'>
            <div><h1>Почему стоит выбрать ZNS?</h1></div>
            <div><h5>Посмотрите 5-минутное видео о преимуществах нашей платформы</h5></div>
            <div>
                <video width="904" height="462" controls>
                 <source src='/video/solarstone.mp4'/>
                </video>
            </div>
        </div>
       </div>


       <div className='download' style={{backgroundImage: `url(${downloadImg})`}}>
        <div className='download_zns'>
            <div><h1>Скачай приложение ZNS на iOS или Android </h1></div>
            <div><h3>Скачайте ZNS и присоединяйтесь к десяткам миллионов пользователей. Оцените удобный сервис общения, поиска контактов и планирования своих задач.</h3></div>
            <div className='stores'>
                <div className='app'><FaApple className='apple'/> <div><h5>Download on the</h5> <h2>App Store</h2></div></div>
                <div className='goog'><FaGooglePlay className='google'/> <div><h5>GET IT ON</h5> <h2>Google Play</h2></div></div>
            </div>
        </div>
       </div>

           <Footer/>
      
        </div>
    )
}