import React from 'react'
import './Footer.css'


export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer_1'>
                <div className='footer_1_inner'>
                    <div className='footer_1_header'>
                        <div>Политика конфиденциальности</div>
                        <div>Пользовательское соглашение</div>
                        <div>Контакты</div>
                    </div>
                    <div className='footer_1_text'>
                        <div>© 2004–2021 ZNS</div>
                        <div>OOO «ZBORKA NETWORK SYSTEM» юр.адрес: 220020, Минск, пр. Победителей, 100, оф. 203</div>
                        <div>В торговом реестре с 23 июня 2010 г., № регистрации 156473, УНП 190806803, регистрация №190806803, 22.02.2007, Мингорисполком.</div>
                        <div>E-mail: info@zns.by</div>
                    </div>
                </div>
            </div>
            <div className='footer_2'>
                <div className='footer_2_inner'>
                <div className='footer_2_zns'>
               
                    <div className='footer_emblem'>
                    <div className='name_zns'><h3>zns</h3></div>
                    </div>
                    <div className='zborka'>
                        <div>zborka</div>
                        <div>network</div>  
                        <div>system</div>
                    </div>
               
                </div>
                <div className='footer_2_seti'>
                    <div><img src='/images/Facebook.png'/> </div>
                    <div><img src='/images/Telegram.png'/></div>
                    <div><img src='/images/Instagram.png'/></div>
                </div>
            </div>
            </div>

        </div>
    )
}