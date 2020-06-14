import React, { Component } from 'react';
import Logo from '../img/logo.png'
import '../styles/componentstyles/header.css';


class Header extends Component {
    state = {  }
    render() { 
        return (
            <div id='header' >
                <img id="header-logo"  src={Logo} />
            </div>
          );
    }
}
 
export default Header;