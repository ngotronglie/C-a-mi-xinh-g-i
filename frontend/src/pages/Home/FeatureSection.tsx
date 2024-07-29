const FeatureSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="feature-wrap">
          <div className="row row-cols-lg-4 row-cols-xl-auto row-cols-sm-2 row-cols-1 justify-content-between mb-n5">
            {/* Feature Start */}
            <div className="col mb-5" data-aos="fade-up" data-aos-delay={300}>
              <div className="feature">
                <div className="icon text-primary align-self-center">
                  <img
                    src="/images/icons/feature-icon-2.png"
                    alt="Feature Icon"
                  />
                </div>
                <div className="content">
                  <h5 className="title">Free Shipping</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            {/* Feature End */}
            {/* Feature Start */}
            <div className="col mb-5" data-aos="fade-up" data-aos-delay={500}>
              <div className="feature">
                <div className="icon text-primary align-self-center">
                  <img
                    src="/images/icons/feature-icon-3.png"
                    alt="Feature Icon"
                  />
                </div>
                <div className="content">
                  <h5 className="title">Support 24/7</h5>
                  <p>Support 24 hours a day</p>
                </div>
              </div>
            </div>
            {/* Feature End */}
            {/* Feature Start */}
            <div className="col mb-5" data-aos="fade-up" data-aos-delay={700}>
              <div className="feature">
                <div className="icon text-primary align-self-center">
                  <img
                    src="/images/icons/feature-icon-4.png"
                    alt="Feature Icon"
                  />
                </div>
                <div className="content">
                  <h5 className="title">Money Return</h5>
                  <p>Back guarantee under 5 days</p>
                </div>
              </div>
            </div>
            {/* Feature End */}
            {/* Feature Start */}
            <div className="col mb-5" data-aos="fade-up" data-aos-delay={900}>
              <div className="feature">
                <div className="icon text-primary align-self-center">
                  <img
                    src="/images/icons/feature-icon-1.png"
                    alt="Feature Icon"
                  />
                </div>
                <div className="content">
                  <h5 className="title">Order Discount</h5>
                  <p>Onevery order over $150</p>
                </div>
              </div>
            </div>
            {/* Feature End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
