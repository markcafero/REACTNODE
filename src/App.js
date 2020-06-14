import React from 'react';
import './styles/App.css';
import {Route, Link} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import BookAStay from "./pages/BookAStay"
import ContactSocial from "./pages/ContactSocial"
import LuxuryBoatTour from "./pages/LuxuryBoatTour"
import TurksCaicos from "./pages/TurksCaicos"

import Header from './components/header'
import NavBar from './components/navBar'
import Footer from './components/footer'

function App() {
  return (
    <div id='App' className="App">
      <Header />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/BookAStay" component={BookAStay} />
      <Route exact path="/ContactSocial" component={ContactSocial} />
      <Route exact path="/LuxuryBoatTour" component={LuxuryBoatTour} />
      <Route exact path="/TurksCaicos" component={TurksCaicos} />
      <Footer />
    </div>
  );
}

export default App;
