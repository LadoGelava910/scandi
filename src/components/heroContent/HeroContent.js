import React, { Component } from "react";
import ProductList from "../productList/ProductList";
import "./HeroContent.css";
export default class HeroContent extends Component {
  render() {
    return (
      <div className="hero_content_wrapper">
        <section className="hero_section">
          <h2>Category Name</h2>
          <ProductList
            products={this.props.products}
            addToCart={this.props.addToCart}
          />
        </section>
      </div>
    );
  }
}
