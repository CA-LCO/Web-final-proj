import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { v4 as uuidv4 } from "uuid";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {
  faPhone,
  // faFax,
  faEnvelope,
  // faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const currentYear= new Date ().getFullYear ();
const Footer = () => {

  const importAll = (r) => {
    return r.keys().map(r);
  };
  const footerIcon = importAll(
    require.context("../../img/icon-footer", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} className="mid-footer p-4">
            <Row className="gap-4 gap-sm-0">
              
              <Col xs={12} sm={6} lg={3} className="col-two mb-sm-4">
                <h3 className=" pb-2">Quick links</h3>
                <Nav className="d-flex flex-column gap-2">
                  <Nav.Item>
                    <Nav.Link href="../../about">About Us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="../../Appointment">預約荃灣試身室 Visit Our Showroom</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Refund & Exchange Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link >Contact Us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Terms of Service</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} sm={6} lg={3} className="col-two mb-sm-4">
                <h3 className=" pb-2">Shipping Options:</h3>
                <Nav className="d-flex flex-column gap-2">
                  <Nav.Item>
                    All products can be picked up in showroom in Tsuen Wan or send to your address. Free shipping for purchase over HKD $10.
                    <br></br>
                    <br></br>
                    <h3>Payment Options:</h3>
                    - Bank Transfer/ Payme/FPS<br></br>
                    (please WhatsApp +852 6216-9945)
                    <br></br>
                    <br></br>
                    -Credit Card/Paypal
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} sm={6} lg={3} className="col-three mb-sm-4">
                <h3 className=" pb-2">Contact Us</h3>
                <Nav className="d-flex flex-column gap-2">
                  <Nav.Item>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    Whatsapp (852)6216-9945
                  </Nav.Item>
                  <Nav.Item>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    info@ching-active.com
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} sm={6} lg={3} className="col-four mb-sm-4">
                <h3 className="pb-2">Newsletter</h3>
                <Col xs={12} lg={6} className="right mt-2 mt-lg-0">
                <Form className="form-subscribe justify-content-center justify-content-lg-end align-items-center gap-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className="email-input rounded-0"
                      placeholder="Email Address"
                    />
                  </Form.Group>
                  <br></br>
                  <Button
                    className="button-subscribe rounded-0 text-uppercase text-center"
                    type="submit"
                  >
                    subscribe
                  </Button>
                </Form>
                </Col>  
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="bg-white px-1 py-4">
          <Col xs={12} lg={6} className="text-center mb-3 mb-lg-0">
            <Nav className="d-flex gap-4 mt-3 flex-row justify-content-start align-items-center ">
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="text-copyright">
              Copyright © {currentYear}, Ching Active
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <Nav className="footer-icon-nav">
              {footerIcon.map((img) => {
                return (
                  <Nav.Item key={uuidv4()}>
                    <Nav.Link>
                      <Image src={img} className="footer-icon" />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
