import React from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'



class About extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            isAuthenticated: this.props.isAuthenticated
        }
  
        this.authHandler = this.authHandler.bind(this)
    } 
  
    
    authHandler(newValue) {
        this.setState({
          isAuthenticated: newValue
        })
    }

    renderContent = () => {
        if (isMobile) {
            return (
                <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
                    <div id="background" style={{width:"100%", }}>
                        <NavBarMobile isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>
    
                        <div style={{backgroundColor:'rgba(255,255,255,0.2)',marginTop:'10vh'}}>    
                            <div style={{height:'50vh', width:'90vw', marginLeft:'5vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <img style={{height:'30vh', marginTop:'20vh'}} src={require('../../assets/icons/check-mark.png')} />
                            </div>
                            <div style={{height:'30vh', width:'90vw', marginLeft:'5vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <p style={{fontSize:20, fontStyle:'italic', color:'rgb(220,220,220)'}}>
                                    Our vision is to be WA’s peak body representing professional independent building and property inspection businesses.
                                </p>
                            </div>
                            <div style={{height:'20vh'}}>
                            </div>
                            
    
                            
                            <div style={{backgroundColor:'rgba(255,255,255,0.7)', padding:20, textAlign:'center', contentAlign:'center'}}>
                                <h1 style={{color:'rgb(40,40,40)'}}>
                                    Our team
                                </h1>
                                <p style={{textAlign:'left', color:'rgb(40,40,40)', fontSize:16, width:'100%'}}>
                                    Inspectors within the association are either a registered engineer, builder or surveyor. Our inspectors extensively cover metro & regional WA. 
                                </p>
                                <div style={{
                                        height: '40vw',
                                        width: '40vw',
                                        backgroundColor: 'rgb(40,40,40)',
                                        borderRadius: '50%',
                                        display: 'table-cell',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                        padding:'2vw'
                                    }}>
                                    <span style={{color:'rgb(200,200,200)', fontSize:30}}>
                                        51
                                    </span>
                                    <br></br>
                                    <span style={{color:'rgb(200,200,200)', fontSize:12}}>
                                        Inspectors
                                    </span>
                                
                                </div>
                                <div style={{
                                        height: '40vw',
                                        width: '40vw',
                                        backgroundColor: 'rgb(40,40,40)',
                                        borderRadius: '50%',
                                        display: 'table-cell',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                        padding:'2vw'
                                    }}>
                                    <span style={{color:'rgb(200,200,200)', fontSize:30}}>
                                        4,000+
                                    </span>
                                    <br></br>
                                    <span style={{color:'rgb(200,200,200)', fontSize:12}}>
                                        Inspections completed
                                    </span>
                                
                                </div>
                                
    
                            </div>
    
    
                            <div style={{backgroundColor:'rgba(0,0,0,0.4)', padding:20}}>
                                <h1 style={{color:'white'}}>
                                    Industry leaders
                                </h1>
                                <br></br>
                                <div style={{flex:1, display: 'grid', placeItems: 'center center'}}>                                    
                                    <img style={{height:'30vh'}} src={require('../../assets/icons/seminar.png')} />
                                </div>  
                                <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                    We provide thought leadership on key issues impacting the building and property inspection industry and promote those considered views in key forums. We aim to lead by example through our professionalism and safety in the inspection industry by fostering best practice work and corporate standards. 
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                    The initial focus will be on Building and Pest Inspections but it is envisaged that this will be expanded over time to include a range of building and property inspection professions such as, Electrics, Plumbing, Gas, Asbestos and Drug. 
                                </p>
                                              
    
                            </div>
    
    
    
    
    
    
                        </div>
    
                        <FooterBarMobile />
                    </div>    
                </div>
                
            );
        } else {
            return (
                <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
                    <div id="background" style={{width:"100%", }}>
                        <NavBar isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>
    
                        <div style={{backgroundColor:'rgba(255,255,255,0.2)',marginTop:'10vh'}}>    
                            <div style={{height:'50vh', width:'60vw', marginLeft:'20vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <img style={{height:'30vh', marginTop:'20vh'}} src={require('../../assets/icons/check-mark.png')} />
                            </div>
                            <div style={{height:'30vh', width:'60vw', marginLeft:'20vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <p style={{fontSize:30, fontStyle:'italic', color:'rgb(220,220,220)'}}>
                                    Our vision is to be WA’s peak body representing professional independent building and property inspection businesses.
                                </p>
                            </div>
                            <div style={{height:'20vh'}}>
                            </div>
                            
    
                            <div style={{backgroundColor:'rgba(255,255,255,0.7)', padding:30}}>
                                <h1 style={{color:'rgb(40,40,40)', padding:20}}>
                                    Our team
                                </h1>
                                <br></br>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <div style={{flex:1, marginLeft:'10vw', marginRight:'0vw', display: 'grid', placeItems: 'center center'}}>
                                        <p style={{textAlign:'left', color:'rgb(40,40,40)', fontSize:16}}>
                                            Inspectors within the association are either a registered engineer, builder or surveyor. Our inspectors extensively cover metro & regional WA. 
                                        </p>
                                    </div>
                            
                                    <div style={{flex:1, marginLeft:'5vw', marginRight:'10vw'}}>   
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                            
                                            <div style={{
                                                    height: '200px',
                                                    width: '200px',
                                                    backgroundColor: 'rgb(40,40,40)',
                                                    borderRadius: '50%',
                                                    display: 'table-cell',
                                                    textAlign: 'center',
                                                    verticalAlign: 'middle',
                                                    padding:'2vw'
                                                }}>
                                                <span style={{color:'rgb(200,200,200)', fontSize:40}}>
                                                    51
                                                </span>
                                                <br></br>
                                                <span style={{color:'rgb(200,200,200)', fontSize:20}}>
                                                    Inspectors
                                                </span>
                                            
                                            </div>
                                            <div style={{
                                                    height: '200px',
                                                    width: '200px',
                                                    backgroundColor: 'rgb(40,40,40)',
                                                    borderRadius: '50%',
                                                    display: 'table-cell',
                                                    textAlign: 'center',
                                                    verticalAlign: 'middle',
                                                    padding:'2vw'
                                                }}>
                                                <span style={{color:'rgb(200,200,200)', fontSize:40}}>
                                                    4,000+
                                                </span>
                                                <br></br>
                                                <span style={{color:'rgb(200,200,200)', fontSize:20}}>
                                                    Inspections completed
                                                </span>
                                            
                                            </div>
    
    
                                        </div>
                                    </div>                                
                                </div>
                                <br></br>
    
                            </div>
    
    
                            <div style={{backgroundColor:'rgba(0,0,0,0.4)', padding:30}}>
                                <h1 style={{color:'white', padding:20}}>
                                    Industry leaders
                                </h1>
                                <br></br>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <div style={{flex:1, marginLeft:'10vw', marginRight:'0vw', display: 'grid', placeItems: 'center center'}}>                                    
                                        <img style={{height:'30vh'}} src={require('../../assets/icons/seminar.png')} />
                                    </div>
                                    <div style={{flex:2, marginLeft:'5vw', marginRight:'10vw'}}>   
                                        <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                            We provide thought leadership on key issues impacting the building and property inspection industry and promote those considered views in key forums. We aim to lead by example through our professionalism and safety in the inspection industry by fostering best practice work and corporate standards. 
                                        </p>
                                        <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                            The initial focus will be on Building and Pest Inspections but it is envisaged that this will be expanded over time to include a range of building and property inspection professions such as, Electrics, Plumbing, Gas, Asbestos and Drug. 
                                        </p>
                                        
                                    </div>                                
                                </div>
                                <br></br>
    
                            </div>
    
    
    
    
    
    
                        </div>
    
                        <FooterBar />
                    </div>    
                </div>
                
            );
        }
    }
     
    render() {
        return this.renderContent();
    }
  
}
export default About

