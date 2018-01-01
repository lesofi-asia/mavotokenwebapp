import React from 'react';

const NavLink = props => {
    return (
        <li className={(props.active ? "active" : "")}>
          <a href={props.linkTo}>{props.text}</a>
        </li>
    )
}

const NavLinkDropdown=props=>{
    let active=false;
    const links = props.links.map(link=>{
        if (link.active){
            active=true;
        }
        return (
            <NavLink key={link.id} linkTo={link.linkTo} text={link.text} active={link.active} />
        )
    })
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {props.text}
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            {links}
          </ul>
      </li>
    );
}

const NavMenu=props=>{
    const links = props.links.map(function(link){
        if(link.dropdown) {
            return (
              <NavLinkDropdown key={link.id} links={link.links} text={link.text} active={link.active} />
            );
        }else {
            return (
              <NavLink key={link.id} linkTo={link.linkTo} text={link.text} active={link.active} />
            );
        }
    })

    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    )
}

export default NavMenu;