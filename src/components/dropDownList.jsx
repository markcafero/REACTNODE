import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../styles/componentstyles/listWithHeader.css';

class ListWithHeader extends Component {
    state = {  }
    render() { 
        return (
            <div id='list-with-header'>
                <h1 className="footer-nav-head">Destinations</h1> 
                <ul className="footer-nav-list-list">
                    <li><div className="footer-line"></div></li>
                    <li><Link className="footer-nav-link" to="/TurksCaicos">Turks & Caicos</Link></li>
                    <li className="footer-nav-item">Turks & Caicos</li>
                </ul>
            </div>
          );
    }


}
 
export default ListWithHeader;