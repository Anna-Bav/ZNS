import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {setUser} from '../reducers/userReducer'
import jwt_decode from 'jwt-decode'


let redirect = false
export const registration = async (email, password) => {
    // const [redirect, SetRedirect] = useState(false)
    
    try{
     
        const response = await axios.post('https://zns-web.herokuapp.com/user/registration',{
            email,
            password
        })
        console.log(response)
        // .then ((data) => {
       
         
        //     if (data.status == 200) {
        //         // SetRedirect(true);
              
        //         <Redirect to='/signup' />;
        //     }
        // })
        alert('успешно')
        redirect=true;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzNDY2Mzk5MCwianRpIjoiZjE0MDEzOGYtNjQ4MC00ZTg5LWE4NzMtMTY0NzEwMTRiYjkxIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYxNmVmZTM2OWVlYmRjYjFiOWUyOWE5MCIsIm5iZiI6MTYzNDY2Mzk5MCwiZXhwIjoxNjM0NzUzOTkwfQ.58uI9mLv4aX_0tf42-TBSLI_jgTrqi-UVHE5QD-Wc18"
        let decoded = jwt_decode(token);
        console.log(decoded)
       console.log()
    } catch (e) {
        alert('ошибка')
    }
     
    
    }

    if (redirect) {
        <Redirect to='/signup' />;
        }



export const login = (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.post('https://zns-web.herokuapp.com/user/login',{
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
           
        } catch (e) {
            alert('ошибка')
        }
    }
    
    
}

export const auth = () => {
    return async dispatch => {
        try{
            const response = await axios.get('https://zns-web.herokuapp.com/user/auth',
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('response', response)
           
        } catch (e) {
            alert('ошибка')
            localStorage.removeItem('token')
        }
    }
    
    
}