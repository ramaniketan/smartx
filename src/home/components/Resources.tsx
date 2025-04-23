import React from 'react'
import resImg1 from '../../assets/images/resImg1.png'
import resImg2 from '../../assets/images/resImg2.png'
import resImg3 from '../../assets/images/resImg3.png'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

type ResType = {
  img: string
  description: string
}

const resData: ResType[] = [
  {
    img: resImg1,
    description: `Easily add analytics to your Android or iOS app`
  },
  {
    img: resImg2,
    description: 'Innovative Mobile Apps for Audience Growth Strategies'
  },
  {
    img: resImg3,
    description: 'Easily Integrate Analytics into Your Android/iOS Application"'
  },
]

const Resources = () => {
  return (
    <section className='resources'>
      <Container>
        <h2 className='mb-5'>Explore our latest resources and updates</h2>
        <Row>
          {
            resData.map((item, idx) => (
              <Col md={4}>
                <Card className="resources-box " key={idx}>
                  <CardBody>
                  <img src={item.img} className='w-100' height={259} alt="" />
                  <p className='box d-inline-flex rounded-pill'>Development</p>
                  <h5>{item.description}</h5>
                  </CardBody>
                </Card>

              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Resources