import React, { Component } from "react";
import { Button } from "react-bootstrap";

import logo from '../assets/banner.png';
import "../App.css";

class Header extends Component {
  render() {

    const menu_items = ['Home','Features','Roadmap', 'Team']
    return (
      <>
        <nav class="navbar px-5" style={{backgroundColor: 'black'}}>
          <a class="navbar-brand"><img className="site-logo" src={logo} /></a>

          <div className="d-flex flex-row" style={{marginRight:'30rem'}}>
            {menu_items.map((item, index) => {
              return item === 'Home' ? <a href="#" key={index} className="px-2 nav-links-current">{item}</a> : <a href="#" key={index} className="px-2 nav-links">{item}</a>
            })}
            <Button className="navbar-discord-button">Join Our Discord</Button>
          </div>
        </nav>
      </>
    )
  }
}
export default Header