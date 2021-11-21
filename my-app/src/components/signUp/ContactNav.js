import React from 'react';
import './ContactNav.css'
import {Link} from 'react-router-dom'

export default function ContactNav(props){
    const {setNotes, setInfo, setFiles, setHistory} = props

    function setInfoPage(){
        setInfo(true)
        setNotes(false)
        setFiles(false)
        setHistory(false)
    }
    function setNotePage(){
        setNotes(true)
        setInfo(false)
        setFiles(false)
        setHistory(false)
    }
    function setFilesPage(){
        setInfo(false)
        setNotes(false)
        setFiles(true)
        setHistory(false)

    }
    function setHistoryPage(){
        setInfo(false)
        setNotes(false)
        setFiles(false)
        setHistory(true)

    }
    return(

        <div className='contactNav'>
        <button onClick={setInfoPage}>Info</button>
        <button onClick={setNotePage}>Note</button>
        <button onClick={setFilesPage}>Files</button>
        <button onClick={setHistoryPage}>History</button>
    </div>
    )
}