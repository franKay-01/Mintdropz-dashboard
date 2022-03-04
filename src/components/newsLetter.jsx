import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import clickButton from "../assets/clickButton.png";
import "../App.css";

class NewsLetter extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="banner-sub-footer">Get Aped with Us!</div>
            <div><p className="newsletter-sign-up gradient-underline">Sign up for our newsletter</p><img className="image-newsletter" src={clickButton} /></div>
          </Col>
        </Row>
      </>
    );
  }
}

export default NewsLetter;
