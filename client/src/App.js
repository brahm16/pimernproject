import "./App.css";
import { BrowserRouter,Route } from "react-router-dom";
import Footer from "./client/components/Footer";
import Header from "./client/components/Header";
import Main from "./client/components/Main";
import React, { Component } from "react";

import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import PrivateRouter from "./private-route/PrivateRoute";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import Landing from "./client/components/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    const HomePage = () => {
      return <Landing />;
    };
    return (
      <Provider store={store}>
        <BrowserRouter>

          <div>
            <Header />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
