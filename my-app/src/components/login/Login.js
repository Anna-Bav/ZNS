import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Login(){

    const [email, setEmail] = useState()  
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')



    function postData(){
        axios.post('http://zns-web.herokuapp.com/user/registration', {email, password, name})
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }

    const blurHandler = (e) => {
       switch (e.target.name) {
         case 'email':
             setEmailDirty(true)  
             break
        case 'password':
            setPasswordDirty(true)
            break
       } 
    }

    return(
        <div>
            <h1>Login</h1>
            {(emailDirty && emailError)} <div style={{color:'red'}}>{emailError}</div>
            <div className='inputEmail'><input onBlur = {e => blurHandler(e)} name='email' type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/></div>
            {(passwordDirty && passwordError)} <div style={{color:'red'}}>{passwordError}</div>
            <div><input onBlur = {e => blurHandler(e)} name='password'  type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/></div>
            <div><input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/></div>
            <Link to='/signup'><button>Зарегистрироваться</button></Link>

        </div>
    )
}
