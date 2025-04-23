import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import logo from '../../assets/images/LOGO.png'

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="gy-4 footer-data ">
          <Col lg={4} md={6}>
            <div className=" d-flex align-items-center">
              <img src={logo} alt="logo" width={152} height={32} />
            </div>
            <p className="text-muted">
              Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text <br /> ever. Lorem Ipsum is simply dmy text.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#"><FaFacebookF size={30} className="text-muted fs-5" /></a>
              <a href="#"><FaTwitter size={30} className="text-muted fs-5" /></a>
              <a href="#"><FaDiscord size={30} className="text-muted fs-5" /></a>
              <a href="#"><FaLinkedinIn size={30} className="text-muted fs-5" /></a>
            </div>
            <p className="text-muted mt-2 mb-0">© 2024 SMARTX All rights reserved.</p>
          </Col>
          <Col md={6}>
            <Row className='justify-content-end'>
              <Col md={4}>
                <h6 className="fw-bold mb-3">Compare</h6>
                <ul className="list-unstyled text-muted">
                  <li><a href="#">Madgicx</a></li>
                  <li><a href="#">AdEspresso</a></li>
                  <li><a href="#">TrustAds</a></li>
                  <li><a href="#">Adzooma</a></li>
                </ul>
              </Col>

              <Col md={4}>
                <h6 className="fw-bold mb-3">Extra</h6>
                <ul className="list-unstyled text-muted">
                  <li><a href="#">Feature</a></li>
                  <li><a href="#">Case Study</a></li>
                  <li><a href="#">book a Demo</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
              </Col>

              <Col md={4}>
                <h6 className="fw-bold mb-3">More templates</h6>
                <ul className="list-unstyled text-muted">
                  <li><a href="#">Nexo</a></li>
                  <li><a href="#">Cloud</a></li>
                  <li><a href="#">Techty</a></li>
                  <li><a href="#">Simplly</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
