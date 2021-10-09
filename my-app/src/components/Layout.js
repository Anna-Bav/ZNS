import React from 'react'
import Login from './login/Login'
import { 
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
  } from 'react-router-dom'
import SignUp from './signUp/SignUp'
import NuvBar from './signUp/NuvBar'


export default function Layout(){
   
    return(
        <BrowserRouter>
        <NuvBar/>
        <Switch>
            <Route exact path='/' render={()=><Login/>}/>
            <Route path='/signup' render={()=><SignUp/>}/>
        </Switch>
        </BrowserRouter>
    )
}