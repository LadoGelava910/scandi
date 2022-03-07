import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./InnerPage.css";
import SizeButton from "./SizeButton";
const InnerPage = ({ products }) => {
  console.log(products);
  const { id } = useParams();
  console.log(id);
  const size_btns = ["XS", "S", "M", "L"];
  // const navigate = useNavigate();
  return (
    <>
      {products.map((item) => {
        if (parseInt(item.id) === parseInt(id)) {
          return (
            <div key={item.id} className="product_inner_wrapper">
              <div className="left_block">
                {console.log(item, "item")}
                <img src={item.img} alt={item.title} />
                <img src={item.img} alt={item.title} />
                <img src={item.img} alt={item.title} />
              </div>
              <div className="middle_main_block">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="right_block">
                <h2>
                  <strong>{item.brand}</strong>
                </h2>
                <h2>{item.item}</h2>
                <div className="size_wrapper">
                  <h6>SIZE:</h6>
                  <div className="inner_size_btns">
                    {size_btns.map((btn, index) => {
                      return <SizeButton key={index} btn={btn} />;
                    })}
                  </div>
                </div>
                <div className="price_wrapper">
                  <h6>PRICE:</h6>
                  <p>
                    <b>${item.price.toFixed(2)}</b>
                  </p>
                </div>
                <button className="add_to_cart_inner">ADD TO CART</button>
                <div className="inner_description_wrapper">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default InnerPage;
