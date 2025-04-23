import React from 'react'
import exploreImage from '../../assets/images/exploreImage.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCircleCheck } from 'react-icons/fa6'

const Explore = () => {
  return (
    <section className='explore'>
      <Container>
        <h2>Comprehensive marketing team <br /> strategy and direction</h2>
        <Row className='explores'>
          <Col md={6}>
            <img src={exploreImage} alt="" className='img-fluid' />
          </Col>
          <Col md={6} className='contact-text'>
            <p>Lorem Ipsum is simply dummy text of to and typesetting <br />industry. Lorem Ipsum he been the industrandard dummy <br /> text ever since the 1500s, when an unknown printer took <br /> a galley of t scrambled it to make a type specimen book.</p>
            <p><FaCircleCheck />&nbsp; Expert & experienced marketing team</p>
            <p><FaCircleCheck />&nbsp; Top supportive teams & experts</p>
            <button className='btn btn-primary'>Explore More</button>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Explore