import React from 'react';
import { Route, Link } from 'react-router-dom'

import NavBar from './components/core/navBar'
import HomeBody from './components/pages/home'
import FooterBar from './components/core/footerBar'


function App() {

  return (
    <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
        <div id="background" style={{width:"100%", }}>
            <NavBar />
            <HomeBody />
            <FooterBar />
        </div>
    
    </div>
  );
}

export default App;
