import React from "react";
import { useSelector } from "react-redux";
import { allState } from "../../features/shopSlice";
import Instagram from "../../component/instagram/instagram";
// import Blog from "../../component/blog/blog";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import ProductsTab from "../ProductsTab/ProductsTab";
// import Products from "../products/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCar, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";

const Shop = () => {
  const state = useSelector(allState);

  const importAll = (r) => {
    return r.keys().map(r);
  };
  const instaImage = importAll(
    require.context("../../img/insta", false, /\.(png|jpe?g|svg)$/)
  );
  // const blogImage = importAll(
  //   require.context("../../img/blog", false, /\.(png|jpe?g|svg)$/)
  // );
  const logoImage = importAll(
    require.context("../../img/logos", false, /\.(png|jpe?g|svg)$/)
  );

  
  const instagram = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      {}

      <section className="instagram mt-5 text-center">
        <h3>SHOP OUR Instagram</h3>
        <a href="https://www.instagram.com/explore/tags/%E4%BD%A0%E7%9A%84%E7%BE%8E%E4%BD%A0%E8%87%AA%E5%B7%B1%E5%AE%9A%E7%BE%A9/">
          #你的美你自己定義
        </a>
        <Row>
          <Col>
            <Slider {...instagram}>
              {instaImage.map((img) => {
                return <Instagram img={img} />;
              })}
            </Slider>
          </Col>
        </Row>
      </section>

      <section className="logos my-5 text-center">
        <Container fluid>
          <Row>
            <Col>
            <h3>代理品牌</h3>
              <Slider {...logos}>
                {logoImage.map((img) => {
                  return (
                    <div className="container-logo-img d-flex justify-content-center align-items-center">
                      <img src={img} className="logo-img" />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </section>
    </>
  );
};

export default Shop;
