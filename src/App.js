import React from 'react';
import { Route, Link } from 'react-router-dom'

import NavBar from './components/core/navBar'
import HomeBody from './components/pages/home'
import FooterBar from './components/core/footerBar'

import './App.css'


class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          isAuthenticated: false
      }

      this.authHandler = this.authHandler.bind(this)
  } 

  
  authHandler(newValue) {
      this.setState({
        isAuthenticated: newValue
      })
  }

  render() { 
      return ( 
          <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
              <div id="background" style={{width:"100%", }}>
                  <NavBar isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>
                  <HomeBody />
                  <FooterBar />
              </div>
          </div>
      );
  }
}

export default App;
