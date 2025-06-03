import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Hero = () => {
  useEffect(() => {
    // Ensure Swiper can see buttons after DOM mounts
    setTimeout(() => {
      const nextEl = document.querySelector('.swiper-button-next');
      const prevEl = document.querySelector('.swiper-button-prev');
      if (!nextEl || !prevEl) {
        console.warn('Swiper navigation buttons not found.');
      }
    }, 0);
  }, []);

  return (
    <section className="sec1">
      <section className="main mySwiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="wrapper"
        >
          <SwiperSlide className="slide">
            <img src="/public/images/z3.jpg" alt="Campus View" className="image" />
            <div className="image-data">
              <span className="text">Empowering Students Through Excellence</span>
              <h2 className="title">Amar Singh College</h2>
              <a href="#about" className="button">Learn More</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src="/public/images/asc3.jpeg" alt="College Library" className="image" />
            <div className="image-data">
              <span className="text">Modern Facilities & Enriched Learning Environment</span>
              <h2 className="title">Shaping the Future</h2>
              <a href="#facilities" className="button">Explore Facilities</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src="/public/images/asc4.jpg" alt="Seminar Event" className="image" />
            <div className="image-data">
              <span className="text">Fostering Innovation, Research & Growth</span>
              <h2 className="title">Where Ideas Take Flight</h2>
              <a href="#research" className="button">Discover More</a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* 👇 Navigation buttons OUTSIDE the <Swiper> component */}
        <div className="swiper-button-prev nav-btn"></div>
        <div className="swiper-button-next nav-btn"></div>
      </section>
    </section>
  );
};

export default Hero;
