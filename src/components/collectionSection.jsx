import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import CardComponent from "./cardComponent";
import collection_image from "../assets/image8.png";
import "../App.css";

import card_image_1 from "../assets/card_image_1.png";
import card_image_2 from "../assets/card_image_2.png";
import card_image_3 from "../assets/card_image_3.png";
import card_image_4 from "../assets/card_image_4.png";
import card_image_5 from "../assets/card_image_5.png";
import card_image_6 from "../assets/card_image_6.png";
import banner_image_1 from "../assets/image10.png";

class CollectionSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card_images = [card_image_1, card_image_2, card_image_3, card_image_4, card_image_5, card_image_6]

    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1 className="collection-header">Collections</h1>
              <p className="collection-para">With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. 
                Join an ambitious ever-growing community with multiple benefits and utilities.</p>
            </Col>
            <Col>
              <div className="collection-dots" style={{background: `url(${collection_image})`}}>
              </div>
            </Col>
          </Row>
          <Row style={{position: 'absolute',top: '70rem',left: '8rem',marginLeft: '7rem',zIndex: '9'}}>
            {card_images.map((item, key) => (
              <Col xs={6} md={4} style={{marginRight: '-5rem'}}>
                <CardComponent key={key} imageUrl={item}/>
              </Col>
            ))}
          </Row>
          
        </Container>
        <Container>
          <Col>
            <div className="collection-dots" style={{top:'1812px',left: '16rem',background: `url(${collection_image})`}}>
            </div>
          </Col>
          <Col>
            <div className="banner-eclipse-large"></div>
          </Col>
        </Container>
      </>
    );
  }
}

export default CollectionSection;
