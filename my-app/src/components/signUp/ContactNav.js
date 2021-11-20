import React from 'react';
import './ContactNav.css'
import {Link} from 'react-router-dom'

export default function ContactNav(props){
    const {setNotes, setInfo} = props
    function setNotePage(){
        setNotes(true)
        setInfo(false)
    }
    return(

        <div className='contactNav'>
        <Link to='/Info'><button>Info</button></Link>
        <button onClick={setNotePage}>Notes</button>
        <button>Files</button>
        <button>History</button>
    </div>
    )
}