import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="section">
      <div className="hero-slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero-slider .home-slider-next",
            prevEl: ".hero-slider .home-slider-prev",
          }}
          pagination={{
            el: ".hero-slider .swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="hero-slide-item swiper-slide">
              {/* Hero Slider Bg Image Start */}
              <div className="hero-slide-bg">
                <img src="/images/slider/slide-1.jpg" alt="Slider Image" />
              </div>
              {/* Hero Slider Bg image End */}
              {/* Hero Slider Content Start */}
              <div className="container">
                <div className="hero-slide-content">
                  <h2 className="title">
                    Women New <br />
                    Collection
                  </h2>
                  <p>Up to 70% off selected Product</p>
                  <a
                    href="shop-grid.html"
                    className="btn btn-lg btn-primary btn-hover-dark"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              {/* Hero Slider Content End */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide-item swiper-slide">
              {/* Hero Slider Bg Image Start */}
              <div className="hero-slide-bg">
                <img src="/images/slider/slide-1-2.jpg" alt="Slider Image" />
              </div>
              {/* Hero Slider Bg Image End */}
              {/* Hero Slider Content Start */}
              <div className="container">
                <div className="hero-slide-content">
                  <h2 className="title">
                    Trend Fashion
                    <br />
                    Collection
                  </h2>
                  <p>Up to 40% off selected Product</p>
                  <a
                    href="shop-grid.html"
                    className="btn btn-lg btn-primary btn-hover-dark"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              {/* Hero Slider Content End */}
            </div>
          </SwiperSlide>

          <div className="swiper-pagination d-md-none" />
          {/* Swiper Pagination End */}
          {/* Swiper Navigation Start */}
          <div className="home-slider-prev swiper-button-prev main-slider-nav d-md-flex d-none">
            <i className="pe-7s-angle-left" />
          </div>
          <div className="home-slider-next swiper-button-next main-slider-nav d-md-flex d-none">
            <i className="pe-7s-angle-right" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
