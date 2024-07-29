import ProductItem from "../../components/ProductItem";

const ProductSection = () => {
  return (
    <div className="section section-padding mt-0">
      <div className="container">
        {/* Section Title & Tab Start */}
        <div className="row">
          {/* Tab Start */}
          <div className="col-12">
            <ul className="product-tab-nav nav justify-content-center mb-10 title-border-bottom mt-n3">
              <li className="nav-item" data-aos="fade-up" data-aos-delay={300}>
                <a className="nav-link active mt-3">New Arrivals</a>
              </li>
              <li className="nav-item" data-aos="fade-up" data-aos-delay={400}>
                <a className="nav-link mt-3">Best Sellers</a>
              </li>
              <li className="nav-item" data-aos="fade-up" data-aos-delay={500}>
                <a className="nav-link mt-3">Sale Items</a>
              </li>
            </ul>
          </div>
          {/* Tab End */}
        </div>

        {/* Section Title & Tab End */}
        {/* Products Tab Start */}
        <div className="grid grid-cols-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        {/* Products Tab End */}
      </div>
    </div>
  );
};

export default ProductSection;
