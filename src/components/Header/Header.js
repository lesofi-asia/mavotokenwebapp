import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,NavItem,NavLink,Collapse,NavbarBrand,Nav,NavbarToggler,Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import defaultProfilePhoto from '../../views/ImageAssets/stevejobs_avatar.jpg'
import * as actions from '../../redux/topNav/actions';

class Header extends Component {

  logout() {
    this.props.logout();
  }

  componentDidMount(){
  }
  componentWillMount(){
  }
  componentWillUpdate(){
     const x = document.getElementById("myTopnav");
     if (x.className.indexOf('responsive')>0){
        x.className = "topnav";
     }
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
            <div className="avatarProfile dropdownMenu">
                <button className="dropbtn"><Avatar src={defaultProfilePhoto} /></button>
                <div className="dropdown-content">
                  <Link to="/prototype/profile" className="profileLink">
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
                <Link to="/prototype/" className='logo active' >
                  MAVOTOKEN&nbsp;<span className="badge badge-pill badge-warning" style={{fontSize: '8px'}}>Prototype</span>
                </Link>
                
                <Link to="/prototype/" >
                    Home
                </Link>

                {this.props.profile?(
                  <Link to="/prototype/portfolio">
                    Portfolio
                  </Link>
                ):null}

                <Link to="/prototype/news">
                  News
                </Link>

                <a href='https://github.com/magicmavostudio/mavotokenwebapp' target='_blank'>
                  GitHub
                </a>

                {!this.props.profile?(
                  <Link to="/prototype/register">
                    Register
                  </Link>
                ):null}
                {!this.props.profile?(
                  <Link to="/prototype/login">
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

//export default Header;
const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      topnavUpdate: () => {
          dispatch(actions.topnavUpdate())
      },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)