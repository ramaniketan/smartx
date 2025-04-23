import React from 'react'
import exploreImage from '../../assets/images/exploreImg2.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCircleCheck } from 'react-icons/fa6'

const Explore2 = () => {
  return (

    <section className='explore2'>
      <Container>
        <Row className='explores'>
          <Col md={6} className='contact-text'>
          <h2>24/7 customer support & services</h2>
            <p>Lorem Ipsum is simply dummy text of to and typesetting <br />industry. Lorem Ipsum he been the industrandard dummy <br /> text ever since the 1500s, when an unknown printer took <br /> a galley of t scrambled it to make a type specimen book.</p>
            <button className='btn btn-primary'>Get Started For Free</button>
          </Col>
          <Col md={6}>
            <img src={exploreImage} alt="" className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Explore2