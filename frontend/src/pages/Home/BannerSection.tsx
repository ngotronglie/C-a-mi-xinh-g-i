const BannerSection = () => {
  return (
    <div className="section section-margin">
      <div className="container">
        {/* Banners Start */}
        <div className="row mb-n6">
          {/* Banner Start */}
          <div className="col-lg-4 col-md-6 col-12 mb-6">
            <div className="banner" data-aos="fade-up" data-aos-delay={300}>
              <div className="banner-image">
                <a href="#">
                  <img src="/images/banner/banner-1.jpg" alt="" />
                </a>
              </div>
              <div className="info">
                <div className="small-banner-content">
                  <h4 className="sub-title">Sun Hat</h4>
                  <h3 className="title">
                    Get Offer <br />
                    For Summer
                  </h3>
                  <a href="shop-grid.html" className="btn btn-dark btn-sm">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Banner End */}
          {/* Banner Start */}
          <div className="col-lg-4 col-md-6 col-12 mb-6">
            <div className="banner" data-aos="fade-up" data-aos-delay={500}>
              <div className="banner-image">
                <a href="#">
                  <img src="/images/banner/banner-2.jpg" alt="" />
                </a>
              </div>
              <div className="info">
                <div className="small-banner-content">
                  <h4 className="sub-title">Ladies Bag</h4>
                  <h3 className="title">
                    Buy One <br />
                    Get One Free
                  </h3>
                  <a href="shop-grid.html" className="btn btn-dark btn-sm">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Banner End */}
          {/* Banner Start */}
          <div className="col-lg-4 col-md-6 col-12 mb-6">
            <div className="banner" data-aos="fade-up" data-aos-delay={700}>
              <div className="banner-image">
                <a href="#">
                  <img src="/images/banner/banner-3.jpg" alt="" />
                </a>
              </div>
              <div className="info">
                <div className="small-banner-content">
                  <h4 className="sub-title">Smart Watch</h4>
                  <h3 className="title">
                    20% Off <br />
                    Smart Watch
                  </h3>
                  <a href="shop-grid.html" className="btn btn-dark btn-sm">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Banner End */}
        </div>
        {/* Banners End */}
      </div>
    </div>
  );
};

export default BannerSection;
