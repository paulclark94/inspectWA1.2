import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

//Import stylesheets


class Home extends Component {
    state = {
        
    };

    styles = {
        banner: {
            width:'100%',
            height: '100vh', //Covers initial screen (Not fixed in place),
            contentAlign: 'center',
            textAlign: 'center',
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
        bannerText: {
            fontSize:'2vh',
            color:'rgb(220,220,220)',
            cursor: 'pointer'
        },
        bannerButton: {
            borderRadius:'1vh',
            background:'rgba(100,100,100,0.5)',
            fontSize:'2vh',
            height:'6vh',
            lineHeight:'6vh', 
            width:'20vw', 
            color:'white',
            cursor: 'pointer',
            margin:5
        }
    }

    render() { 
        return ( 
            <div>
                
                <div style={this.styles.banner}>            
                    <img src={require("../../assets/images/logoLightSub.png")} style={{height:'30vh', marginTop:'20vh'}}></img>  
                    <br></br> 
                    <br></br> 
                    <br></br>
                    <div style={{ display: 'inline-block', width:'60vw'}}>
                        <p style={this.styles.bannerText}>
                            Welcome to The Industry Association of Building and Property Inspectors in WA – Inspect WA. 
                            Inspect WA’s vision is to be Western Australia’s peak body representing professional independent building and property inspection businesses.
                        </p>
                        <div style={{ display: 'inline-block'}}>
                            <Link to="/inspectors">
                                <div style={this.styles.bannerButton}>Find an inspector</div>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
         );
    }
}
 
export default Home;