import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/index';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/aboutus';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';
import Service from './pages/service';
import ScrollToTop from './components/ScrollToTop';

import './App.scss';
import TermsConditions from './pages/terms';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
        <Route path="/policy" component={TermsConditions} />
        <Route path="/services/:slug" component={Service} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
