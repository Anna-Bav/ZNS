import React from 'react'
import Landing from './landing/Landing'
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

function LoginContainer() {
    return(
        <div className='container'>
            <Route exact path='/' render={()=><Landing />}/>
            <Route path='/login' component={Login}/>
            
        </div>
    )
};
function DefaultContainer() {
    return(
        <div>
           <NuvBar/>
           <Route path='/home' render={()=><Home/>}/>
            <Route path='/signup' render={()=><SignUp/>}/>
            <Route path='/favorites' render={()=><Favorites/>}/>
            <Route path='/notes' render={()=><Notes/>}/>
            <Route path='/settings' render={()=><Settings/>}/>

        </div>
    )
};


export default function Layout(){
   
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component={LoginContainer} />
            <Route exact path='/(login)' component={LoginContainer} />
            <Route component={DefaultContainer} />
            
            
        </Switch>
        </BrowserRouter>
    )
}