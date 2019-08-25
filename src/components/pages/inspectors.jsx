import React from 'react';

import NavBar from '../core/navBar'

import FooterBar from '../core/footerBar'



class Inspectors extends React.Component {
    constructor(props) {
        super(props);

        //Declare all refs        
        this.checkBoxTypeAll = React.createRef();
        this.checkBoxTypeNone = React.createRef();
        this.checkBoxLocationAll = React.createRef();
        this.checkBoxLocationNone = React.createRef();
        this.checkBoxPropertyAll = React.createRef();
        this.checkBoxPropertyNone = React.createRef();


        this.checkBoxType1 = React.createRef();
        this.checkBoxType2 = React.createRef();
        this.checkBoxType3 = React.createRef();
        this.checkBoxType4 = React.createRef();
        this.checkBoxType5 = React.createRef();
        this.checkBoxType6 = React.createRef();
        this.checkBoxType7 = React.createRef();
        this.checkBoxType8 = React.createRef();
        this.checkBoxType9 = React.createRef();
        this.checkBoxType10 = React.createRef();
        this.checkBoxType11 = React.createRef();
        this.checkBoxType12 = React.createRef();
        this.checkBoxType13 = React.createRef();
        this.checkBoxLocation1 = React.createRef();
        this.checkBoxLocation2 = React.createRef();
        this.checkBoxLocation3 = React.createRef();
        this.checkBoxLocation4 = React.createRef();
        this.checkBoxLocation5 = React.createRef();
        this.checkBoxLocation6 = React.createRef();
        this.checkBoxLocation7 = React.createRef();
        this.checkBoxLocation8 = React.createRef();
        this.checkBoxLocation9 = React.createRef();
        this.checkBoxLocation10 = React.createRef();
        this.checkBoxLocation11 = React.createRef();
        this.checkBoxLocation12 = React.createRef();
        this.checkBoxProperty1 = React.createRef();
        this.checkBoxProperty2 = React.createRef();
        this.checkBoxProperty3 = React.createRef();
        this.checkBoxProperty4 = React.createRef();
        this.checkBoxProperty5 = React.createRef();

        //Initialise state
        this.state = {
            resultCount: 0,
            type1: true,
            type2: true,
            type3: true,
            type4: true,
            type5: true,
            type6: true,
            type7: true,
            type8: true,
            type9: true,
            type10: true,
            type11: true,
            type12: true,
            type13: true,
            location1: true,
            location2: true,
            location3: true,
            location4: true,
            location5: true,
            location6: true,
            location7: true,
            location8: true,
            location9: true,
            location10: true,
            location11: true,
            location12: true,
            property1: true,
            property2: true,
            property3: true,
            property4: true,
            property5: true,

        }
  
    } 

    componentDidMount() {
        //Pre-apply all checkboxes
            this.checkBoxTypeAll.current.checked = true

            this.checkBoxType1.current.checked = true
            this.checkBoxType2.current.checked = true
            this.checkBoxType3.current.checked = true
            this.checkBoxType4.current.checked = true
            this.checkBoxType5.current.checked = true
            this.checkBoxType6.current.checked = true
            this.checkBoxType7.current.checked = true
            this.checkBoxType8.current.checked = true
            this.checkBoxType9.current.checked = true
            this.checkBoxType10.current.checked = true
            this.checkBoxType11.current.checked = true
            this.checkBoxType12.current.checked = true
            this.checkBoxType13.current.checked = true

            this.checkBoxLocationAll.current.checked = true

            this.checkBoxLocation1.current.checked = true
            this.checkBoxLocation2.current.checked = true
            this.checkBoxLocation3.current.checked = true
            this.checkBoxLocation4.current.checked = true
            this.checkBoxLocation5.current.checked = true
            this.checkBoxLocation6.current.checked = true
            this.checkBoxLocation7.current.checked = true
            this.checkBoxLocation8.current.checked = true
            this.checkBoxLocation9.current.checked = true
            this.checkBoxLocation10.current.checked = true
            this.checkBoxLocation11.current.checked = true
            this.checkBoxLocation12.current.checked = true
            
            this.checkBoxPropertyAll.current.checked = true

            this.checkBoxProperty1.current.checked = true
            this.checkBoxProperty2.current.checked = true
            this.checkBoxProperty3.current.checked = true
            this.checkBoxProperty4.current.checked = true
            this.checkBoxProperty5.current.checked = true
    }
    

