import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div
      className="product product-border-left mb-10"
      data-aos="fade-up"
      data-aos-delay={300}
    >
      <div className="thumb">
        <Link to="/products/123" className="image">
          <img
            className="first-image"
            src="/images/products/medium-size/1.jpg"
            alt="Product"
          />
          <img
            className="second-image"
            src="/images/products/medium-size/5.jpg"
            alt="Product"
          />
        </Link>
        <div className="actions">
          <a href="#" className="action wishlist">
            <i className="pe-7s-like" />
          </a>
          <a
            href="#"
            className="action quickview"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            <i className="pe-7s-search" />
          </a>
          <a href="#" className="action compare">
            <i className="pe-7s-shuffle" />
          </a>
        </div>
      </div>
      <div className="content">
        <h4 className="sub-title">
          <a href="single-product.html">Studio Design</a>
        </h4>
        <h5 className="title">
          <a href="single-product.html">Brother Hoddies in Grey</a>
        </h5>
        <span className="ratings">
          <span className="rating-wrap">
            <span className="star" style={{ width: "100%" }} />
          </span>
          <span className="rating-num">(4)</span>
        </span>
        <span className="price">
          <span className="new">$38.50</span>
          <span className="old">$42.85</span>
        </span>
        <button className="btn btn-sm btn-outline-dark btn-hover-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
