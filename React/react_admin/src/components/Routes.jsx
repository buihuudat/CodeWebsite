import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from '../pagesDashboard'
import Customers from '../pages/Customers'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/customers' exact component={Customers}/>
    </Switch>
  )
}

export default Routes