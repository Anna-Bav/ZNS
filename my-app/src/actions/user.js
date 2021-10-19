
import axios from 'axios'
import {setUser} from '../reducers/userReducer'

export const registration = async (email, password) => {
    try{
        const response = await axios.post('https://zns-web.herokuapp.com/user/registration',{
            email,
            password
        })
        alert('успешно')
    } catch (e) {
        alert('ошибка')
    }
    
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
            const response = await axios.get('http://b8e6-93-84-17-237.ngrok.io/user/auth',
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
           
        } catch (e) {
            alert('ошибка')
            localStorage.removeItem('token')
        }
    }
    
    
}