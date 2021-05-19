import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//Importing TSX Elements
import DashBoard from './userDashboard/index'
import NavBar from './NavBar'
import Login from './userLogin/login'

export default function App() {
  return (
    <div>
      <NavBar/>
        <Router>
            <Switch>
              <Route path="/dashboard">
                <DashBoard />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}