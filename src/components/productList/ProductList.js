import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

export default class ProductList extends Component {
  render() {
    return (
      <div className="product_list_wrapper">
        {this.props.products.map((elem) => (
          <ProductItem
            key={elem.item}
            product={elem}
            addToCart={this.props.addToCart}
          />
        ))}
      </div>
    );
  }
}
