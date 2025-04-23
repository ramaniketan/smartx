import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroImg from '../../assets/images/HeroImage.png'
import herobg from '../../assets/images/herobg.png'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <Container>
          <div>
            <Row className='d-flex'>
              <Col>
                <div className='main-menu'>
                  <h1>Next-gen saas tool to increase your net sales</h1>
                  <p>Creating account to our website and use it for your required time. We are ready to give you support all the time.</p>
                  <div className='hero-btn'>
                    <button className='btn-1'>Get started for free</button>
                    <button className='btn-2'>Book a free demo</button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='hero-img'>
                  <img src={heroImg}  alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className='hero-last' />
      </section>
    </>
  )
}

export default Hero