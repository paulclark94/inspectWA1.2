import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'

import { addtoken } from '../../actions/addtoken'
import { removetoken } from '../../actions/removetoken'

import Auth0Lock from 'auth0-lock';

import { elastic as Menu } from 'react-burger-menu'




var lock = new Auth0Lock('lVnzQWTkw8KQa7ZrU94L2Tx0BCYVnQPj', 'pclark.au.auth0.com', {   
    theme: {
        primaryColor: 'rgb(100,100,100)',            
    },    
    languageDictionary: {
        title: "InspectWA sign in"
    },    
    allowSignUp: false
});




class NavBarMobile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: 0,
            isAuthenticated: false
        }
    } 


    loginBtnClick = () => {
        let that = this;
        lock.checkSession({}, (error, authResult) => {     
            if (error || !authResult) {
                lock.on("authenticated", function(authResult) {            
                    //Update state of parent component
                    that.props.authHandler(true);
        
                    //Set the token in the local storage
                    localStorage.setItem("accessToken", authResult.accessToken);           
                    
                });
                
                lock.show();
            } else {  
                //USER IS CURRENTLY LOGGED IN
                that.props.history.push('/members')
            }
      
        })
              
    }

    checkToken = () => {
        lock.checkSession({}, function (error, authResult) {
            if (error || !authResult) {
                lock.show();
                alert('dead')
            } else {
                alert('alive')
                // user has an active session, so we can use the accessToken directly.
                lock.getUserInfo(authResult.accessToken, function (error, profile) {

                        console.log(error, profile);
                });

            }
        });
    }

    logout = () => {
        lock.logout();
    }

    styles = {
        bar: {
            width:'100%',
            background: 'rgb(60,60,60)',
            color: 'rgb(200,200,200)',
            height: '10vh',
            left: 0,
            position: 'fixed',
            top: 0,
            display:'flex',
            flexDirection:'row'
        },
        headerLeft: {
            display:'flex',
            flexDirection:'row',
            float:'left',
            width:'40vw'
        },
        headerCenter: {
            display:'flex',
            flexDirection:'row',
            float:'left',
            width:0
        },
        headerRight: {
            display:'flex',
            flexDirection:'row',
            float:'right',
            width:'60vw'
        },
        headerLoginButton: {
            borderRadius:'1vh',
            background:'rgba(100,100,100)',
            fontSize:'2vh',
            height:'6vh',
            lineHeight:'6vh',
        },
        headerMemberButton: {
            borderRadius:'1vh',
            color:'rgba(100,100,100)',
            background: 'rgb(200,200,200)',
            fontSize:'2vh',
            height:'6vh',
            lineHeight:'6vh',
        },
        headerLink: {
            width:'10vw',
            cursor:'pointer',
            padding:'2vh',
            textDecoration: 'none'
        },
        headerLinkText: {
            fontSize:'2vh',
            lineHeight:'6vh',
            color: 'rgb(200,200,200)',
        },

    }


    menuStyles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '3vh',
          height: '3vh',
          left: '3.5vh',
          top: '3.5vh'
        },
        bmBurgerBars: {
          background: 'rgb(200,200,200)'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: 'rgb(60,60,60)',
          padding: '2vh',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: 'rgb(60,60,60)'
        },
        bmItemList: {
          color: 'rgb(200,200,200)',
          textAlign:'left',
          textDecoration: 'none',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block',
          textDecoration: 'none',
          textAlign:'left'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
    }
      

    render() { 
        return ( 
            <div style={{
                    width:'100%',
                    background: 'rgb(60,60,60)',
                    color: 'rgb(200,200,200)',
                    height: '10vh',
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    display:'flex',
                    flexDirection:'row',
                    zIndex:1000
                }}>
                <div style={{width:'40vw', height:'10vh', display:'flex', flexDirection:'row'}}>              
                
                    <Menu disableAutoFocus width={ '70vw' }styles={ this.menuStyles } >
                    
                        <Link to="/" style={{}}>
                            <p style={{color:'rgb(200,200,200)', textDecoration:'none'}}>Home</p>
                        </Link>
                        <br></br>
                        <Link to="/about" style={{}}>
                            <p style={{color:'rgb(200,200,200)', textDecoration:'none'}}>About</p>
                        </Link>
                        <br></br>
                        <Link to="/membership" style={{}}>
                            <p style={{color:'rgb(200,200,200)', textDecoration:'none'}}>Join</p>
                        </Link>
                        <br></br>
                        <Link to="/ethics" style={{}}>
                            <p style={{color:'rgb(200,200,200)', textDecoration:'none'}}>Ethics</p>
                        </Link>
                        <br></br>
                        <Link to="/contact" style={{}}>
                            <p style={{color:'rgb(200,200,200)', textDecoration:'none'}}>Contact</p>
                        </Link>
                        <br></br>
                        <a onClick={this.loginBtnClick} style={{}}>
                            <div style={{color:'rgb(200,200,200)', textDecoration:'none'}}>Members</div>
                        </a>
                    </Menu>
                    <span style={{color:'rgb(200,200,200)', fontSize:'3vh', lineHeight:'3vh', marginLeft:'8vh', marginTop:'3.5vh'}}>
                        Menu
                    </span>
                </div>                
                <div style={{width:'20vw'}}>
                
                </div>
                <div style={{width:'40vw'}}>
                
                    <img src={require("../../assets/images/logoLight.png")} style={{height:'8vh', marginTop:'1vh'}}></img>          
                </div>
                    
            </div>
            );
        
    }
}


export default withRouter(NavBarMobile)