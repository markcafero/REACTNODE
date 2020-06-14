import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../styles/componentstyles/footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="footer">
                <ul id='footer-nav'>
                    <li className="footer-nav-list">
                        <h1 className="footer-nav-head">Destinations</h1> 
                        <ul className="footer-nav-list-list">
                            <li><div className="footer-line"></div></li>
                            <li><Link className="footer-nav-link" to="/TurksCaicos">Turks & Caicos</Link></li>
                        </ul>
                    </li>
                    <li className="footer-nav-list">
                        <h1 className="footer-nav-head">Work With Us</h1> 
                        <ul className="footer-nav-list-list">
                            <li><div className="footer-line"></div></li>
                            <li><Link className="footer-nav-link" to="/TurksCaicos">Referal Program</Link></li>
                            <li className="footer-nav-item">Cross Marketing</li>
                            <li className="footer-nav-item">List Your Property</li>
                        </ul>
                    </li>
                    <li className="footer-nav-list">
                        <h1 className="footer-nav-head">The Paradise Experience</h1> 
                        <ul className="footer-nav-list-list">
                            <li><div className="footer-line"></div></li>
                            <li className="footer-nav-item">Testimonials</li>
                            <li><Link className="footer-nav-link" to="/LuxuryBoatTour">Luxury Boat Tour</Link></li>
                        </ul>
                    </li>
                    <li className="footer-nav-list">
                        <h1 className="footer-nav-head">Policies</h1> 
                        <ul className="footer-nav-list-list">
                            <li><div className="footer-line"></div></li>
                            <li className="footer-nav-item">Cancellation Policy</li>
                            <li className="footer-nav-item">Booking Policy</li>
                        </ul>
                    </li>
                </ul>
            </div>
          );
    }
}
 
export default Footer;