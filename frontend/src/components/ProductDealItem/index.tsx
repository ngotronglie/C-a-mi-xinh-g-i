const ProductDealItem = () => {
  return (
    <div
      className="swiper-slide product-wrapper"
      data-aos="fade-right"
      data-aos-delay={600}
    >
      {/* Single Product Deal Start */}
      <div className="product single-deal-product product-border-left">
        <div className="thumb">
          <a href="single-product-sale.html" className="image">
            <img src="/images/products/medium-size/1.jpg" alt="Product" />
          </a>
          <span className="badges">
            <span className="sale">-30%</span>
          </span>
        </div>
        <div className="content">
          <p className="inner-desc">Hurry Up! Offer Ends In:</p>
          <div className="countdown-area">
            <div
              className="countdown-wrapper d-flex"
              data-countdown="2023/12/24"
            />
          </div>
          <h4 className="sub-title">
            <a href="single-product-sale.html">Studio Design</a>
          </h4>
          <h5 className="title">
            <a href="single-product-sale.html">Enjoy The Rest T-Shirt</a>
          </h5>
          <span className="ratings">
            <span className="rating-wrap">
              <span className="star" style={{ width: "100%" }} />
            </span>
            <span className="rating-num">(4)</span>
          </span>
          <span className="price">
            <span className="new">$38.00</span>
            <span className="old">$42.05</span>
          </span>
          <button className="btn btn-sm btn-outline-dark btn-hover-primary">
            Add To Cart
          </button>
        </div>
      </div>
      {/* Single Product Deal End */}
    </div>
  );
};

export default ProductDealItem;
