import React from "react";
import "./CallToActionTow.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function CallToActionTow() {
  return (
    <div className="callToActionTow">
      <h2>نظر کاربران</h2>
      <h4>چند کلمه از زبان کارجویان</h4>
      <div className="callToActionTow-cards">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide className="SwiperSlide">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <img src="/images/testimonials/pic1.jpg" alt="logo" />
            <h5>لاوین جلیلوند</h5>
            <h6>فول استک</h6>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <img src="/images/testimonials/pic2.jpg" alt="logo" />
            <h5>مریم امیدیان</h5>
            <h6>دیزاینر</h6>
          </SwiperSlide>

          <SwiperSlide className="SwiperSlide">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <img src="/images/testimonials/pic5.jpg" alt="logo" />
            <h5>علی احمدی</h5>
            <h6>تریدر</h6>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <img src="/images/testimonials/pic4.jpg" alt="logo" />
            <h5>رضا زارعی</h5>
            <h6>بازاریاب</h6>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <img src="/images/testimonials/pic3.jpg" alt="logo" />
            <h5>نیلی کریمی</h5>
            <h6>فروشنده</h6>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <img src="/images/testimonials/pic6.jpg" alt="logo" />
            <h5>امیرحسین نمدی</h5>
            <h6>طراح گرافیک</h6>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CallToActionTow;
