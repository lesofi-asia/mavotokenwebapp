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

//import NavBrand from '../CustomNavBar/NavBrand';
//import NavMenu from '../CustomNavBar/NavMenu';

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

  render() {
    const links = [
      {id: '1', linkTo: "#", text: "Link 1"},
      {id: '2', linkTo: "#", text: "Link 2"},
      {id: '3', dropdown: true, text: "Dropdown", links: [
        {id: '1',linkTo: "#", text: "Dropdown Link 1"},
        {id: '2',linkTo: "#", text: "Dropdown Link 2", active: true}
      ]}
    ];

    return (
      <header className="app-header navbar navbar-default">
        <Container>
          <NavbarBrand  />
        
        
        <Nav className="ml-auto clearfix navbar-nav" navbar id='navigation'>
        
             {/*
             <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              
             </div>
             */}
             <Collapse navbar isOpen={this.state.isOpen} >
              <NavItem>
                <NavLink href="https://www.nusakapital.com">HOME</NavLink>
              </NavItem>
             </Collapse>
             
        </Nav>  
        {/**hamburger--collapse is-active**/}
        <NavbarToggler className='hamburger ' aria-label="Menu" onClick={this.toggle.bind(this)} right >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </NavbarToggler>
        
       </Container>
      </header>  
      )
      {/*
      <header className="app-header navbar navbar-default sidebar-hidden">
        <NavbarBrand href="#"></NavbarBrand>

        <Nav className="ml-auto clearfix" navbar>
          <NavItem>
            <NavLink href="https://www.nusakapital.com">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.nusakapital.com/about-us/">ABOUT US</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.nusakapital.com/discover/">CAMPAIGNS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.nusakapital.com/get-funded/">GET FUNDED</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.nusakapital.com/how-it-works/">HOW IT WORKS</NavLink>
          </NavItem>
          {renderLogonComponent()}
        </Nav>  
      </header>
      */}
    
  }
}

export default Header;