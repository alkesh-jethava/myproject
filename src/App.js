import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import Registration from './Login/Registration';
import CreateNewPassword from './Login/CreateNewPassword';
import Navigation from './Navigation';
import Home from './File/Home';
import Customer from './File/Customer';
import AboutUs from './File/AboutUs';
import ContactUs from './File/ContactUs';
import Card from './File/Card';
import EditProfile from './File/EditProfile';
import ChangePassword from './File/ChangePassword';
import Protected from './Login/Protected';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/ForgotPassword" component={ForgotPassword} />
                <Route exact path="/Registration" component={Registration} />
                <Route exact path="/CreateNewPassword" component={CreateNewPassword} />
                <Protected exact path="/Navigation" component={Navigation} />
                <Protected exact path="/Home" component={Home} />
                <Protected exact path="/Customer" component={Customer} />
                <Protected exact path="/AboutUs" component={AboutUs} />
                <Protected exact path="/ContactUs" component={ContactUs} />
                <Protected exact path="/Card" component={Card} />
                <Protected exact path="/EditProfile" component={EditProfile} />
                <Protected exact path="/ChangePassword" component={ChangePassword} />
                {/* <ProtectedRoute exact path="*" component={Login} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default App;