import React from 'react'
import Login from './login/Login'
import { 
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
  } from 'react-router-dom'
import SignUp from './signUp/SignUp'


export default function Layout(){
   
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' render={()=><Login/>}/>
            <Route path='/signup' render={()=><SignUp/>}/>
        </Switch>
        </BrowserRouter>
    )
}