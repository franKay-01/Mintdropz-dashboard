import React, { Component } from "react";
import vector from "../assets/Vector.png";
import cardIcon from '../assets/cardIcon.png';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-component">
        <div>
          <div className="card-icon" style={{background: `url(${cardIcon})`}}></div>
          <div className="card-name">@knight</div>
          <div className="card-star" style={{background: `url(${vector})`}}></div>
          <div className="card-number">213</div>
        </div>
        <div className="card-image" style={{background: `url(${this.props.imageUrl})`}}>

        </div>
        <div>
          <div className="card-bid">
            <p className="card-para">Current Bid <br/><strong>0.54 ETH</strong></p>
          </div>
          <div className="card-date">
            <p className="card-para">Ending in <br/><strong>12h 55m 2s</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
