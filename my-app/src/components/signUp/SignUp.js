import React from 'react'
import './SignUp.css'
import Contacts from './contacts';
import NuvBar from './NuvBar';
import Search from './search';
import Contact from './Contact';
import ContactInfo from './contactInfo';



export default function SignUp(){
    return(

    <div className='page'>

        <div className='main'>
        {/* <Search /> */}
        <div className='content'>
            
            {/* {contacts.map(i=>(
                <div>{i.name}</div>
                <div><img scr={i.link}/></img></div>
            ))} */}
           
           <Contacts/>
           <Contact />
            <ContactInfo />
           
            
        </div>
        </div>
    </div>
    )
}