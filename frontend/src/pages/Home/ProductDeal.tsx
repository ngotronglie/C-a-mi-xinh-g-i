import ProductDealItem from "../../components/ProductDealItem";

const ProductDeal = () => {
  return (
    <div className="section section-padding mt-0 overflow-hidden">
      <div className="container">
        {/* Section Title & Tab Start */}
        <div className="row">
          {/* Tab Start */}
          <div className="col-12">
            <div className="section-title-produt-tab-wrapper">
              <div
                className="section-title m-0"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <h1 className="title">Daily Deals</h1>
              </div>
              <ul
                className="product-tab-nav nav mt-n3"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <li className="nav-item">
                  <a className="nav-link active mt-3" href="#product-deal-all">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mt-3" href="#product-deal-clothings">
                    Best Sellers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mt-3" href="#product-deal-all">
                    Sale Items
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Tab End */}
        </div>

        {/* Section Title & Tab End */}
        {/* Products Tab Start */}
        <div className="grid grid-cols-2">
          <ProductDealItem />
          <ProductDealItem />
        </div>
        {/* Products Tab End */}
      </div>
    </div>
  );
};

export default ProductDeal;
