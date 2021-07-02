import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

import './App.css';

const HatPage = () => {
  return <div>hat page</div>;
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hat" component={HatPage} />
      </Switch>
    </div>
  );
};

export default App;
