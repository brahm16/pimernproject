import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Landing from "./Landing";
import Contact from './pages/Contact';
import Login from './pages/Login'
import Places from './pages/Places'
import Services from './pages/Services'
import About from './pages/About'
import Footer from './Footer';
import Header from './Header';


class Main extends Component {
    render() {
        const HomePage = () => {
            return(
              <Landing />
        
            );
          }
        return (
            <div className="container">
            <Header />

            <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/about' component={About} />

            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/places' component={Places} />
            <Route path='/services' component={Services} />
            </Switch>
            <Footer />

            </div>
         
        )
    }
}

export default withRouter(Main);
