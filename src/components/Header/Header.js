import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslate,getActiveLanguage,setActiveLanguage } from 'react-localize-redux';
import { Container,NavItem,NavLink,Collapse,NavbarBrand,Nav,NavbarToggler,Navbar } from 'reactstrap';
import { Link,Redirect } from 'react-router-dom';
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
     this.updateNavMenu()
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

  changeLang=()=>{
    const { currentLanguage } = this.props;
    if (currentLanguage==='en'){
       this.props.changeLang('zh-CN')
    }else {
       this.props.changeLang('en')
    }
  }

  updateNavMenu=()=>{
    const x = document.getElementById("myTopnav");
     if (x.className.indexOf('responsive')>0){
        x.className = "topnav";
     }
  }

  tradeClick=()=>{
    this.updateNavMenu()
    return <Redirect to='/prototype/' />
  }

  newsClick=()=>{
    this.updateNavMenu()
    return <Redirect to='/prototype/news' />
  }

  registerClick=()=>{
    this.updateNavMenu()
    return <Redirect to='/prototype/register' />
  }

  loginClick=()=>{
    this.updateNavMenu()
    return <Redirect to='/prototype/login' />
  }

  portfolioClick=()=>{
    this.updateNavMenu()
    return <Redirect to='/prototype/portfolio' />
  }

  profileClick=()=>{
    this.updateNavMenu()
    return <Redirect to='/prototype/profile' />
  }

  render() {
    const renderLogonComponent = () => {
      if (this.props.profile){
        return (
            <div className="avatarProfile dropdownMenu">
                <button className="dropbtn"><Avatar src={defaultProfilePhoto} /></button>
                <div className="dropdown-content">
                  <Link to="/prototype/profile" className="profileLink" onClick={()=> this.profileClick()}>
                     { this.props.translate('profile') }
                  </Link>
                  <a href="#" className="profileLink" onClick={this.logout.bind(this)}>{ this.props.translate('logout') }</a>
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
                  MAVOIPX&nbsp;<span className="badge badge-pill badge-warning" style={{fontSize: '8px'}}>{ this.props.translate('prototype') }</span>
                </Link>
                
                <Link to='#' onClick={()=> this.changeLang()} >
                  { this.props.translate('language') }
                </Link>

                <Link to="/prototype/" onClick={()=> this.tradeClick()} >
                    { this.props.translate('trade') }
                </Link>

                {this.props.profile?(
                  <Link to="/prototype/portfolio" onClick={()=> this.portfolioClick()}>
                    { this.props.translate('portfolio') }
                  </Link>
                ):null}

                <Link to="/prototype/news"  onClick={()=> this.newsClick()}  >
                  { this.props.translate('news') }
                </Link>

                <a href='https://github.com/magicmavostudio/mavotokenwebapp'>
                  GitHub
                </a>

                {!this.props.profile?(
                  <Link to="/prototype/register" onClick={()=> this.registerClick()} >
                    { this.props.translate('signup') }
                  </Link>
                ):null}
                {!this.props.profile?(
                  <Link to="/prototype/login" onClick={()=> this.loginClick()}>
                    { this.props.translate('login') }
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
  return {
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      topnavUpdate: () => {
          dispatch(actions.topnavUpdate())
      },
      changeLang: (langCode) => {
        dispatch(setActiveLanguage(langCode))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)