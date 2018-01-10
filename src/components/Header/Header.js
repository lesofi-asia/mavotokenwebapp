import React, { Component } from 'react';
/*import {
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Badge,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Collapse,
  UncontrolledDropdown
} from 'reactstrap';*/

import { Container,NavItem,NavLink,Collapse,NavbarBrand,Nav,NavbarToggler,Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {

  state = {
    isOpen: true
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  logout() {
    this.props.logout();
  }

  componentDidMount(){
    //document.body.classList.toggle('sidebar-hidden');
  }
  componentWillMount(){
   // document.body.classList.toggle('sidebar-hidden');
  }

  menuClick(e){
    e.preventDefault();
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  render() {
    return (
      <header className="app-header topnavBackground">
        <div className='container'>
          <div className="topnav" id="myTopnav">
                <a href="#logo" className="logo active">MAVOTOKEN</a>
                <Link to="/page1">
                  News
                </Link>
                <Link to="/register">
                  Register
                </Link>
                <Link to="/login">
                  Login
                </Link>
                <a href="javascript:void(0);" style={{fontSize:'15px'}} className="icon" onClick={(e)=>this.menuClick(e)}>&#9776;</a>
          </div>
        </div>
       </header>
      )
    
  }
}

export default Header;