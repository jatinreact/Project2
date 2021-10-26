import { Switch, Route, Redirect } from "react-router-dom"
import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Feature from "./Components/Feature/Feature";
import Support from "./Components/Support/Support";
import Register from "./Components/Register/Register";
import LoginIn from "./Components/Register/LoginIn";
import AboutUs from "./Components/AboutUs/AboutUs";
import Resources from "./Components/Resources/Resources";
import ContactUs from "./Components/ContactUs/ContactUs";
import UserDetails from "./Components/AfterLoginComponents/UserDetails/UserDetails";
import EditProfile from "./Components/AfterLoginComponents/EditProfile/EditProfile";
import UserDataTabs from "./Components/AfterLoginComponents/UserDataTabs/UserDataTabs";
import PropertiesDetail from "./Components/AfterLoginComponents/UserProperties/PropertiesDetail";

function App() {
  return (
    <>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/home" component={Home}/>
         <Route exact path="/features" component={Feature}/>
         <Route exact path="/support" component={Support}/>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/login" component={LoginIn}/>
         <Route exact path="/about-us" component={AboutUs}/>
         <Route exact path="/resources" component={Resources}/>
         <Route exact path="/contact-us" component={ContactUs}/>
         <Route exact path="/user-details" component={UserDetails}/>
         <Route exact path="/edit-profile" component={EditProfile}/>
         <Route exact path="/user-data" component={UserDataTabs}/>
         <Route exact path="/property-detail" component={PropertiesDetail}/>
         <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
