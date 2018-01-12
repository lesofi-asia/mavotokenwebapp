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
import Avatar from 'material-ui/Avatar';

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
    const renderLogonComponent = () => {
      if (this.props.profile){
        return (
            <div className="dropdownMenu">
                <button className="dropbtn"><Avatar src={'/img/avatars/stevejobs_avatar.jpg'} /></button>
                <div className="dropdown-content">
                  <Link to="/profile" className="profileLink">
                    Profile
                  </Link>
                  <a href="#" className="profileLink" onClick={this.logout.bind(this)}>Logout</a>
                </div>
            </div>
          )
      }
    }

    return (
      <header className="app-header topnavBackground">
        <div className='container'>
          <div className="topnav" id="myTopnav">
                <Link to="/" className='logo active' >
                  MAVOTOKEN
                </Link>
                
                <Link to="/">
                    Home
                </Link>

                {this.props.profile?(
                  <Link to="/portfolio">
                    Portfolio
                  </Link>
                ):null}

                {this.props.profile?(
                  <Link to="/trade">
                    Trade
                  </Link>
                ):null}

                <Link to="/page1">
                  News
                </Link>

                {!this.props.profile?(
                  <Link to="/register">
                    Register
                  </Link>
                ):null}
                {!this.props.profile?(
                  <Link to="/login">
                   Login
                  </Link>
                ):null}
                
                {renderLogonComponent()}
                <a href="javascript:void(0);" style={{fontSize:'15px'}} className="icon" onClick={(e)=>this.menuClick(e)}>&#9776;</a>
          </div>
        </div>
       </header>
      )
    
  }
}

export default Header;