import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import goldenTicket from "../assets/goldenTicket.png";
import "../App.css";

class GoldenTicket extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="golden-banner">
              <h1 className="golden-title">The Golden Guests</h1>
              <p className="golden-para">The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.</p>
              <button className="golden-button">Join us to register for the Presale</button>
            </div>
          </Col>
          <Col>
            <img className="golden-image" src={goldenTicket} />
          </Col>
        </Row>
      </>
    );
  }
}

export default GoldenTicket;
