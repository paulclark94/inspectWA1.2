import React, { Component } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import { Route, Link } from 'react-router-dom'

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'

import './members.css'

import paper1 from '../../assets/files/private/Position Paper 1 2019 Delignification of Roof Tile Battens Approved.pdf'
import paper2 from '../../assets/files/private/Position Paper 2 2019 Elevated Moisture Levels in Masonay Walls Approve.._.pdf'
import paper3 from '../../assets/files/private/Position Paper 3 2019 Pre Purchase Builing Insepction Report.._.pdf'


class Members extends React.Component {
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
    
    mobileStyles = {
        banner: {
            width:'100%',
            height: '100vh', //Covers initial screen (Not fixed in place),
            contentAlign: 'center',
            textAlign: 'center',
            marginTop:'10vh'
        },
        BodySection: {
            backgroundColor:'rgba(0,0,0,0.2)',
            marginTop:'10vh',
            minHeight:'90vh'
        },
        BodySectionHeaderText: {
            color:'rgb(220,220,220)',
            padding:20
        },
        BodySectionTextDiv: {
            color:'rgb(255,255,255)',
            textAlign:'left',
            fontSize:'1rem',
            lineHeight:'1.2rem',
            width:'90vw',
            marginLeft:'5vw',
        },
        membersContainer: {
            width: '100%',
        },
        calendarContainer: {
            width: '90%',
            margin:'5%',
            marginTop:20,
            textAlign:'center',
            
        },
        docLibraryContainer: {
            width: '90%',
            margin:'5%',
            marginTop:20,
            textAlign:'center'
        },

        
    }

    styles = {
        banner: {
            width:'100%',
            height: '100vh', //Covers initial screen (Not fixed in place),
            contentAlign: 'center',
            textAlign: 'center',
            marginTop:'10vh'
        },
        BodySection: {
            backgroundColor:'rgba(0,0,0,0.2)',
            marginTop:'10vh',
            minHeight:'90vh'
        },
        BodySectionHeaderText: {
            color:'rgb(220,220,220)',
            padding:20
        },
        BodySectionTextDiv: {
            color:'rgb(255,255,255)',
            textAlign:'left',
            fontSize:'1rem',
            lineHeight:'1.2rem',
            width:'90vw',
            marginLeft:'5vw',
        },
        membersContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(100,100,100,0.2)',
            display:'flex',
        },
        calendarContainer: {
            width: '40%',
            margin:'5%',
            marginTop:20,
            textAlign:'center',
            
        },
        docLibraryContainer: {
            width: '40%',
            margin:'5%',
            marginTop:20,
            textAlign:'center'
        },

        
    }

    handleClick = (msg) => {
        console.log("clicked");
        alert('clicked');        
        alert(msg);
    }

    
    
    renderContent = () => {
        if (isMobile) {
            return (
                <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
                    <div id="background" style={{width:"100%", }}>
                        <NavBarMobile isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>

                            <div style={this.mobileStyles.BodySection}>
                                <h1 style={this.mobileStyles.BodySectionHeaderText}>
                                    Members area
                                </h1>
                                <div style={this.mobileStyles.BodySectionTextDiv}>
                                    
                                    <div style={this.mobileStyles.membersContainer}>
                                        <div style={this.mobileStyles.calendarContainer}>
                                            <h3>
                                                Events Calendar
                                            </h3>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Event</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Members forum</td>
                                                        <td>24 Sept 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Inaugural AGM</td>
                                                        <td>28 May 2020</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>

                                        </div>
                                        <div style={this.mobileStyles.docLibraryContainer}>
                                            <h3>
                                                Document library
                                            </h3>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Document</th>
                                                        <th>Date modified</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href={paper1}>
                                                                <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Dilignification of Tile Battens
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td>9th September 2019</td>
                                                        <td>Draft</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href={paper2}>
                                                                <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Moisture in masonary walls
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td>9th September 2019</td>
                                                        <td>Draft</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href={paper3}>
                                                                <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Pre Purchase inspection clarity
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td>9th September 2019</td>
                                                        <td>Draft</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>

                                        </div>
                                    </div>
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

                        <div>    
                            <div style={this.styles.BodySection}>
                                <h1 style={this.styles.BodySectionHeaderText}>
                                    InspectWA members area
                                </h1>
                                <div style={this.styles.BodySectionTextDiv}>
                                    
                                    <div style={this.styles.membersContainer}>
                                        <div style={this.styles.calendarContainer}>
                                            <h3>
                                                Events Calendar
                                            </h3>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Event</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Members forum</td>
                                                        <td>24 Sept 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Inaugural AGM</td>
                                                        <td>28 May 2020</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>

                                        </div>
                                        <div style={this.styles.docLibraryContainer}>
                                            <h3>
                                                Document library
                                            </h3>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Document</th>
                                                        <th>Date modified</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href={paper1}>
                                                                <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Dilignification of Tile Battens
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td>9th September 2019</td>
                                                        <td>Draft</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href={paper1}>
                                                                <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Moisture in masonary walls
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td>9th September 2019</td>
                                                        <td>Draft</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href={paper1}>
                                                                <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Pre Purchase inspection clarity
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td>9th September 2019</td>
                                                        <td>Draft</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>

                                        </div>
                                    </div>
                                </div>
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
export default Members

