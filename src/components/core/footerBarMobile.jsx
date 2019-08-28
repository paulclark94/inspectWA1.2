import React, { Component } from 'react';
import { whileStatement } from '@babel/types';

//Import stylesheets


class FooterBarMobile extends Component {
    state = {
        
    };

    styles = {
        footerBar: {
            width:'100%',
            background: 'rgb(30,30,30)',
            color: 'rgb(200,200,200)',
            height: '10vh',
            textAlign:'center',
            display: 'grid', 
            placeItems: 'center center',
            padding:20

        },

    }

    render() { 
        return ( 
            <div style={this.styles.footerBar}>
                <span style = {{color:'rgb(200,200,200)', fontSize:10, display: 'table-cell',textAlign: 'center',verticalAlign: 'middle', }}>The Industry Association of Building and Property Inspectors in WA Inc. – Inspect WA</span>
            </div>
         );
    }
}
 
export default FooterBarMobile;