    selectAll = (set) => {
        if(set=='type') {
            this.checkBoxTypeNone.current.checked = false

            this.checkBoxType1.current.checked = true
            this.checkBoxType2.current.checked = true
            this.checkBoxType3.current.checked = true
            this.checkBoxType4.current.checked = true
            this.checkBoxType5.current.checked = true
            this.checkBoxType6.current.checked = true
            this.checkBoxType7.current.checked = true
            this.checkBoxType8.current.checked = true
            this.checkBoxType9.current.checked = true
            this.checkBoxType10.current.checked = true
            this.checkBoxType11.current.checked = true
            this.checkBoxType12.current.checked = true
            this.checkBoxType13.current.checked = true
            
            this.setState({type1:true})
            this.setState({type2:true})
            this.setState({type3:true})
            this.setState({type4:true})
            this.setState({type5:true})
            this.setState({type6:true})
            this.setState({type7:true})
            this.setState({type8:true})
            this.setState({type9:true})
            this.setState({type10:true})
            this.setState({type11:true})
            this.setState({type12:true})
            this.setState({type13:true})
        }
        if(set=='location') {
            this.checkBoxLocationNone.current.checked = false

            this.checkBoxLocation1.current.checked = true
            this.checkBoxLocation2.current.checked = true
            this.checkBoxLocation3.current.checked = true
            this.checkBoxLocation4.current.checked = true
            this.checkBoxLocation5.current.checked = true
            this.checkBoxLocation6.current.checked = true
            this.checkBoxLocation7.current.checked = true
            this.checkBoxLocation8.current.checked = true
            this.checkBoxLocation9.current.checked = true
            this.checkBoxLocation10.current.checked = true
            this.checkBoxLocation11.current.checked = true
            this.checkBoxLocation12.current.checked = true
            
            this.setState({location1:true})
            this.setState({location2:true})
            this.setState({location3:true})
            this.setState({location4:true})
            this.setState({location5:true})
            this.setState({location6:true})
            this.setState({location7:true})
            this.setState({location8:true})
            this.setState({location9:true})
            this.setState({location10:true})
            this.setState({location11:true})
            this.setState({location12:true})
        }
        if(set=='property') {
            this.checkBoxPropertyNone.current.checked = false

            this.checkBoxProperty1.current.checked = true
            this.checkBoxProperty2.current.checked = true
            this.checkBoxProperty3.current.checked = true
            this.checkBoxProperty4.current.checked = true
            this.checkBoxProperty5.current.checked = true
            
            this.setState({property1:true})
            this.setState({property2:true})
            this.setState({property3:true})
            this.setState({property4:true})
            this.setState({property5:true})
        }
    }

    

