import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import banner_image from "../assets/image2.png";
import banner_image_1 from "../assets/image10.png";
import "../App.css";

class HomeBanner extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="banner-eclipse-left"></div>
            <img className="image-banne-2" src={banner_image_1} />
            <img className="image-banner-1" src={banner_image} />
          </Col>
          <Col>
            <div className="banner-eclipse-right"></div>
            <h1 className="banner-header">Exclusive</h1>

            <div className="banner-vector-1"></div>
            <div className="banner-vector-2"></div>
            <div className="banner-vector-3"></div>


            <h5 className="banner-sub-header">newest <strong>NFT </strong>release</h5>
            <p className="banner-para">The <strong>BILLIONAIRE CLUB </strong>is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. 
              The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. <strong style={{color: '#FC00FF'}}>Reveal on October 20th.</strong></p>
            <table>
              <tr>
                <td><input type="text" class="form-control banner-input" placeholder="your@email.com" aria-label="your@email.com" aria-describedby="basic-addon2"/></td>
                <td><Button className="banner-button">Register</Button></td>
              </tr>
            </table>
          </Col>
        </Row>
      </>
    );
  }
}

export default HomeBanner;
