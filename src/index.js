import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Import 3rd party modules from npm
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


import Auth0Lock from 'auth0-lock';



//Import stylesheets
import '../src/assets/css/inspectWA.css'



//Import routes
import About from './components/pages/about'
import Membership from './components/pages/membership'
import Ethics from './components/pages/ethics'
import Inspectors from './components/pages/inspectors'
import Documents from './components/pages/documents'
import Calendar from './components/pages/calendar'
import Contact from './components/pages/contact'



var lock = new Auth0Lock('lVnzQWTkw8KQa7ZrU94L2Tx0BCYVnQPj', 'pclark.au.auth0.com', {   
    theme: {
        primaryColor: 'rgb(100,100,100)',            
    },    
    languageDictionary: {
        title: "InspectWA sign in"
    },    
    allowSignUp: false
});

        
const checkAuth = async () => {    
  await lock.checkSession({}, function (error, authResult) {
      if (error || !authResult) {
          //USER IS NOT ALLOWED TO ACCESS ROUTE, REDIRECT TO /contact
          return true;
      } else {  
          //USER CAN PROCEED TO MEMBERS ROUTE
          return true;
      }
  })
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    checkAuth() === false
      ? <Component {...props} />
      : <Redirect to='/contact' />
  )} />
)


const Members = () => <h3>Hello protected member</h3>

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
        <PrivateRoute path='/members' component={Members} />
      </div>
    </Router>
    
)

//This renders the 'root' component
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
