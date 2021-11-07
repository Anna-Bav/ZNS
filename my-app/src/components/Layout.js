import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Redirect} from 'react-router-dom'

import Landing from "./landing/Landing";
import Header_landing from "./landing/header_landing/Header_landing";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import NoContacts from "./noContacts/NoContacts";
import AddContact from "./addContact/AddContact"
import SignUp from "./signUp/SignUp";
import NuvBar from "./signUp/NuvBar";
import Search from "./signUp/search";
import Home from "./Home/Home";
import Favorites from "./favorites/Favorites";
import Notes from "./Notes/Notes";
import Settings from "./Settings/Settings";
import { auth } from "../actions/user";

function LoginContainer() {


  return (
    <div className="container">
      <Route exact path="/" render={() => (
          <Landing />
        )}
      />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </div>
  );
}
function DefaultContainer() {
  const [popupAdd, setPopupAdd] = useState(false)
  return (
    <div>
      <NuvBar />
      <Search />
      <Route path="/home" render={() => <Home />} />
      <Route path="/noContacts" render={() => <NoContacts popupAdd={popupAdd} setPopupAdd={setPopupAdd}/>} />
      <Route path="/AddContact" render={() => <AddContact />} />
      <Route path="/signup" render={() => <SignUp />} />
      <Route path="/favorites" render={() => <Favorites />} />
      <Route path="/notes" render={() => <Notes />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  );
}

export default function Layout() {
  
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    if (isAuth) {
      <Redirect to ='/noContacts'/>
      // <Redirect to ='/signup'/>

    }
  }, []);
  return (
    <BrowserRouter>
      {!isAuth && (
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/(login)" component={LoginContainer} />
          <Route path="/(registration)" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
