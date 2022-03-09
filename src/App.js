import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainPage from "./screens/MainPage";
import img1 from "./media/1.png";
import img2 from "./media/2.png";
import img3 from "./media/3.png";
import img4 from "./media/4.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InnerPage from "./components/InnerPage/InnerPage";

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
        brand: "Apollo",
        item: "Running Short",
        description:
          "find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands",
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img2}`,
        id: 2,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
        brand: "Apollo",
        item: "Running Short",
        description:
          "find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands",
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img3}`,

        id: 3,
        inStock: false,
        inCart: false,
        cartQuantity: 0,
        brand: "Apollo",
        item: "Running Short",
        description:
          "find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands",
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img4}`,

        id: 4,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
        brand: "Apollo",
        item: "Running Short",
        description:
          "find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands",
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img1}`,

        id: 5,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
        brand: "Apollo",
        item: "Running Short",
        description:
          "find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands",
      },
      {
        title: "Apollo Running Short",
        price: 50,
        img: `${img3}`,

        id: 6,
        inStock: true,
        inCart: false,
        cartQuantity: 0,
        brand: "Apollo",
        item: "Running Short",
        description:
          "find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands",
      },
    ],
    total: null,
  };

  countTotal = () => {
    this.setState({
      ...this.state,
      total: this.state.products
        .filter((item) => {
          return item.inCart === true;
        })
        .map((elem) => {
          return elem.price;
        })
        .reduce(function (a, b) {
          return a + b;
        }, 0),
    });
  };

  addToCart = (productId) => {
    this.setState({
      ...this.state.products,
      products: this.state.products.map((product) => {
        if (product.id === productId) {
          product.inCart = !product.inCart;
          product.cartQuantity = 1;
        }
        return product;
      }),
    });
    this.countTotal();
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
    this.setState({ ...this.state, total: this.state.total + 50 });
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
    this.setState({ ...this.state, total: this.state.total - 50 });
  };

  add_to_card_from_inner_page = (productId) => {
    this.setState({
      ...this.state.products,
      products: this.state.products.map((product) => {
        if (product.id === productId) {
          product.inCart = true;
          product.cartQuantity = 1;
        }
        return product;
      }),
    });
  };

  render() {
    return (
      <>
        <Header
          products={this.state.products}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          total={this.state.total}
        />

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <InnerPage
                  products={this.state.products}
                  incrementQuantity={this.incrementQuantity}
                  decrementQuantity={this.decrementQuantity}
                  addToCart={this.add_to_card_from_inner_page}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
