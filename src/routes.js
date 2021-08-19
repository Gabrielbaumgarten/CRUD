import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './homePage';
import ListPage from './listPage';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route exact path='/Listar' component = {ListPage} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;