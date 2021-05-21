import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importing TSX Elements
import DashBoard from "./pages/index";
import NavBar from "./NavBar";
import Home from './pages/Home'
import InvalidUser from './pages/Invalid'

export default function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="invaliduser">
            <InvalidUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
