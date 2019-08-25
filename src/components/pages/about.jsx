import React from 'react';

import NavBar from '../core/navBar'

import FooterBar from '../core/footerBar'



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
            width:'80vw',
            marginLeft:'10vw',
            fontSize:'1rem',
            lineHeight:'1.2rem'
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
            <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
                <div id="background" style={{width:"100%", }}>
                    <NavBar />

                    <div style={this.styles.BodySection}>    
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
                                        <div style={{flex:1}}>
                                            <span style={{color:'rgb(40,40,40)', fontSize:36}}>
                                                51
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(40,40,40)', fontSize:16}}>
                                                Inspectors
                                            </span>
                                        </div>
                                        <div style={{flex:1}}>
                                            <span style={{color:'rgb(40,40,40)', fontSize:36}}>
                                                10,000+
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(40,40,40)', fontSize:16}}>
                                                Inspections completed
                                            </span>
                                        </div>


                                    </div>
                                </div>                                
                            </div>
                            <br></br>

                        </div>


                        <div style={{backgroundColor:'rgba(0,0,0,0.4)', padding:30}}>
                            <h1 style={this.styles.homeBodySectionHeaderText}>
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
export default About

