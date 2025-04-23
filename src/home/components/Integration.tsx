import React from 'react'
import intIcon1 from '../../assets/images/intIcon1.png'
import intIcon2 from '../../assets/images/intIcon2.png'
import intIcon3 from '../../assets/images/intIcon3.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const Integration = () => {
  return (
    <section className='integration'>
      <Container>
        <div className='heading'>
          <h2>Easy 3 Steps Integration</h2>
        </div>
        <Row className="box">
          <Col md={4}  >
            <div className='card'>
              <img src={intIcon1} alt="intIcon1" />
              <div className='box-heading'>
                <span>Sign Up</span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <button>Get Started Now &nbsp;<FaArrowRightLong /></button>
              </div>
            </div>
          </Col>
          <Col md={4}  >
            <div className='card'>
              <img src={intIcon2} alt="intIcon1" />
              <div className='box-heading'>
                <span >Sign Up</span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <button>Get Started Now&nbsp; <FaArrowRightLong /></button>
              </div>
            </div>
          </Col>
          <Col md={4}  >
            <div className='card'>
              <img src={intIcon3} alt="intIcon1" />
              <div className='box-heading'>
                <span>Sign Up</span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <button>Get Started Now &nbsp;<FaArrowRightLong /> </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Integration