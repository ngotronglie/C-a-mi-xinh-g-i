import ProductItem from "../../components/ProductItem";

const ListProduct = () => {
  return (
    <>
      <>
        {/* Breadcrumb Section Start */}
        <div className="section">
          {/* Breadcrumb Area Start */}
          <div className="breadcrumb-area bg-light">
            <div className="container-fluid">
              <div className="breadcrumb-content text-center">
                <h1 className="title">List Product</h1>
                <ul>
                  <li>
                    <a href="index.html">Home </a>
                  </li>
                  <li className="active">shop</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Breadcrumb Area End */}
        </div>
        {/* Breadcrumb Section End */}

        {/* Shop Section Start */}
        <div className="section section-margin">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/*shop toolbar start*/}
                <div className="shop_toolbar_wrapper flex-column flex-md-row mb-10">
                  {/* Shop Top Bar Left start */}
                  <div className="shop-top-bar-left mb-md-0 mb-2">
                    <div className="shop-top-show">
                      <span>Showing 1–12 of 39 results</span>
                    </div>
                  </div>
                  {/* Shop Top Bar Left end */}
                  {/* Shopt Top Bar Right Start */}
                  <div className="shop-top-bar-right">
                    <div className="shop-short-by mr-4">
                      <select
                        className="nice-select"
                        aria-label=".form-select-sm example"
                      >
                        <option>Show 24</option>
                        <option value={1}>Show 24</option>
                        <option value={2}>Show 12</option>
                        <option value={3}>Show 15</option>
                        <option value={3}>Show 30</option>
                      </select>
                    </div>
                    <div className="shop-short-by mr-4">
                      <select
                        className="nice-select"
                        aria-label=".form-select-sm example"
                      >
                        <option>Short by Default</option>
                        <option value={1}>Short by Popularity</option>
                        <option value={2}>Short by Rated</option>
                        <option value={3}>Short by Latest</option>
                        <option value={3}>Short by Price</option>
                        <option value={3}>Short by Price</option>
                      </select>
                    </div>
                    <div className="shop_toolbar_btn">
                      <button
                        data-role="grid_4"
                        type="button"
                        className="active btn-grid-4"
                        title="Grid"
                      >
                        <i className="fa fa-th" />
                      </button>
                      <button
                        data-role="grid_list"
                        type="button"
                        className="btn-list"
                        title="List"
                      >
                        <i className="fa fa-th-list" />
                      </button>
                    </div>
                  </div>
                  {/* Shopt Top Bar Right End */}
                </div>
                {/*shop toolbar end*/}
                {/* Shop Wrapper Start */}
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
                {/* Shop Wrapper End */}
                {/*shop toolbar start*/}
                <div className="shop_toolbar_wrapper mt-10">
                  {/* Shop Top Bar Left start */}
                  <div className="shop-top-bar-left">
                    <div className="shop-short-by mr-4">
                      <select
                        className="nice-select rounded-0"
                        aria-label=".form-select-sm example"
                      >
                        <option>Show 12 Per Page</option>
                        <option value={1}>Show 12 Per Page</option>
                        <option value={2}>Show 24 Per Page</option>
                        <option value={3}>Show 15 Per Page</option>
                        <option value={3}>Show 30 Per Page</option>
                      </select>
                    </div>
                  </div>
                  {/* Shop Top Bar Left end */}
                  {/* Shopt Top Bar Right Start */}
                  <div className="shop-top-bar-right">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* Shopt Top Bar Right End */}
                </div>
                {/*shop toolbar end*/}
              </div>
            </div>
          </div>
        </div>
        {/* Shop Section End */}
      </>
    </>
  );
};

export default ListProduct;