    deselectAll = (set) => {
        if(set=='type') {
            this.checkBoxTypeAll.current.checked = false

            this.checkBoxType1.current.checked = false
            this.checkBoxType2.current.checked = false
            this.checkBoxType3.current.checked = false
            this.checkBoxType4.current.checked = false
            this.checkBoxType5.current.checked = false
            this.checkBoxType6.current.checked = false
            this.checkBoxType7.current.checked = false
            this.checkBoxType8.current.checked = false
            this.checkBoxType9.current.checked = false
            this.checkBoxType10.current.checked = false
            this.checkBoxType11.current.checked = false
            this.checkBoxType12.current.checked = false
            this.checkBoxType13.current.checked = false
            
            this.setState({type1:false})
            this.setState({type2:false})
            this.setState({type3:false})
            this.setState({type4:false})
            this.setState({type5:false})
            this.setState({type6:false})
            this.setState({type7:false})
            this.setState({type8:false})
            this.setState({type9:false})
            this.setState({type10:false})
            this.setState({type11:false})
            this.setState({type12:false})
            this.setState({type13:false})
        }
        if(set=='location') {
            this.checkBoxLocationAll.current.checked = false

            this.checkBoxLocation1.current.checked = false
            this.checkBoxLocation2.current.checked = false
            this.checkBoxLocation3.current.checked = false
            this.checkBoxLocation4.current.checked = false
            this.checkBoxLocation5.current.checked = false
            this.checkBoxLocation6.current.checked = false
            this.checkBoxLocation7.current.checked = false
            this.checkBoxLocation8.current.checked = false
            this.checkBoxLocation9.current.checked = false
            this.checkBoxLocation10.current.checked = false
            this.checkBoxLocation11.current.checked = false
            this.checkBoxLocation12.current.checked = false
            this.setState({location1:false})
            this.setState({location2:false})
            this.setState({location3:false})
            this.setState({location4:false})
            this.setState({location5:false})
            this.setState({location6:false})
            this.setState({location7:false})
            this.setState({location8:false})
            this.setState({location9:false})
            this.setState({location10:false})
            this.setState({location11:false})
            this.setState({location12:false})
        }
        if(set=='property') {
            this.checkBoxPropertyAll.current.checked = false

            this.checkBoxProperty1.current.checked = false
            this.checkBoxProperty2.current.checked = false
            this.checkBoxProperty3.current.checked = false
            this.checkBoxProperty4.current.checked = false
            this.checkBoxProperty5.current.checked = false
            
            this.setState({property1:false})
            this.setState({property2:false})
            this.setState({property3:false})
            this.setState({property4:false})
            this.setState({property5:false})
        }
    }

    checkboxChange = (key) => {
        if(key ==='type1') { this.setState(prevState => ({type1: !prevState.type1})); }
        if(key ==='type2') { this.setState(prevState => ({type2: !prevState.type2})); }
        if(key ==='type3') { this.setState(prevState => ({type3: !prevState.type3})); }
        if(key ==='type4') { this.setState(prevState => ({type4: !prevState.type4})); }
        if(key ==='type5') { this.setState(prevState => ({type5: !prevState.type5})); }
        if(key ==='type6') { this.setState(prevState => ({type6: !prevState.type6})); }
        if(key ==='type7') { this.setState(prevState => ({type7: !prevState.type7})); }
        if(key ==='type8') { this.setState(prevState => ({type8: !prevState.type8})); }
        if(key ==='type9') { this.setState(prevState => ({type9: !prevState.type9})); }
        if(key ==='type10') { this.setState(prevState => ({type10: !prevState.type10})); }
        if(key ==='type11') { this.setState(prevState => ({type11: !prevState.type11})); }
        if(key ==='type12') { this.setState(prevState => ({type12: !prevState.type12})); }
        if(key ==='type13') { this.setState(prevState => ({type13: !prevState.type13})); }
        
        if(key ==='location1') { this.setState(prevState => ({location1: !prevState.location1})); }
        if(key ==='location2') { this.setState(prevState => ({location2: !prevState.location2})); }
        if(key ==='location3') { this.setState(prevState => ({location3: !prevState.location3})); }
        if(key ==='location4') { this.setState(prevState => ({location4: !prevState.location4})); }
        if(key ==='location5') { this.setState(prevState => ({location5: !prevState.location5})); }
        if(key ==='location6') { this.setState(prevState => ({location6: !prevState.location6})); }
        if(key ==='location7') { this.setState(prevState => ({location7: !prevState.location7})); }
        if(key ==='location8') { this.setState(prevState => ({location8: !prevState.location8})); }
        if(key ==='location9') { this.setState(prevState => ({location9: !prevState.location9})); }
        if(key ==='location10') { this.setState(prevState => ({location10: !prevState.location10})); }
        if(key ==='location11') { this.setState(prevState => ({location11: !prevState.location11})); }
        if(key ==='location12') { this.setState(prevState => ({location12: !prevState.location12})); }        
        
        if(key ==='property1') { this.setState(prevState => ({property1: !prevState.property1})); }
        if(key ==='property2') { this.setState(prevState => ({property2: !prevState.property2})); }
        if(key ==='property3') { this.setState(prevState => ({property3: !prevState.property3})); }
        if(key ==='property4') { this.setState(prevState => ({property4: !prevState.property4})); }
        if(key ==='property5') { this.setState(prevState => ({property5: !prevState.property5})); }
        

    }
    
