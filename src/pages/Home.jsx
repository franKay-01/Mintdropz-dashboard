import React, { Component } from "react";
import Header from "../components/Header";
import HomeBanner from "../components/homeBanner";
import CollectionSection from "../components/collectionSection";
import GoldenTicket from "../components/goldenTicket";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/footer";

import "../App.css"

class Home extends Component {
  render() {
    return(
      <>
        <Header/>
        <HomeBanner/>
        <CollectionSection/>
        <GoldenTicket />
        <NewsLetter />
        <div className="slider"></div>
        <Footer/>
      </>
    );
  }
}

export default Home;
