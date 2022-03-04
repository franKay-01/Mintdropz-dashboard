

import React, { Component } from "react";

import logo from '../assets/banner.png';
import twitter from '../assets/twitter.png';
import reddit from '../assets/reddit.png';
import instagram from '../assets/instagram.png';

import "../App.css";

class Footer extends Component {
  render() {

    return (
      <>
        <footer className="footer">
          <img className="site-logo" src={logo} />
          <table style={{marginTop:'25px'}}>
            <tbody>
              <td>
                <a href="#" className="px-2 footer-para">Terms of Service</a>
              </td>
              <td>
              <a href="#" className="px-2 footer-para">Privacy Policy</a>
              </td>
            </tbody>
          </table>

          <img className="footer-icons" style={{right: '20rem'}} src={twitter} />
          <img className="footer-icons" style={{right: '15rem'}} src={reddit} />
          <img className="footer-icons" style={{right: '10rem'}} src={instagram} />

        </footer>
      </>
    )
  }
}
export default Footer