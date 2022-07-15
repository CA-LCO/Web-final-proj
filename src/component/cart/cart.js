import React from "react";
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import  {CartContext}  from '../CartContext/CartContext';
import QuantityBtn from '../QuantityBtn/QuantityBtn';

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import noCart from "../../img/not-cart.png";
import handleSubtract from "../QuantityBtn/QuantityBtn"
// import Products from "../../data/db.json";

import { allState, changeCount } from "../../features/shopSlice";





const Cart = () => {


  let {cartItems}= useContext(CartContext)
  let cartEmpty = cartItems.length<= 0 ? true : false
  let grandTotal = cartItems.reduce((total, product)=>{
    return total += product.price*product.quantity
  },0)
  const freeShippingPrice = 400

  // const state = useSelector(allState);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   totalCart();
  // }, [cartItems]);
  
  const totalCart = () => {
    return cartItems
      .reduce((acc, cartItems) => acc + cartItems.quantity * cartItems.price, 0)
      .toFixed(2);
  };

  const handleDelete = (cartItems) => {
    const data = { count: 0 };
    dispatch(changeCount({ cartItems, data }));
  };
  const handleIncrease = (cartItems) => {
    const data = { count: cartItems.quantity + 1 };
    dispatch(changeCount({ cartItems, data }));
  };

  const handleDecrease = (cartItems) => {
    const data = { count: cartItems.quantity - 1 };
    dispatch(changeCount({ cartItems, data }));
  };


  


  return (
    <div className="cart-section h-100">


      <h2>Your Shopping Cart</h2>



      <Container className="h-100">
        {cartItems.length > 0 ? (
          <>
            <Row className="gx-0 d-none d-lg-flex">
              <Col>
                <div className="border  text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                  image
                </div>
              </Col>
              <Col>
                <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                  product name
                </div>
              </Col>
              <Col>
                <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                  price
                </div>
              </Col>
              <Col>
                <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                  quantity
                </div>
              </Col>
              <Col>
                <div className="border text-center text-capitalize fw-bold p-2 bg-dark text-white column-thead">
                  action
                </div>
              </Col>
            </Row>
            <Row className="gx-md-0">
              {cartItems.map((product) => {
                const { id, image, name, price, count } = product;
                return (
                  <Row className="gx-0 row-wishlist d-block d-lg-flex mb-5 mb-lg-0">
                    <Col>
                      <div
                        data-colName="image"
                        className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                      >
                        <div className="d-flex justify-content-center align-items-center content-wishlist">
                          <Image
                            src={image}
                            alt={image}
                            className="rounded-3 imgCart"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div
                        data-colName="name"
                        className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                      >
                        <p className="content-wishlist text-center ">{product.name}</p>
                      </div>
                    </Col>
                    <Col>
                      <div
                        data-colName="price"
                        className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                      >
                        <p className="content-wishlist text-center">${product.price}</p>
                      </div>
                    </Col>
                    <Col>
                      <div
                        data-colName="quantity"
                        className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                      >
                        <p className="content-wishlist text-center ">{product.quantity}</p>
                      </div>
                    </Col>
                    <Col>
                      <div
                        data-colName="action"
                        className="col-wishlist position-relative d-flex justify-content-center align-items-center justify-content-sm-end"
                      >
                        <div className="d-flex gap-2 justify-content-center align-items-center  content-wishlist">
                          <Button
                            title="remove"
                            className="btn-common"
                            variant="dark"
                            onClick={() => handleSubtract (cartItems.quantity)}
                          >
                            x
                          </Button>
                          <Button
                            className="text-white btn-common"
                            title="increase"
                            variant="dark"
                            onClick={() => handleIncrease(cartItems.quantity)}
                          >
                            +
                          </Button>
                          <Button
                            className="text-white btn-common"
                            title="decrease"
                            variant="dark"
                            disabled={count === 0 ? true : false}
                            onClick={() => handleDecrease(cartItems)}
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Row>

            <div className="total-price mt-4">
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  className="d-flex justify-content-between justify-content-sm-start gap-sm-3 align-items-center mb-3 mb-sm-0 "
                >
                  <p className="total-text text-capitalize fw-bold">
                    total Price:
                  </p>
                  <p className="total-price"> {totalCart()}</p>
                </Col>
                <Col xs={12} sm={6} className="text-sm-end">
                  <Link
                    className="checkout-btn d-block d-sm-inline-block py-2 px-2 px-sm-4 text-white text-uppercase text-center"
                    to="/checkout"
                  >
                    checkout
                  </Link>
                </Col>
              </Row>
            </div>
          </>
        ) : (
          <Col xs={12} className="noLike_cart">
            <Image src={noCart} />
            <h4>your cart is empty.</h4>
            <Link to="/BestSellerPage">Go to Best Seller Page to Shop now!</Link>
            
          </Col>
        )}
      </Container>
    </div>
  );
};

export default Cart;
