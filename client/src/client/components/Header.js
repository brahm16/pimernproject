import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import Search from "./Search";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../../auth/Login";


class Header extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isModalSearchOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleSearchModal = this.toggleSearchModal.bind(this);
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  toggleSearchModal() {
    this.setState({
      isModalSearchOpen: !this.state.isModalSearchOpen,
    });
    console.log("tbadlet "+this.state.isModalSearchOpen);
  }
  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    const { user } = this.props.auth;

    return (
      <div className="header">
        <div className="wrap">
          <div className="wrap_float">
            <div className="header__top">
              <div className="tel">
                <a href="tel:0000000000">+1 1235 6789 10</a>
              </div>
              <div className="email">
                <a href="mailto:zaghouan@gmail.com">zaghouan@gmail.com</a>
                {
                          user? (<a style={{color: "white",marginLeft:"16px"}} onClick={this.onLogoutClick}>{user.name}</a>): (
                            "")
                        }
              </div>
              <div className="socials">
                <a href="#" className="a facebook"></a>
                <a href="#" className="a instagram"></a>
                <a href="#" className="a pinterest"></a>
                <a href="#" className="a twitter"></a>
              </div>
            </div>
            <div className="header__bottom">
              <div class="logo">
                <NavLink to="/home">
                  {" "}
                  <span className="my-title">Zaghouan</span>
                </NavLink>
              </div>
              <Modal
                isOpen={this.state.isModalSearchOpen}
                toggle={this.toggleSearchModal}
                fullscreen={'xl'}
              >
                <ModalHeader toggle={this.toggleSearchModal}></ModalHeader>
                <ModalBody>
                  <Search />
                </ModalBody>
              </Modal>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                  {
                    <Login />
                    /* 
                    <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password = input)}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">
                      Login
                    </Button>
                  </Form>
                    */
                  }
                  
                </ModalBody>
              </Modal>

              <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                  <a className="current">Home</a>
                  <div className="scroll_wrap">
                    <ul>
                      <li>
                        <NavLink to="/home"> Home</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/about"> About</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/places">Destination</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li className="dropdown_li">
                       
                        
                      </li>
                      <li className="dropdown_li">
                        {
                          user.name ?
                          (""):
                          (
                            <a onClick={this.toggleModal}>
                            <span>Login</span>
                          </a> 
                          )
                        }
                                          </li>
                     
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="tel">
                      <a href="tel:+11235678910">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                      <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                    </div>
                    <div className="socials">
                      <div className="links">
                        <a href="#" className="fb"></a>
                        <a href="#" className="instagram"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="twitter"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="search_link"
                onClick={this.toggleSearchModal}
                id="search_link"
              ></div>
              <div className="mobile_btn" id="mobile_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
