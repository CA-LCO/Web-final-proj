import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import hero1 from "../../img/hero1.jpg";
import hero2 from "../../img/hero2.png";
// import subBanner1 from "../../img/sub-banner1.jpg";
// import subBanner2 from "../../img/sub-banner2.jpg";
import AOS from "aos";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="hero-slider">
        <Slider {...settings}>
          <div className="wrapper ">
            <div
              className="slick-content position-relative d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${hero1})`,
                backgroundPosition: "60%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <div className="content position-absolute">
                      <Link className="shop-now" to="/">
                        shop now
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="wrapper ">
            <div
              className="slick-content position-relative d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${hero2})`,
                backgroundPosition: "60%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <div className="content position-absolute">
                      <Link className="shop-now" to="/">
                        shop now
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>

     
    </>
  );
};

export default Hero;
