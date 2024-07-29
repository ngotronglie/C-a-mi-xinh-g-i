const Wishlist = () => {
  return (
    <>
      <>
        {/* Breadcrumb Section Start */}
        <div className="section">
          {/* Breadcrumb Area Start */}
          <div className="breadcrumb-area bg-light">
            <div className="container-fluid">
              <div className="breadcrumb-content text-center">
                <h1 className="title">Wishlist</h1>
                <ul>
                  <li>
                    <a href="index.html">Home </a>
                  </li>
                  <li className="active">Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Breadcrumb Area End */}
        </div>
        {/* Breadcrumb Section End */}
        {/* Wishlist Section Start */}
        <div className="section section-margin">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wishlist-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">Image</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-stock">Stock Status</th>
                        <th className="pro-cart">Add to Cart</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/images/products/small-product/1.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">
                            Brother Hoddies in Grey <br />s / green
                          </a>
                        </td>
                        <td className="pro-price">
                          <span>$95.00</span>
                        </td>
                        <td className="pro-stock">
                          <span>In Stock</span>
                        </td>
                        <td className="pro-cart">
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-hover-primary rounded-0"
                          >
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <i className="pe-7s-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/images/products/small-product/2.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">
                            Basic Jogging Shorts <br />
                            Blue
                          </a>
                        </td>
                        <td className="pro-price">
                          <span>$75.00</span>
                        </td>
                        <td className="pro-stock">
                          <span>In Stock</span>
                        </td>
                        <td className="pro-cart">
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-hover-primary rounded-0"
                          >
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <i className="pe-7s-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/images/products/small-product/10.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">
                            Lust For Life <br />
                            Bulk/S
                          </a>
                        </td>
                        <td className="pro-price">
                          <span>$295.00</span>
                        </td>
                        <td className="pro-stock">
                          <span>In Stock</span>
                        </td>
                        <td className="pro-cart">
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-hover-primary rounded-0"
                          >
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <i className="pe-7s-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/images/products/small-product/4.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">Simple Woven Fabrics</a>
                        </td>
                        <td className="pro-price">
                          <span>$30.00</span>
                        </td>
                        <td className="pro-stock">
                          <span>In Stock</span>
                        </td>
                        <td className="pro-cart">
                          <a
                            href="cart.html"
                            className="btn btn-dark btn-hover-primary rounded-0"
                          >
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <i className="pe-7s-trash" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wishlist Section End */}
      </>
    </>
  );
};

export default Wishlist;
