import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import Home from './components/HomePage';

export const Routes = () => {
 return(
   <div>
       <Switch>
         <Route exact path="/" component={Home} />
       </Switch>
   </div>
 )
}