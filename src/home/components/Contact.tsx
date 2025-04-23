import React from 'react'
import contactImg from '../../assets/images/contactImg.png'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className='contact'>
      <Container>
        <Row>
          <Col md={6} xs={12} >
            <img src={contactImg} alt="" className='img-fluid' />
          </Col>
          <Col md={6} xs={12} className='contact-text'>
            <h2>Empower your project's success with our agency</h2>
            <p>Lorem Ipsum is simply dummy text of to and typesetting <br/>industry. Lorem Ipsum he been the industrandard dummy <br/> text ever since the 1500s, when an unknown printer took <br/> a galley of t scrambled it to make a type specimen book.</p>
            <button className='btn btn-primary'>Contact with us</button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact