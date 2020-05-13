import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import PlantsAvailable from "./PlantsAvailable";
import AddPlant from "./AddPlant";

import './App.css';


export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PlantsAvailable">Plants Available</Link>
          </li>
          <li>
            <Link to="/AddPlant">ME2U</Link>
          </li>
        </ul>

        <hr />

        {/*
  A <Switch> looks through all its children <Route>
  elements and renders the first one whose path
  matches the current URL. Use a <Switch> any time
  you have multiple routes, but you want only one
  of them to render at a time
*/}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/PlantsAvailable">
            <PlantsAvailable />
          </Route>
          <Route exact path="/AddPlant">
            <AddPlant />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




