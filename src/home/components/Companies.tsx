import React from 'react'
import { Container } from 'react-bootstrap'
import logo1 from '../../assets/images/logo(1).png'
import logo2 from '../../assets/images/logo(2).png'
import logo3 from '../../assets/images/logo(3).png'
import logo from '../../assets/images/Logo.png'
import logo4 from '../../assets/images/logo(4).png'
import logo5 from '../../assets/images/logo(5).png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const Companies = () => {
  return (
    <section className='companies'>
      <Container>
        <div className='heading'>
          <h4>Trusted by great companies</h4>
        </div>
        <div className='slider'>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <img src={logo} alt="logo1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo1} alt="logo1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo2} alt="logo2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo3} alt="logo3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo4} alt="logo4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo5} alt="logo5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo3} alt="logo3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section >
  )
}

export default Companies