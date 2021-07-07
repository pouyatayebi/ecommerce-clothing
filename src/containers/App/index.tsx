/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import Shop from '../../pages/shop';
import SignInUp from '../../pages/SignInUp';
import Header from '../Header';
import { AuthContext } from '../../context/AuthContext';

import './App.css';

const App = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <Header user={user} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={Shop} />
                <Route path="/sign-in-up" component={SignInUp} />
                <Route path="/sign-out" component={SignInUp} />
            </Switch>
        </div>
    );
};

export default App;
