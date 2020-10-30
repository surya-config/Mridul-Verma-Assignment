import React from "react";
import "./FirstComponent.css";
import Header from "../Header/Header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Comp1 from "./Comp1/Comp1";
import Comp2 from "./Comp2/Comp2";

function FirstComponent() {
  return (
    <div className="firstComponent">
      <Header />
      <div className="firstComponent__container">
        <div className="firstComponent__sidebar">
          <div className="firstComponent__sidebarTop">
            <h2>Hello, Bruce</h2>
            <p>Getting Started!</p>
            <p>
              Great to have you onboard!
              <br />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="firstComponent__sidebarOptions">
            <div className="firstComponent__sidebarDropdown">
              <h5>ONBOARDING SETUP</h5>
              <ExpandMoreIcon />
            </div>
            <div className="firstComponent__sidebarTick">
              <h5>Add Users</h5>
              <CheckCircleIcon />
            </div>
            <div className="firstComponent__sidebarContainer">
              <h5>Install Software</h5>
              <p>1 of 2</p>
            </div>
            <div className="firstComponent__option">
              <h5>Product walktrough</h5>
            </div>
          </div>
        </div>
        <div className="firstComponent__body">
          <div className="firstComponent__bodyLeft">
            <h4>INSTALL SOFTWARES</h4>
            <h2>Get Securizza installed on your hosts</h2>
            <p>
              Securizza uses an efficient and powerful agent to monitor users
              and services activity and alert in realtime when suspicous
              activity is happening. Follow the instructions below
            </p>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Comp1 />
                </Route>
                <Route exact path="/comp2">
                  <Comp2 />
                </Route>
              </Switch>
            </Router>

            <div className="firstComponent__bodyLeftLink">
              <p>
                Want to install manually? See the <a>installation guide pdf </a>
              </p>
            </div>
          </div>
          <div className="firstComponent__bodyRight">
            <h4>I'll do this later</h4>
          </div>
        </div>
      </div>
      <div className="firstComponent__bodySubmit">
        <p>Step 1 of 2</p>
        <button className="firstComponent__bodyGoback">Go back</button>
        <button className="firstComponent__bodyNext">Next</button>
      </div>
    </div>
  );
}

export default FirstComponent;
