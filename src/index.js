/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import About from "views/examples/about.jsx";
import IndividualTaxPreparation from "views/examples/services/service1.jsx";
import BusinessTaxPreparation from "views/examples/services/service2.jsx";
import TaxResidencyCertificate from "views/examples/services/service3.jsx";
import FBARFipng from "views/examples/services/service4.jsx";
import ITIN from "views/examples/services/service5.jsx";
import Payroll from "views/examples/services/service6.jsx";
import Bookkeeping from "views/examples/services/service7.jsx";
import EIN from "views/examples/services/service8.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
       <Route
        path="/contact-page"
        exact
        render={props => <contact {...props} />}
      />
      <Route
        path="/about-page"
        exact
        render={props => <about {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/about-page"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/IndividualTaxPreparation"
        exact
        render={props => <IndividualTaxPreparation {...props} />}
      />
       <Route
        path="/BusinessTaxPreparation"
        exact
        render={props => <BusinessTaxPreparation {...props} />}
      />
      <Route
        path="/TaxResidencyCertificate"
        exact
        render={props => <TaxResidencyCertificate {...props} />}
      />
      <Route
        path="/FBARFipng ITIN"
        exact
        render={props => <FBARFipng {...props} />}
      />
      <Route
        path="/ITIN"Payroll
        exact
        render={props => <ITIN {...props} />}
      />
      <Route
        path="/Payroll"
        exact
        render={props => <Payroll {...props} />}
      />
      <Route
        path="/Bookkeeping"
        exact
        render={props => <Bookkeeping {...props} />}
      />
      <Route
        path="/EIN"
        exact
        render={props => <EIN {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
