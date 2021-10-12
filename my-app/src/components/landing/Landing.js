import React from 'react'
import './Landing.css'
import {Link} from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaSkype} from 'react-icons/fa';

export default function Landing() {
    return(
        <div className='landing'>
        <div className='header'>
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
                    <button>Бесплатная регистрация</button>
                </div>
            </div>

            <div className='header_2'>
                <div className='header_2_nav'>
                    <button>Функции</button>
                    <button>Контакты</button>
                    <button>Вход</button>
                    <Link to='/login'><button>Регистрация</button></Link>
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
        </div>

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
                        <div className='social_inner'></div>
                        <div className='social_inner'><img src='/images/social6.png'/></div>

                    
                </div>

            </div>
        </div>
       
        </div>
    )
}