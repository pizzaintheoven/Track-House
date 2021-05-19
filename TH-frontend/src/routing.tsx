import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//Importing TSX Elements
import DashBoard from './userDashboard/index'
import NavBar from './NavBar'

export default function App() {
  return (
    <div>
      <NavBar/>
        <Router>
            <Switch>
              <Route path="/dashboard">
                <DashBoard />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}