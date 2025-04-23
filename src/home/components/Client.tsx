import React from 'react'
import clientImg1 from '../../assets/images/clientImg1.png'
import clientImg2 from '../../assets/images/clientImg2.png'
import clientImg3 from '../../assets/images/clientImg3.png'
import quetImg from '../../assets/images/quetImg.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';

function Client() {
  return (
    <section>
      <div className='client'>
        <Container>
          <Row className='align-items-center'>
            <Col md={8} xs={12} className='g-3'>
              <h2> Words from happy clients</h2>
              <span>Lorem Ipsum is simply dummy a and typesetting industry. Lorem Ipsum has been t industry's standard dummy text ever since.Lorem Ips dummy.</span>
            </Col>
            <Col md={4} xs={12}>
              <button className='btn btn-light client-btn ms-auto d-block'>See More Reviews</button>
            </Col>
          </Row>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className='card'>
                <span className='d-flex justify-content-between'>
                  <div>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaRegStarHalfStroke /></a>
                  </div>
                  <div>
                    <img src={quetImg} alt="" />
                  </div>
                </span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <div className="d-flex items-center gap-4 mt-6 user ">
                  <img  src={clientImg1}  className="" />
                  <div>
                    <h3 className="text-lg font-semibold  mb-0">Palermo Dikosta</h3>
                    <p className="text-sm text-gray-500 pt-0">Manager at TechMatter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <span className='d-flex justify-content-between'>
                  <div>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaRegStarHalfStroke /></a>
                  </div>
                  <div>
                    <img src={quetImg} alt="" />
                  </div>
                </span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <div className="d-flex items-center gap-4 mt-6 user ">
                  <img  src={clientImg2}  className="" />
                  <div>
                    <h3 className="text-lg font-semibold  mb-0">Danial waska</h3>
                    <p className="text-sm text-gray-500 pt-0">Manager at TechMatter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <span className='d-flex justify-content-between'>
                  <div>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaRegStarHalfStroke /></a>
                  </div>
                  <div>
                    <img src={quetImg} alt="" />
                  </div>
                </span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <div className="d-flex items-center gap-4 mt-6 user ">
                  <img  src={clientImg3}  className="" />
                  <div>
                    <h3 className="text-lg font-semibold  mb-0">Jennifer Lawrence</h3>
                    <p className="text-sm text-gray-500 pt-0">Manager at TechMatter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <span className='d-flex justify-content-between'>
                  <div>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaRegStarHalfStroke /></a>
                  </div>
                  <div>
                    <img src={quetImg} alt="" />
                  </div>
                </span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <div className="d-flex items-center gap-4 mt-6 user ">
                  <img  src={clientImg1}  className="" />
                  <div>
                    <h3 className="text-lg font-semibold  mb-0">Palermo Dikosta</h3>
                    <p className="text-sm text-gray-500 pt-0">Manager at TechMatter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <span className='d-flex justify-content-between'>
                  <div>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaStar /></a>
                    <a href=""><FaRegStarHalfStroke /></a>
                  </div>
                  <div>
                    <img src={quetImg} alt="" />
                  </div>
                </span>
                <p>Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.</p>
                <div className="d-flex items-center gap-4 mt-6 user ">
                  <img  src={clientImg1}  className="" />
                  <div>
                    <h3 className="text-lg font-semibold  mb-0">Palermo Dikosta</h3>
                    <p className="text-sm text-gray-500 pt-0">Manager at TechMatter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container >
      </div>
    </section >
  )
}

export default Client