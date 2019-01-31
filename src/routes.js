import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import Registration from './pages/Registration.js';
import About from './pages/About.js';
import Sponsors from './pages/Sponsors.js';
import Payment from './pages/Payment.js';
import FAQ from './pages/FAQ.js';
import Keynote from './pages/Keynote.js';
import Contact from './pages/Contact.js';
import Schedule from './pages/Schedule.js';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Registration} />
    <Route path="/about" component={About} />
    <Route path="/schedule" component={Schedule} />
    <Route path="/registration" component={Registration} />
    <Route path="/payment" component={Payment} />
    <Route path="/sponsors" component={Sponsors} />
    <Route path="/keynote" component={Keynote} />
    <Route path="/faq" component={FAQ} />
    <Route path="/contact" component={Contact} />
  </Route>
  </Router>
);