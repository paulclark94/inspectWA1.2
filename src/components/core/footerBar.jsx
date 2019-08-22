import React, { Component } from 'react';
import { whileStatement } from '@babel/types';

//Import stylesheets


class FooterBar extends Component {
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
            placeItems: 'center center'

        },

    }

    render() { 
        return ( 
            <div style={this.styles.footerBar}>
                <span style = {{color:'rgb(200,200,200)', fontSize:10, textAlign:'center', verticalAlign:'center', }}>The Industry Association of Building and Property Inspectors in WA Inc. – Inspect WA</span>
            </div>
         );
    }
}
 
export default FooterBar;