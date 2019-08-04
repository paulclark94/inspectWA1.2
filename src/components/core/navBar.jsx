import React, { Component } from 'react';

//Import stylesheets


class NavBar extends Component {
    state = {
        
    };

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
                    <a href="/" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Home</span>
                    </a>
                    <a href="/about" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>About us</span>
                    </a>
                    <a style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Membership</span>
                    </a>
                    <a style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Code of ethics</span>
                    </a>
                    <a style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Contact</span>
                    </a>
                    <a style={this.styles.headerLink}>
                        <div style={this.styles.headerLoginButton}>Login</div>
                    </a>
                </div>
                    
            </div>
         );
    }
}
 
export default NavBar;