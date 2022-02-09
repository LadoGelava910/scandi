import React, { Component } from "react";
import HeroContent from "../components/heroContent/HeroContent";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <HeroContent
          products={this.props.products}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}
