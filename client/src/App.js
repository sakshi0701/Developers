import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import PostsDashboard from './components/Dashboard/Dashboard';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Converter from './components/CurrencyConverter/Converter';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/posts" exact component={PostsDashboard} />
            <Route path="/posts/search" exact component={PostsDashboard} />
            <Route path="/posts/:id" exact component={PostDetails} />
            <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route path="/contact" component={Contact} />
            <Route path="/converter" component={Converter}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;