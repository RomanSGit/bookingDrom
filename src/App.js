import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Booking from "./containers/booking/booking";
import Orders from "./containers/orders/orders";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Booking />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
    </Switch>
  </Router>
);

export default App;