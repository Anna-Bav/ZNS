import React from 'react'
import './NoContacts.css'
import AddContact from "../addContact/AddContact"


export default function noContacts(props){
    const { setPopupAdd, popupAdd} = props;
   
    return(

    <div className='noContactsPage'>
        {popupAdd && <div><AddContact setPopupAdd={setPopupAdd} popupAdd={popupAdd}/></div>}
        <div className='add_person'>
            <img className='add_img' 
            onClick={() => setPopupAdd(!popupAdd)} 
            src='/images/add.svg'
            />
            <div className='add_text'>
                <div className='add_text1'>Your contact list is empty</div>
                <div className='add_text2'>Add your first contact</div>
            </div>
            <div className='add_button'>
            <div><img src='/images/plus_mini.svg'/></div>
            <div className='add_button_text' onClick={() => setPopupAdd(!popupAdd)}>Add new contact </div>
            </div>
        </div>
        <div className="import_from">
            <div className="import_from1"></div>
            <div className="import_from2">or import from</div>
            <div className="import_from3"></div>
        </div>
       
       <div className='import_seti'>
           <div className='import_seti_1'>
                <img src='/images/bitrix.svg'/>
                <img src='/images/megaplan.svg'/>
           </div>
           <div className='import_seti_2'>
           <img src='/images/import_google.svg'/>
           <img src='/images/import_facebook.png'/>
           <img src='/images/import_linkedin.svg'/>
           <img src='/images/import_viber.svg'/>
           <img src='/images/import_apple.svg'/>
           <img src='/images/import_whatsapp.png'/>
           <img src='/images/import_telegram.png'/>
           <img src='/images/import_twitter.svg'/>
           </div>
       </div>
    </div>
    )
}

