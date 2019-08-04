import React, { Component } from 'react';

//Import stylesheets


class Home extends Component {
    state = {
        
    };

    styles = {
        banner: {
            width:'100%',
            height: '100vh', //Covers initial screen (Not fixed in place),
        },
        homeBodySection: {
            backgroundColor:'rgba(255,255,255,0.2)',
            height:'30vh',
            padding:10
        },
        homeBodySectionHeaderText: {
            color:'rgb(220,220,220)'
        },
        homeBodySectionText: {
            color:'rgb(255,255,255)'
        },
    }

    render() { 
        return ( 
            <div>
                
                <div style={this.styles.banner}>            
                    <img src={require("../../assets/images/logoLightSub.png")} style={{height:'30vh', marginTop:'40vh'}}></img>                    
                </div>

                <div style={this.styles.homeBodySection}>
                    <h1 style={this.styles.homeBodySectionHeaderText}>
                        Find a building inspector in WA
                    </h1>
                    <p style={this.styles.homeBodySectionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>
         );
    }
}
 
export default Home;