import React, { useState, useEffect} from 'react'
import './Login.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux'


export default function Login(){

    const [email, setEmail] = useState()  
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    // const [name, setName] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [redirect, SetRedirect] = useState(false)


    useEffect( () => {
        if (emailError || passwordError) {
            setFormValid (false)
        } else {
            setFormValid (true)
        }
        }, [emailError, passwordError])


    function postData(){
        // console.log('ok');
        // <Redirect to='/signup'></Redirect>
        return async dispatch => {

        }
        axios
        .post('http://b8e6-93-84-17-237.ngrok.io/user/registration', {
            email, 
            password, 
            // name
        })
        .then((data) => {
            console.log(data);
            if (data.status == 200) {
                SetRedirect(true);
            }
        })
        
        .catch((error) => console.log(error));
    }
    
    if (redirect) {
        return <Redirect to='/signup' />;
    }
    

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный емейл');
    } else {
        setEmailError('')
    }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 10) {
            setPasswordError('Пароль должен быть не менее 3 и не более 10 символов')
            if(!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError ('')
        }
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
            <h1 className='login'>Зарегистрироваться</h1>
            {(emailDirty && emailError) && <div style={{color:'red', textAlign:'center'}}>{emailError}</div>}
            <div className='inputEmail'><input onChange = {e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} name='email' type='text' placeholder='email'/></div>
            {(passwordDirty && passwordError) && <div style={{color:'red', textAlign:'center'}}>{passwordError}</div>}
            <div className='inputPassword'><input onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)} name='password'  type='text' placeholder='password'/></div>
            {/* <div class='inputName'><input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/></div> */}
            <Link className='button' to='/signup'>
               <button disabled={!formValid} onClick={dispatch(Login(email,password))}>Зарегистрироваться</button>
            </Link>

        </div>
    )
}
