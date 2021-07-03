import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Shop from '../../pages/shop';
import SignInUp from '../../pages/SignInUp';
import Header from '../Header';

import './App.css';

const HatPage = () => {
  return <div>hat page</div>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in-up" component={SignInUp} />
      </Switch>
    </div>
  );
};

export default App;
