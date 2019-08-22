import React from 'react';

import NavBar from '../core/navBar'

import FooterBar from '../core/footerBar'



class Membership extends React.Component {
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
            padding:10,
            fontSize:'1rem',
            lineHeight:'1rem',
            width:'80vw',
            marginLeft:'10vw',
        },
        
    }

    render() { 
        return (
            <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
                <div id="background" style={{width:"100%", }}>
                    <NavBar />

                    <div>    
                        <div style={this.styles.BodySection}>
                            <h1 style={this.styles.BodySectionHeaderText}>
                                Membership
                            </h1>
                            <div style={this.styles.BodySectionTextDiv}>
                                
                            </div>
                        </div>
                    </div>

                    <FooterBar />
                </div>    
            </div>
            
        );
    }
  
}
export default Membership