    GenerateOpacity = (Name, Phone, Email, Qualification, PIInsurance ) => {
        return(
            <div style={{backgroundColor:'rgba(0,0,0,0.6)', borderRadius:10, padding:5, margin:10, width:'100%', height:100}}>
                <div style={{display:'flex', flexDirection: 'row', width: '100%', textAlign:'left'}}>
                    <div style={{width:'33%', height: 80, padding:10, contentAlign:'center', justifyContent:'center'}}>
                        <span style={{color:'rgb(150,150,150)', fontSize:10}}>
                            INSPECTOR
                        </span>
                        <br></br>
                        <span style={{color:'white', fontSize:30}}>
                            {Name}
                        </span>
                    
                    </div>
                    <div style={{width:'33%', height: 80, contentAlign:'center', justifyContent:'center'}}>
                        <span style={{color:'rgb(150,150,150)', fontSize:10}}>
                            PHONE
                        </span>
                        <br></br>
                        <span style={{color:'white', fontSize:20}}>
                            {Phone}
                        </span>
                        <br></br>
                        <span style={{color:'rgb(150,150,150)', fontSize:10}}>
                            EMAIL
                        </span>
                        <br></br>
                        <span style={{color:'white', fontSize:20}}>
                            {Email}
                        </span>
                    
                    </div>
                    <div style={{width:'33%', height: 80, contentAlign:'center', justifyContent:'center'}}>
                        <span style={{color:'rgb(150,150,150)', fontSize:10}}>
                            QUALIFICATION
                        </span>
                        <br></br>
                        <span style={{color:'white', fontSize:20}}>
                            {Qualification}
                        </span>
                        <br></br>
                        <span style={{color:'rgb(150,150,150)', fontSize:10}}>
                            PUBLIC INDEMNITY INSURANCE
                        </span>
                        <br></br>
                        <span style={{color:'white', fontSize:20}}>
                            {PIInsurance}
                        </span>
                    
                    </div>
                </div>

            </div>    
        )
    }

