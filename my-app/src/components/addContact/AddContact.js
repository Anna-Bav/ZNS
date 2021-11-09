import React, {useState} from 'react'
import './AddContact.css'

export default function AddContact(props){
    const [value, setValue] = useState('');
    const {popupAdd ,setPopupAdd} = props
    function changeSelect(e) {
        setValue(e.target.value);
    }

   return (

        <div className='addContact'>
            <div className='addContact_1'>
            <img src='/images/addContact.png'/>
           
            </div>
            <div className='addContact_2'>
                <div className='addNewContact'>
                    <div className='newContactTitle'>Add new contact</div>
                    <div className='newContactText'>
                        <h5>Basic</h5>
                        <h5>Additionally</h5>
                    </div>
                    <div className='addFirstName'>
                        <div className='addInputText'>First name</div>
                        <div><input className='addInfo' name='name' type='text' placeholder='Enter first name'/></div>
                    </div >
                    <div className='addFirstName'>
                    <div className='addInputText'>Last name</div>
                        <div><input className='addInfo' name='name' type='text' placeholder='Enter last name'/></div>
                    </div>
                    <div className='addPhone'>
                    <div className='addInputText'>Phone</div>
                    <div><input className='addInfo' name='name' type='phone' placeholder='+ 375 29 123 45 67'/></div>
                    <div>
                        <select className='select' value={value} onChange={changeSelect}>
                            <option value='home'>Home</option>
                            <option value='work'>Work</option>
                            <option value='office'>Office</option>
                            <option value='plus'><img src='/images/plus_select.png'/></option>
                        </select>
                    </div>
                    </div>
                    <div className='addPhone'>
                    <div className='addInputText'>E-mail</div>
                    <div><input className='addInfo' name='name' type='phone' placeholder='Enter e-mail address'/></div>
                    <div>
                    <select className='select' value={value} onChange={changeSelect}>
                            <option value='home'>Home</option>
                            <option value='work'>Work</option>
                            <option value='office'>Office</option>
                            <option value='plus'><img src='/images/plus_select.png'/></option>
                        </select>
                    </div>
                    </div>
                    <div className='addTextarea'>
                    <div className='addInputText'>Notes</div>
                    <div><input className='textarea' name='taxtValue' type='textarea' placeholder='Enter your notes'/></div>
                    </div>
                    <div className='button_addContact'> 
                    Add contact
                    </div>
                </div>
                <div className='addPhoto'>
                <img className='addClose' onClick={() => setPopupAdd(!popupAdd)} src='/images/addContact_close.svg'/>
                <img className='contactAddPhoto' src='/images/addPhoto.svg'/>
                <div className='tagsBlock'>
                    <h4>Tags</h4>
                    <input className='addTags' type='text' placeholder='Enter your tags'/>
                </div>
                </div>
            </div>
        </div>
    )
    
}
