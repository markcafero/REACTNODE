import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../styles/componentstyles/navBar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div id='nav-bar'>
                <ul id='main-nav'>
                    <li><NavLink className="main-nav-link" activeClassName='main-nav-link-active' to="/Home">home</NavLink></li>
                    <li><NavLink className="main-nav-link" activeClassName='main-nav-link-active' to="/BookAStay">book a stay</NavLink></li>
                    <li><NavLink className="main-nav-link" activeClassName='main-nav-link-active' to="/LuxuryBoatTour">luxury boat tour</NavLink></li>
                    <li><NavLink className="main-nav-link" activeClassName='main-nav-link-active' to="/TurksCaicos">turks & caicos</NavLink></li>
                    <li><NavLink className="main-nav-link" activeClassName='main-nav-link-active' to="/ContactSocial">contact / social</NavLink></li>
                </ul>
            </div>
          );
    }


}
 
export default Navbar;