    renderTiles = () => {
        const views = [];
        const InspectorsObject = [{'Name': 'Bob Harrison','Phone':'0457398292','Email':'bob.harrison@gmail.com','Qualification':'Engineer','PIInsurance':'1','Types':{'Type1':1,'Type2':1,'Type3':0,'Type4':1,'Type5':0,'Type6':0,'Type7':0,'Type8':0,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':1},'Locations':{'Location1':0,'Location2':1,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':1,'Property2':1,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Ryan Michaels','Phone':'0457398292','Email':'rmichaels@outlook.com','Qualification':'Builder','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':0,'Type5':1,'Type6':1,'Type7':1,'Type8':0,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':0},'Locations':{'Location1':1,'Location2':0,'Location3':1,'Location4':1,'Location5':1,'Location6':1,'Location7':0,'Location8':0,'Location9':1,'Location10':1,'Location11':1,'Location12':1},'Properties':{'Property1':1,'Property2':1,'Property3':0,'Property4':0,'Property5':0}},{'Name': 'Daniel Clarke','Phone':'0457398292','Email':'clarkey123@gmail.com','Qualification':'Surveyor','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':0,'Type6':1,'Type7':1,'Type8':1,'Type9':0,'Type10':1,'Type11':1,'Type12':0,'Type13':1},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':1,'Location5':1,'Location6':1,'Location7':1,'Location8':1,'Location9':0,'Location10':1,'Location11':1,'Location12':1},'Properties':{'Property1':1,'Property2':0,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Shaun Davies','Phone':'0457398292','Email':'sdavies@inspectwa.com','Qualification':'Engineer','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':0,'Type7':0,'Type8':0,'Type9':0,'Type10':0,'Type11':0,'Type12':0,'Type13':1},'Locations':{'Location1':1,'Location2':1,'Location3':0,'Location4':1,'Location5':1,'Location6':1,'Location7':1,'Location8':1,'Location9':1,'Location10':0,'Location11':1,'Location12':1},'Properties':{'Property1':0,'Property2':1,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Matt Guy','Phone':'0457398292','Email':'mguy@guysinspos.com','Qualification':'Builder','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':1,'Type7':1,'Type8':0,'Type9':1,'Type10':1,'Type11':1,'Type12':0,'Type13':1},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':1,'Property2':0,'Property3':0,'Property4':0,'Property5':0}},{'Name': 'Paul Junio','Phone':'0457398292','Email':'pj23419807@gmail.com','Qualification':'Surveyor','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':1,'Type7':1,'Type8':1,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':0},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':1,'Property2':0,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Chad Stevens','Phone':'0457398292','Email':'cstevens2178@hotmail.com','Qualification':'Engineer','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':1,'Type7':1,'Type8':1,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':1},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':1,'Property2':0,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Nick Citizen','Phone':'0457398292','Email':'ncitizen@outlook.com','Qualification':'Builder','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':1,'Type7':1,'Type8':1,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':1},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':0,'Property2':0,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Mr Inspector','Phone':'0457398292','Email':'1289128967@gmail.com','Qualification':'Surveyor','PIInsurance':'0','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':1,'Type7':1,'Type8':1,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':1},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':1,'Property2':0,'Property3':1,'Property4':0,'Property5':0}},{'Name': 'Shelley Davies','Phone':'0457398292','Email':'sdavies129@gmail.com','Qualification':'Engineer','PIInsurance':'1','Types':{'Type1':0,'Type2':1,'Type3':1,'Type4':1,'Type5':1,'Type6':1,'Type7':1,'Type8':1,'Type9':1,'Type10':1,'Type11':1,'Type12':1,'Type13':1},'Locations':{'Location1':1,'Location2':0,'Location3':0,'Location4':0,'Location5':0,'Location6':0,'Location7':0,'Location8':0,'Location9':0,'Location10':0,'Location11':0,'Location12':0},'Properties':{'Property1':1,'Property2':1,'Property3':0,'Property4':1,'Property5':1}}]
        
        

        try {
            
            for ( var i =0; i < InspectorsObject.length; i++){
                var Name = InspectorsObject[i].Name;
                var Phone = InspectorsObject[i].Phone;
                var Email = InspectorsObject[i].Email;
                var Qualification = InspectorsObject[i].Qualification;

                if(InspectorsObject[i].PIInsurance == 1) {
                    var PIInsurance = 'Yes'
                } else {
                    var PIInsurance = 'No'
                }

                var displayIndicator = true;

                //Review whether AT LEAST 1 match for type of report
                if( 
                    ((InspectorsObject[i].Types.Type1 == 1) && (this.state.type1 === true)) ||
                    ((InspectorsObject[i].Types.Type2 == 1) && (this.state.type2 === true)) ||
                    ((InspectorsObject[i].Types.Type3 == 1) && (this.state.type3 === true)) ||
                    ((InspectorsObject[i].Types.Type4 == 1) && (this.state.type4 === true)) ||
                    ((InspectorsObject[i].Types.Type5 == 1) && (this.state.type5 === true)) ||
                    ((InspectorsObject[i].Types.Type6 == 1) && (this.state.type6 === true)) ||
                    ((InspectorsObject[i].Types.Type7 == 1) && (this.state.type7 === true)) ||
                    ((InspectorsObject[i].Types.Type8 == 1) && (this.state.type8 === true)) ||
                    ((InspectorsObject[i].Types.Type9 == 1) && (this.state.type9 === true)) ||
                    ((InspectorsObject[i].Types.Type10 == 1) && (this.state.type10 === true)) ||
                    ((InspectorsObject[i].Types.Type11 == 1) && (this.state.type11 === true)) ||
                    ((InspectorsObject[i].Types.Type12 == 1) && (this.state.type12 === true)) ||
                    ((InspectorsObject[i].Types.Type13 == 1) && (this.state.type13 === true))
                    ) {
                } else {
                    displayIndicator = false;
                }

                //Review whether AT LEAST 1 match for location of inspector
                if( 
                    ((InspectorsObject[i].Locations.Location1 == 1) && (this.state.location1 === true)) ||
                    ((InspectorsObject[i].Locations.Location2 == 1) && (this.state.location2 === true)) ||
                    ((InspectorsObject[i].Locations.Location3 == 1) && (this.state.location3 === true)) ||
                    ((InspectorsObject[i].Locations.Location4 == 1) && (this.state.location4 === true)) ||
                    ((InspectorsObject[i].Locations.Location5 == 1) && (this.state.location5 === true)) ||
                    ((InspectorsObject[i].Locations.Location6 == 1) && (this.state.location6 === true)) ||
                    ((InspectorsObject[i].Locations.Location7 == 1) && (this.state.location7 === true)) ||
                    ((InspectorsObject[i].Locations.Location8 == 1) && (this.state.location8 === true)) ||
                    ((InspectorsObject[i].Locations.Location9 == 1) && (this.state.location9 === true)) ||
                    ((InspectorsObject[i].Locations.Location10 == 1) && (this.state.location10 === true)) ||
                    ((InspectorsObject[i].Locations.Location11 == 1) && (this.state.location11 === true)) ||
                    ((InspectorsObject[i].Locations.Location12 == 1) && (this.state.location12 === true))
                    ) {
                } else {
                    displayIndicator = false;
                }

                //Review whether AT LEAST 1 match for property type
                if( 
                    ((InspectorsObject[i].Properties.Property1 == 1) && (this.state.property1 === true)) ||
                    ((InspectorsObject[i].Properties.Property2 == 1) && (this.state.property2 === true)) ||
                    ((InspectorsObject[i].Properties.Property3 == 1) && (this.state.property3 === true)) ||
                    ((InspectorsObject[i].Properties.Property4 == 1) && (this.state.property4 === true)) ||
                    ((InspectorsObject[i].Properties.Property5 == 1) && (this.state.property5 === true))
                    ) {
                } else {
                    displayIndicator = false;
                }



                if(displayIndicator === true) {
                    
                    views.push(             
                        this.GenerateOpacity(Name, Phone, Email, Qualification, PIInsurance )
                    );
                }

                
                
                
            }  
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
                        <div style={{ backgroundColor:'rgba(0,0,0,0.2)',marginTop:'10vh',minHeight:'90vh'}}>
                            <h1 style={{color:'rgb(220,220,220)',padding:20}}>
                                InspectWA - Find an inspector
                            </h1>
                            <div style={{color:'rgb(255,255,255)',textAlign:'left',fontSize:'1rem',lineHeight:'1.2rem',width:'90vw',marginLeft:'5vw',}}>
                                
                                <div style={{width: '100%',borderRadius: 10,backgroundColor: 'rgba(100,100,100,0.2)',padding: 20}}>
                                    <p>
                                        Refine the search criteria below to find the inspector that best suits your needs. 
                                    </p>
                                    <div style={{width:'100%', display:'flex'}}>    
                                        <div style={{width:'32%', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:10, padding:10, marginRight:'2%', fontSize:'0.8rem', marginTop:'1vh', marginBottom:'4vh'}}>
                                            <p style={{fontSize:'1.5rem'}}>Inspection types</p>
                                            
                                            <input type="checkbox" id="type-all" ref={this.checkBoxTypeAll} onClick={() => {this.selectAll('type')}}></input><span>Select all</span>
                                            <br></br>
                                            <input type="checkbox" id="type-none" ref={this.checkBoxTypeNone} onClick={() => {this.deselectAll('type')}}></input><span>Deselect all</span>
                                            <br></br>
                                            <br></br>
                                            <input type="checkbox" id="type-1" ref={this.checkBoxType1} onChange={() => this.checkboxChange('type1')}></input><span>Pre purchase Structural</span>
                                            <br></br>
                                            <input type="checkbox" id="type-2" ref={this.checkBoxType2} onChange={() => this.checkboxChange('type2')}></input><span>Pre Purchase Building</span>
                                            <br></br>
                                            <input type="checkbox" id="type-3" ref={this.checkBoxType3} onChange={() => this.checkboxChange('type3')}></input><span>Staged Construction</span>
                                            <br></br>
                                            <input type="checkbox" id="type-4" ref={this.checkBoxType4} onChange={() => this.checkboxChange('type4')}></input><span>Practical Completion</span>
                                            <br></br>
                                            <input type="checkbox" id="type-5" ref={this.checkBoxType5} onChange={() => this.checkboxChange('type5')}></input><span>Statutory Defect Liability</span>
                                            <br></br>
                                            <input type="checkbox" id="type-6" ref={this.checkBoxType6} onChange={() => this.checkboxChange('type6')}></input><span>Builders Indemnity</span>
                                            <br></br>
                                            <input type="checkbox" id="type-7" ref={this.checkBoxType7} onChange={() => this.checkboxChange('type7')}></input><span>Dilapidation Inspection</span>
                                            <br></br>
                                            <input type="checkbox" id="type-8" ref={this.checkBoxType8} onChange={() => this.checkboxChange('type8')}></input><span>Investigation</span>
                                            <br></br>
                                            <input type="checkbox" id="type-9" ref={this.checkBoxType9} onChange={() => this.checkboxChange('type9')}></input><span>Maintenance Inspection</span>
                                            <br></br>
                                            <input type="checkbox" id="type-10" ref={this.checkBoxType10} onChange={() => this.checkboxChange('type10')}></input><span>WA Building Commission Independent Expert</span>
                                            <br></br>
                                            <input type="checkbox" id="type-11" ref={this.checkBoxType11} onChange={() => this.checkboxChange('type11')}></input><span>State Administrative Tribunal Independent Expert</span>
                                            <br></br>
                                            <input type="checkbox" id="type-12" ref={this.checkBoxType12} onChange={() => this.checkboxChange('type12')}></input><span>Litigation - Independent Expert Opinion</span>
                                            <br></br>
                                            <input type="checkbox" id="type-13" ref={this.checkBoxType13} onChange={() => this.checkboxChange('type13')}></input><span>Special Purpose Inspection</span>
                                        </div> 
                                        <div style={{width:'32%', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:10, padding:10, marginRight:'2%', fontSize:'0.8rem', marginTop:'1vh', marginBottom:'4vh'}}>
                                            <p style={{fontSize:'1.5rem'}}>Locations</p>
                                            
                                            <input type="checkbox" id="location-all" ref={this.checkBoxLocationAll} onClick={() => {this.selectAll('location')}}></input><span>Select all</span>
                                            <br></br>
                                            <input type="checkbox" id="location-none" ref={this.checkBoxLocationNone} onClick={() => {this.deselectAll('location')}}></input><span>Deselect all</span>
                                            <br></br>
                                            <br></br>
                                            <input type="checkbox" id="location-1" ref={this.checkBoxLocation1} onChange={() => this.checkboxChange('location1')}></input><span>Perth Metropolitan Area</span>
                                            <br></br>
                                            <input type="checkbox" id="location-2" ref={this.checkBoxLocation2} onChange={() => this.checkboxChange('location2')}></input><span>Bunbury</span>
                                            <br></br>
                                            <input type="checkbox" id="location-3" ref={this.checkBoxLocation3} onChange={() => this.checkboxChange('location3')}></input><span>Mandurah</span>
                                            <br></br>
                                            <input type="checkbox" id="location-4" ref={this.checkBoxLocation4} onChange={() => this.checkboxChange('location4')}></input><span>Margaret River</span>
                                            <br></br>
                                            <input type="checkbox" id="location-5" ref={this.checkBoxLocation5} onChange={() => this.checkboxChange('location5')}></input><span>Busselton</span>
                                            <br></br>
                                            <input type="checkbox" id="location-6" ref={this.checkBoxLocation6} onChange={() => this.checkboxChange('location6')}></input><span>Bunbury</span>
                                            <br></br>
                                            <input type="checkbox" id="location-7" ref={this.checkBoxLocation7} onChange={() => this.checkboxChange('location7')}></input><span>Great Southern</span>
                                            <br></br>
                                            <input type="checkbox" id="location-8" ref={this.checkBoxLocation8} onChange={() => this.checkboxChange('location8')}></input><span>Goldfields - Esperance</span>
                                            <br></br>
                                            <input type="checkbox" id="location-9" ref={this.checkBoxLocation9} onChange={() => this.checkboxChange('location9')}></input><span>Wheat Belt</span>
                                            <br></br>
                                            <input type="checkbox" id="location-10" ref={this.checkBoxLocation10} onChange={() => this.checkboxChange('location10')}></input><span>Mid-West</span>
                                            <br></br>
                                            <input type="checkbox" id="location-11" ref={this.checkBoxLocation11} onChange={() => this.checkboxChange('location11')}></input><span>Pilbara</span>
                                            <br></br>
                                            <input type="checkbox" id="location-12" ref={this.checkBoxLocation12} onChange={() => this.checkboxChange('location12')}></input><span>Kimberley </span>
                                            <br></br>
                                        </div> 
                                        <div style={{width:'32%', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:10, padding:10, fontSize:'0.8rem', marginTop:'1vh', marginBottom:'4vh'}}>
                                            <p style={{fontSize:'1.5rem'}}>Property types</p>
                                            
                                            <input type="checkbox" id="property-all" ref={this.checkBoxPropertyAll} onClick={() => {this.selectAll('property')}}></input><span>Select all</span>
                                            <br></br>
                                            <input type="checkbox" id="property-none" ref={this.checkBoxPropertyNone} onClick={() => {this.deselectAll('property')}}></input><span>Deselect all</span>
                                            <br></br>
                                            <br></br>
                                            <input type="checkbox" id="property-1" ref={this.checkBoxProperty1} onChange={() => this.checkboxChange('property1')}></input><span>Residential</span>
                                            <br></br>
                                            <input type="checkbox" id="property-2" ref={this.checkBoxProperty2} onChange={() => this.checkboxChange('property2')}></input><span>Apartment – Individual Lots </span>
                                            <br></br>
                                            <input type="checkbox" id="property-3" ref={this.checkBoxProperty3} onChange={() => this.checkboxChange('property3')}></input><span>Commercial </span>
                                            <br></br>
                                            <input type="checkbox" id="property-4" ref={this.checkBoxProperty4} onChange={() => this.checkboxChange('property4')}></input><span>Industrial</span>
                                            <br></br>
                                            <input type="checkbox" id="property-5" ref={this.checkBoxProperty5} onChange={() => this.checkboxChange('property5')}></input><span>Strata – Entire Complex </span>
                                        </div> 
                                    </div>  
                                    <div style={{width: '100%',borderRadius: 10,backgroundColor: 'rgba(120,120,120,0.2)',padding: 20}}>               
                                        {this.renderTiles()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        
                    <br></br>
                    <br></br>
                                            

                    <FooterBar />
                </div>    
            </div>
            
        );
    }
  
}
export default Inspectors

