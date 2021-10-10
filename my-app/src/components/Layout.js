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
import Home from './Home/Home'
import Favorites from './favorites/Favorites'
import Notes from './Notes/Notes'
import Settings from './Settings/Settings'



export default function Layout(){
   
    return(
        <BrowserRouter>
        <NuvBar/>
        <Switch>
            <Route exact path='/' render={()=><Login />}/>
            <Route path='/home' render={()=><Home/>}/>
            <Route path='/signup' render={()=><SignUp/>}/>
            <Route path='/favorites' render={()=><Favorites/>}/>
            <Route path='/notes' render={()=><Notes/>}/>
            <Route path='/settings' render={()=><Settings/>}/>
            
        </Switch>
        </BrowserRouter>
    )
}