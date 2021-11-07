import React, { useState, useEffect} from 'react'
import './Registration.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import {FaGoogle} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import  {registration} from '../../actions/user'



export default function Registration(props){
    const {popup ,setPopup ,  setPopupReg,popupReg} = props
    const [email, setEmail] = useState()  
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    // const [dispatch, setDispatch] = useDispatch()
    // const [name, setName] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [redirect, SetRedirect] = useState(false)
    function toggleReg(){
        setPopupReg(!popupReg)
        setPopup(!popup)
    }

    useEffect( () => {
        if (emailError || passwordError) {
            setFormValid (false)
        } else {
            setFormValid (true)
        }
        }, [emailError, passwordError])


    // function registration(email, password){
    //     console.log('ok');
    //     // <Redirect to='/signup'></Redirect>
    //     return async dispatch => {

    //     }
    //     try {
    //     const response = () => axios
    //     .post('http://b8e6-93-84-17-237.ngrok.io/user/registration', {
    //         email, 
    //         password, 
    //         // name
    //     })
    //     alert(response.message)
    // } catch (e) {
    //     alert (e.response.data.message)
    // }
    //     // .then((data) => {
    //     //     console.log(data);
    //     //     if (data.status == 200) {
    //     //         SetRedirect(true);
    //     //     }
    //     // })
        
    //     // .catch((error) => alert(error));
    // }
    
    
    // if (redirect) {
    //     return <Redirect to='/signup' />;
    // }


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
    const isAuth = useSelector(state => state.user.isAuth)

    return(
        <div className='registration'>
            <div className='registration_inner'>
            <div className='log_reg'>
            {/* <Link to='./login'> */}
                <h1 className='login' onClick={toggleReg}>Вход</h1>
            {/* </Link>
            <Link to='./registration'> */}
                <h1 className='login'>Регистрация</h1>
            {/* </Link> */}
            <div className="close" onClick={() => setPopupReg(!popupReg)}>
                    <img src='/images/close.png'/>
                </div>
            </div>
            <div className="create">Создать аккаунт</div>
            <div className='forms'>{(emailDirty && emailError) && <div style={{color:'red', textAlign:'center'}}>{emailError}</div>}
            <h3>Введите адрес электронной почты</h3>
            <div className='inputEmail'><input onChange = {e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} name='email' type='email' placeholder='Введите Ваш e-mail'/></div>
            {(passwordDirty && passwordError) && <div style={{color:'red', textAlign:'center'}}>{passwordError}</div>}
            <h3>Пароль</h3>
            <div className='inputPassword'><input onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)} name='password'  type='password' placeholder='Введите пароль'/></div>
            {/* <div class='inputName'><input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/></div> */}
            </div>
            {/* <Link className='button' to='/signup'> */}
            <div className='button'>
               <button disabled={!formValid} onClick={() => registration(email,password)}>Зарегистрироваться</button>
               </div>
            {/* </Link> */}

            <div className='user_terms'>
                <div className='square'></div>
                <div className='terms_text'>Подтверждаю, что ознакомлен, полностью согласен и принимаю условия <a href='#'>Пользовательского соглашения</a></div>
            </div>
            <div className='enter'>
                или войти через
            </div>
            <div className='seti'>
            <img src='/images/google.png'/>
            <img src='/images/linkedin.png'/>
            <img src='/images/facebook_img.png'/>
                
            </div>



            </div>
            
        </div>
    )
}