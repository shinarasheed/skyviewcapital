import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/aboutus';
import CarpitalMarkets from './pages/capitalmarkets';
import InvestmentResearch from './pages/investmentresearch';
import SecurityDealings from './pages/securitydealings';
import AdvisoryServices from './pages/advisoryservices';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutPage} />
        <Route
          exact
          path="/services/capitalmarkets"
          component={CarpitalMarkets}
        />
        <Route
          exact
          path="/services/investmentresearch"
          component={InvestmentResearch}
        />
        <Route
          exact
          path="/services/securitydealings"
          component={SecurityDealings}
        />
        <Route
          exact
          path="/services/advisoryservices"
          component={AdvisoryServices}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
