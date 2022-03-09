import React, { Component } from "react";
import logo from "../../media/Logo.png";
import header_basket from "../../media/ShoppingCart.png";
import chevron from "../../media/chevron.png";
import "./Header.css";
export default class Header extends Component {
  state = {
    currency_selector_display: false,
    basket_menu_display: false,
  };

  currencySelectHandler = () => {
    this.setState({
      currency_selector_display: !this.state.currency_selector_display,
    });
    this.setState({ basket_menu_display: false });
  };

  toggleBasket = () => {
    this.setState({ basket_menu_display: !this.state.basket_menu_display });
    this.setState({
      currency_selector_display: false,
    });
  };

  render() {
    // const { id, counter } = this.state.itemQuantity;
    let itemQuantity = this.props.products.filter((item) => {
      if (item.inCart === true) {
        return item;
      }
    });

    return (
      <header>
        <nav className="categories_wrapper">
          <h1 className="active">WOMEN</h1>
          <h1>MEN</h1>
          <h1>KIDS</h1>
        </nav>
        <img src={logo} alt="Ecommerce" className="logo" />
        <div className="header_right_block">
          {/* here I am not using select tag on purpose to match styles */}
          <div className="select_handmade">
            <buttton
              onClick={this.currencySelectHandler}
              className="currency_btn"
            >
              <p className="currency_sign">$</p>
              <img src={chevron} alt="Ecommerce"></img>
            </buttton>
            {this.state.currency_selector_display && (
              <div className="currency_selector_menu">
                <button>$USD</button>
                <button>€EUR</button>
                <button>¥JPY</button>
              </div>
            )}
          </div>
          <div className="header_basket_wrapper">
            <button onClick={this.toggleBasket}>
              {itemQuantity.length > 0 && (
                <span className="shopping_cart_quantity">
                  {itemQuantity.length}
                </span>
              )}
              <img
                src={header_basket}
                alt="Ecommerce"
                className="header_basket_icon"
              />
            </button>
            {this.state.basket_menu_display && (
              <div className="shopping_cart_menu">
                <div className="title_box">
                  <h5>My Bag,</h5>
                  {itemQuantity.length !== 1 ? (
                    <p>{itemQuantity.length} items</p>
                  ) : (
                    <p>{itemQuantity.length} item</p>
                  )}
                </div>
                <div className="products_in_cart">
                  {this.props.products.map((product) => {
                    if (product.inCart) {
                      return (
                        <>
                          <div
                            key={product.id}
                            className="product_item_in_cart"
                          >
                            <div className="title_and_price">
                              <h6>{product.title}</h6>
                              <p>${product.price}</p>
                              <div className="size_btns">
                                <button className="chosen">S</button>
                                <button>M</button>
                              </div>
                            </div>
                            <div
                              className="quantity_wrapper"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "10px",
                                height: "137px",
                              }}
                            >
                              <button
                                onClick={() => {
                                  this.props.incrementQuantity(product.id);
                                }}
                              >
                                +
                              </button>
                              <span>{product.cartQuantity}</span>
                              <button
                                onClick={() => {
                                  this.props.decrementQuantity(product.id);
                                }}
                              >
                                -
                              </button>
                            </div>
                            <div className="image_and_quantity">
                              <img src={product.img} alt={product.title} />
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                  <div className="total_wrapper">
                    <p>Total</p>
                    <p>${this.props.total}</p>
                  </div>
                  <div className="cart_btns_wrapper">
                    <button>View Bag</button>
                    <button>Check Out</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
