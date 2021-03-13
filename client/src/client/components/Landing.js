import React, { Component } from "react";
import MainLanding from "./MainLanding";
import Places from "./pages/Places";
import Search from "./Search";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Landing extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
  render() {
    const { user } = this.props.auth;

    const style = {
      backgroundImage: "url('img/slide1.jpg')",
    };
    return (
      <>
          <MainLanding  />
          <Search />
          <Places />
      </>
    );
  }
}
Landing.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(
    mapStateToProps,
    { logoutUser }
  )(Landing);