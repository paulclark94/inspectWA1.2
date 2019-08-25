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
                            <div style={{ display: 'inline-block', width:'60vw'}}>
                                <p style={{color:'white'}}>
                                    To become a member of InspectWA, please click on the button below to download the membership form.     
                                    Complete the form and email it to info@inspectwa.org.au     
                                </p>
                                <img style={{height:'30vh', margin:'5vh'}} src={require('../../assets/icons/file.png')} />
                                <div style={{backgroundColor:'rgb(100,100,100)', borderRadius:10, padding:10, color:'white', width:'30vw', marginLeft:'15vw', cursor:'pointer'}}>Download the membership form</div>

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

