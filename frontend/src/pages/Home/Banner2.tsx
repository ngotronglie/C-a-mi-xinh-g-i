const Banner2 = () => {
  return (
    <div className="section">
      <div className="container">
        {/* Banners Start */}
        <div className="row mb-n6 overflow-hidden">
          {/* Banner Start */}
          <div
            className="col-md-6 col-12 mb-6"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="banner">
              <div className="banner-image">
                <a href="shop-grid.html">
                  <img src="/images/banner/banner-4.jpg" alt="Banner Image" />
                </a>
              </div>
              <div className="info">
                <div className="small-banner-content">
                  <h4 className="sub-title">
                    Up to <span>50%</span> Off
                  </h4>
                  <h3 className="title">Office Dress</h3>
                  <a
                    href="shop-grid.html"
                    className="btn btn-primary btn-hover-dark btn-sm"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Banner End */}
          {/* Banner Start */}
          <div
            className="col-md-6 col-12 mb-6"
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="banner">
              <div className="banner-image">
                <a href="shop-grid.html">
                  <img src="/images/banner/banner-5.jpg" alt="Banner Image" />
                </a>
              </div>
              <div className="info">
                <div className="small-banner-content">
                  <h4 className="sub-title">
                    Up to <span>40%</span> Off
                  </h4>
                  <h3 className="title">All Products</h3>
                  <a
                    href="shop-grid.html"
                    className="btn btn-primary btn-hover-dark btn-sm"
                  >
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

export default Banner2;
