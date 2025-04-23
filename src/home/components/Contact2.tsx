import React from 'react'
import contactImg from '../../assets/images/contactImg2.png'
import { Col, Container, Row } from 'react-bootstrap'

const Contact2 = () => {
  return (
    <section className='contact'>
      <Container>
        <Row>
          <Col md={6} className='contact-text'>
            <h2>Smartx has the full types of <br /> potential for your startup <br /> business</h2>
            <p>Lorem Ipsum is simply dummy text of to and typesetting <br />industry. Lorem Ipsum he been the industrandard dummy <br /> text ever since the 1500s, when an unknown printer took <br /> a galley of t scrambled it to make a type specimen book.</p>
            <Row className='pt-4'>
              <Col md={4}>
                <h2 className=''>4.8/5</h2>
                <div className='con-text'>Success rate</div>
              </Col>
              <Col md={4}>
                <h2 className=''>30M+</h2>
                <div className='con-text'>Global users</div>
              </Col>
              <Col md={4}>
                <h2 className=''>50+</h2>
                <div className='con-text'>Projects completed</div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <img src={contactImg} alt="" className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact2