import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import PortfolioPage from '../pages/PortfolioPage';
import AllServicesPage from '../pages/AllServicesPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={AllServicesPage} />
          <Route exact path="/course" component={AllCoursesPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
            
        </Switch>
      </Fragment>
    )
  }
}

export default AppRouter