import React from 'react';

import NavBar from '../core/navBar'

import FooterBar from '../core/footerBar'



class Inspectors extends React.Component {
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
        searchContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(100,100,100,0.2)',
            padding: 20
        },
        searchOptionsContainer: {
            width: '100%',
            display:'flex'
        },
        searchResultsContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(120,120,120,0.2)',
            padding: 20
        },
        
    }

    
    GenerateOpacity = (Name, Phone, Email, Qualification, PIInsurance ) => {
        return(
            <div style={{backgroundColor:'rgba(0,0,0,0.6)', borderRadius:10, padding:10, margin:10, width:'95%', height:100}}>
                <div style={{flex: 1, flexDirection: 'row', width: '100%', textAlign:'left'}}>
                    <div style={{width: '30%', height: 80, padding:5, contentAlign:'center', justifyContent:'center'}}>
                        <span style={{color:'white', fontSize:20}}>
                            {Name} - {Phone} - {Email} - {Qualification} - {PIInsurance}
                        </span>
                    
                    </div>
                </div>

            </div>    
        )
    }

    renderTiles = () => {
        const views = [];

        //Alert.alert(JSON.stringify(this.props.upcomingObject));
        //Alert.alert(JSON.stringify(this.props.upcomingObject.length));

        const InspectorsObject = [
            {'Name': 'Bob Harrison', 'Phone':'0450347281', 'Email':'bob.harrison@outlook.com.au', 'InspectionTypes':{}, 'Location':{}, 'PropertyTypes':{}, 'Qualification': 'WA Registered Builder', 'PIInsurance':true},
            {'Name': 'John Grey', 'Phone':'0450347281', 'Email':'bob.harrison@outlook.com.au', 'InspectionTypes':{}, 'Location':{}, 'PropertyTypes':{}, 'Qualification': 'WA Registered Builder', 'PIInsurance':true},
            {'Name': 'Paul Jiang', 'Phone':'0450347281', 'Email':'bob.harrison@outlook.com.au', 'InspectionTypes':{}, 'Location':{}, 'PropertyTypes':{}, 'Qualification': 'WA Registered Builder', 'PIInsurance':true},
        ]

        try {
            
            for ( var i =0; i < InspectorsObject.length; i++){
                var Name = InspectorsObject[i].Name;
                var Phone = InspectorsObject[i].Phone;
                var Email = InspectorsObject[i].Email;
                var Qualification = InspectorsObject[i].Qualification;
                var PIInsurance = InspectorsObject[i].PIInsurance;
                
                views.push(             
                    this.GenerateOpacity(Name, Phone, Email, Qualification, PIInsurance )
                );

            } // % buttons are created. 
        } catch(e) {
            //An error has occurred
        }
        return views;
    }




    render() { 
        return (
            <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0, backgroundColor:'black'}}>
                <div id="background" style={{width:"100%", }}>
                    <NavBar />

                    <div>    
                        <div style={this.styles.BodySection}>
                            <h1 style={this.styles.BodySectionHeaderText}>
                                InspectWA - Find an inspector
                            </h1>
                            <div style={this.styles.BodySectionTextDiv}>
                                
                                <div style={this.styles.searchContainer}>
                                    <p>
                                        Refine the search criteria below to find the inspector that best suits your needs. 
                                    </p>
                                    <div style={this.styles.searchOptionsContainer}>    
                                        <div style={{width:'32%', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:10, padding:10, marginRight:'2%', fontSize:'0.8rem', marginTop:'1vh', marginBottom:'4vh'}}>
                                            <p style={{fontSize:'1.5rem'}}>Inspection types</p>
                                            
                                            <input type="checkbox" id="type-all"></input><span>Select all</span>
                                            <br></br>
                                            <input type="checkbox" id="type-none"></input><span>Deselect all</span>
                                            <br></br>
                                            <br></br>
                                            <input type="checkbox" id="type-1"></input><span>Pre purchase Structural</span>
                                            <br></br>
                                            <input type="checkbox" id="type-2"></input><span>Pre Purchase Building</span>
                                            <br></br>
                                            <input type="checkbox" id="type-3"></input><span>Staged Construction</span>
                                            <br></br>
                                            <input type="checkbox" id="type-4"></input><span>Practical Completion</span>
                                            <br></br>
                                            <input type="checkbox" id="type-5"></input><span>Statutory Defect Liability</span>
                                            <br></br>
                                            <input type="checkbox" id="type-6"></input><span>Builders Indemnity</span>
                                            <br></br>
                                            <input type="checkbox" id="type-7"></input><span>Dilapidation Inspection</span>
                                            <br></br>
                                            <input type="checkbox" id="type-8"></input><span>Investigation</span>
                                            <br></br>
                                            <input type="checkbox" id="type-9"></input><span>Maintenance Inspection</span>
                                            <br></br>
                                            <input type="checkbox" id="type-10"></input><span>WA Building Commission Independent Expert</span>
                                            <br></br>
                                            <input type="checkbox" id="type-11"></input><span>State Administrative Tribunal Independent Expert</span>
                                            <br></br>
                                            <input type="checkbox" id="type-12"></input><span>Litigation - Independent Expert Opinion</span>
                                            <br></br>
                                            <input type="checkbox" id="type-13"></input><span>Special Purpose Inspection</span>
                                        </div> 
                                        <div style={{width:'32%', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:10, padding:10, marginRight:'2%', fontSize:'0.8rem', marginTop:'1vh', marginBottom:'4vh'}}>
                                            <p style={{fontSize:'1.5rem'}}>Locations</p>
                                            
                                            <input type="checkbox" id="location-all"></input><span>Select all</span>
                                            <br></br>
                                            <input type="checkbox" id="location-none"></input><span>Deselect all</span>
                                            <br></br>
                                            <br></br>
                                            <input type="checkbox" id="location-1"></input><span>Perth Metropolitan Area</span>
                                            <br></br>
                                            <input type="checkbox" id="location-2"></input><span>Bunbury</span>
                                            <br></br>
                                            <input type="checkbox" id="location-3"></input><span>Mandurah</span>
                                            <br></br>
                                            <input type="checkbox" id="location-4"></input><span>Margaret River</span>
                                            <br></br>
                                            <input type="checkbox" id="location-5"></input><span>Busselton</span>
                                            <br></br>
                                            <input type="checkbox" id="location-6"></input><span>Bunbury</span>
                                            <br></br>
                                            <input type="checkbox" id="location-7"></input><span>Great Southern</span>
                                            <br></br>
                                            <input type="checkbox" id="location-8"></input><span>Goldfields - Esperance</span>
                                            <br></br>
                                            <input type="checkbox" id="location-9"></input><span>Wheat Belt</span>
                                            <br></br>
                                            <input type="checkbox" id="location-10"></input><span>Mid-West</span>
                                            <br></br>
                                            <input type="checkbox" id="location-11"></input><span>Pilbara</span>
                                            <br></br>
                                            <input type="checkbox" id="location-12"></input><span>Kimberley </span>
                                            <br></br>
                                        </div> 
                                        <div style={{width:'32%', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:10, padding:10, fontSize:'0.8rem', marginTop:'1vh', marginBottom:'4vh'}}>
                                            <p style={{fontSize:'1.5rem'}}>Property types</p>
                                            
                                            <input type="checkbox" id="property-all"></input><span>Select all</span>
                                            <br></br>
                                            <input type="checkbox" id="property-none"></input><span>Deselect all</span>
                                            <br></br>
                                            <br></br>
                                            <input type="checkbox" id="property-1"></input><span>Residential</span>
                                            <br></br>
                                            <input type="checkbox" id="property-2"></input><span>Apartment – Individual Lots </span>
                                            <br></br>
                                            <input type="checkbox" id="property-3"></input><span>Commercial </span>
                                            <br></br>
                                            <input type="checkbox" id="property-4"></input><span>Industrial</span>
                                            <br></br>
                                            <input type="checkbox" id="property-5"></input><span>Strata – Entire Complex </span>
                                        </div> 
                                    </div>  
                                    <div style={this.styles.searchResultsContainer}>                                        
                                        {this.renderTiles()}
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
export default Inspectors

