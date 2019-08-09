import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import { addtoken } from '../../actions/addtoken'
import { removetoken } from '../../actions/removetoken'

import Auth0Lock from 'auth0-lock';






var lock = new Auth0Lock('lVnzQWTkw8KQa7ZrU94L2Tx0BCYVnQPj', 'pclark.au.auth0.com', {   
    theme: {
        primaryColor: 'rgb(100,100,100)',            
    },    
    languageDictionary: {
        title: "InspectWA sign in"
    },    
    allowSignUp: false
});




class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: 0
        }
    } 

    loginBtnClick = () => {
        lock.on("authenticated", function(authResult) {
            alert(authResult)
            lock.getUserInfo(authResult.accessToken, function(error, profile) {
              if (error) {
                // Handle error
                return;
              }
           
              localStorage.setItem("accessToken", authResult.accessToken);
              localStorage.setItem("profile", JSON.stringify(profile));
           
              // Update DOM
            });
        });
        
        lock.show();
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
            width: '100%',
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

    render() { 
        return ( 
            <div style={this.styles.bar}>
                <div style={this.styles.headerLeft}>
                    <img src={require("../../assets/images/logoLight.png")} style={{height:'10vh', marginTop:'1vh'}}></img>
                </div>                
                <div style={this.styles.headerCenter}>
                </div>
                <div style={this.styles.headerRight}>
                    <Link to="/" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Home</span>
                    </Link>
                    <Link to="/about" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>About us</span>
                    </Link>
                    <a style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Membership</span>
                    </a>
                    <a style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Code of ethics</span>
                    </a>
                    <a onClick={this.checkToken} style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Contact</span>
                    </a>
                    <a onClick={this.checkToken} style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Test token</span>
                    </a>
                    <a onClick={this.logout} style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Logout</span>
                    </a>
                    <Link to="/members" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Members</span>
                    </Link>
                    <a onClick={this.loginBtnClick} style={this.styles.headerLink}>
                        <div style={this.styles.headerLoginButton}>Login</div>
                    </a>
                </div>
                    
            </div>
         );
    }
}

export default NavBar