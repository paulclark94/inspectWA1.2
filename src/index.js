import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Import 3rd party modules from npm
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//Import stylesheets
import '../src/assets/css/inspectWA.css'

//Import scripts



//Import routes
import About from './components/pages/about'
import Membership from './components/pages/membership'
import Ethics from './components/pages/ethics'
import Inspectors from './components/pages/inspectors'
import Documents from './components/pages/documents'
import Calendar from './components/pages/calendar'
import Contact from './components/pages/contact'

//Define routing
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/membership" component={Membership} />
        <Route path="/ethics" component={Ethics} />
        <Route path="/inspectors" component={Inspectors} />
        <Route path="/documents" component={Documents} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )

//This renders the 'root' component
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
