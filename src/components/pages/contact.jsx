import React, { Component } from 'react';

//Import stylesheets


class FooterBar extends Component {
    state = {
        
    };

    styles = {
        footerBar: {
            width:'100%',
            background: 'rgb(30,30,30)',
            color: 'rgb(200,200,200)',
            height: '20vh',
            width: '100%',
            display:'flex',
            flexDirection:'row'
        },

    }

    render() { 
        return ( 
            <div style={this.styles.footerBar}>
                    
            </div>
         );
    }
}
 
export default FooterBar;