import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainPage from "./screens/MainPage";
import img1 from "./media/1.png";
import img2 from "./media/2.png";
import img3 from "./media/3.png";
import img4 from "./media/4.png";
export default class App extends Component {
  state = {
    products: [
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img1}`,
        id: 1,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img2}`,
        id: 2,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img3}`,

        id: 3,
        inStock: false,
        inCart: false,
        cartQuantity: 0,
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img4}`,

        id: 4,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img1}`,

        id: 5,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img3}`,

        id: 6,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
      },
    ],
  };

  addToCart = (productId) => {
    this.setState({
      ...this.state.products,
      products: this.state.products.map((product) => {
        if (product.id === productId && product.cartQuantity === 0) {
          product.inCart = !product.inCart;
          product.cartQuantity = 1;
        }
        return product;
      }),
    });
  };

  incrementQuantity = (productId) => {
    this.setState({
      ...this.state.products,
      products: this.state.products.map((product) => {
        if (product.id === productId) {
          product.cartQuantity = product.cartQuantity + 1;
        }
        return product;
      }),
    });
  };

  decrementQuantity = (productId) => {
    this.setState({
      ...this.state.products,
      products: this.state.products.map((product) => {
        if (product.id === productId && product.cartQuantity > 1) {
          product.cartQuantity = product.cartQuantity - 1;
        } else if (product.id === productId && product.cartQuantity === 1) {
          product.cartQuantity = 0;
          product.inCart = !product.inCart;
        }
        return product;
      }),
    });
  };

  render() {
    return (
      <div>
        <Header
          products={this.state.products}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
        />
        <MainPage products={this.state.products} addToCart={this.addToCart} />
      </div>
    );
  }
}
