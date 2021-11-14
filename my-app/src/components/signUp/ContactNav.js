import React from 'react';
import './ContactNav.css'
import {Link} from 'react-router-dom'

export default function ContactNav(){
    return(

        <div className='contactNav'>
        <Link to='/Info'><button>Info</button></Link>
        <button>Notes</button>
        <button>Files</button>
        <button>History</button>
    </div>
    )
}