import React, {Component} from 'react';
import './App.css';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Auth from "./Contexts/Auth";
import LandingScreen from "./Screens/LandingScreen/LandingScreen";
import MyPropertiesScreen from "./Screens/MyPropertiesScreen/MyPropertiesScreen";
import UserScreen from "./Screens/UserScreen/UserScreen";
import CreateUserScreen from "./Screens/CreateUserScreen/CreateUserScreen";
import BrowsePropertiesScreen from "./Screens/BrowsePropertiesScreen/BrowsePropertiesScreen";
import VisitingListScreen from "./Screens/VisitingListScreen/VisitingListScreen";
import NavBar from "./Shared/NavBar";


export default class App extends Component {

  render() {
    return <Auth>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingScreen} exact={true}/>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/my-properties" component={MyPropertiesScreen}/>
          <Route path="/my-account" component={UserScreen}/>
          <Route path="/create-account" component={CreateUserScreen}/>
          <Route path="/browse" component={BrowsePropertiesScreen}/>
          <Route path="/visiting-list" component={VisitingListScreen}/>
        </Switch>
      </BrowserRouter>
    </Auth>
  }
}
