import React, {useState} from 'react'
import Landing from './landing/Landing'
import Header_landing from './landing/header_landing/Header_landing'
import Login from './login/Login'
import Registration from './registration/Registration'
import { 
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
  } from 'react-router-dom'
import {useSelector} from 'react-redux'
import SignUp from './signUp/SignUp'
import NuvBar from './signUp/NuvBar'
import Home from './Home/Home'
import Favorites from './favorites/Favorites'
import Notes from './Notes/Notes'
import Settings from './Settings/Settings'


function LoginContainer() {
    const [popup, setPopup] = useState(false)
    return(
        <div className='container'>
            <Route  exact path='/' render={()=><Landing setPopup={setPopup} popup={popup}/>}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Registration}/>
            
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
    const isAuth = useSelector(state => state.user.isAuth)
    return(
        <BrowserRouter>
        {!isAuth &&
        <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route path='/(login)' component={LoginContainer} />
            <Route path='/(registration)' component={LoginContainer} />
            <Route component={DefaultContainer} />
        </Switch>
        }
        
        </BrowserRouter>
    )
}