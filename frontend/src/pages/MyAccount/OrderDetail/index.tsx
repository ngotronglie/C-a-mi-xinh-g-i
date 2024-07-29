const OrderDetail = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Cart Table Start */}
            <div className="cart-table table-responsive">
              <table className="table table-bordered">
                {/* Table Head Start */}
                <thead>
                  <tr>
                    <th className="pro-thumbnail">Image</th>
                    <th className="pro-title">Product</th>
                    <th className="pro-price">Price</th>
                    <th className="pro-quantity">Quantity</th>
                    <th className="pro-subtotal">Total</th>
                    <th className="pro-remove">Remove</th>
                  </tr>
                </thead>
                {/* Table Head End */}
                {/* Table Body Start */}
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
                    <td className="pro-quantity">
                      <div className="quantity">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            defaultValue={0}
                            type="text"
                          />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                          <div className="dec qtybutton">
                            <i className="fa fa-minus" />
                          </div>
                          <div className="inc qtybutton">
                            <i className="fa fa-plus" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pro-subtotal">
                      <span>$95.00</span>
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
                    <td className="pro-quantity">
                      <div className="quantity">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            defaultValue={0}
                            type="text"
                          />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                          <div className="dec qtybutton">
                            <i className="fa fa-minus" />
                          </div>
                          <div className="inc qtybutton">
                            <i className="fa fa-plus" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pro-subtotal">
                      <span>$75.00</span>
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
                    <td className="pro-quantity">
                      <div className="quantity">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            defaultValue={0}
                            type="text"
                          />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                          <div className="dec qtybutton">
                            <i className="fa fa-minus" />
                          </div>
                          <div className="inc qtybutton">
                            <i className="fa fa-plus" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pro-subtotal">
                      <span>$295.00</span>
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
                      <span>$60.00</span>
                    </td>
                    <td className="pro-quantity">
                      <div className="quantity">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            defaultValue={2}
                            type="text"
                          />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                          <div className="dec qtybutton">
                            <i className="fa fa-minus" />
                          </div>
                          <div className="inc qtybutton">
                            <i className="fa fa-plus" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pro-subtotal">
                      <span>$110.00</span>
                    </td>
                    <td className="pro-remove">
                      <a href="#">
                        <i className="pe-7s-trash" />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* Table Body End */}
              </table>
            </div>
            {/* Cart Table End */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 ms-auto col-custom">
            {/* Cart Calculation Area Start */}
            <div className="cart-calculator-wrapper">
              {/* Cart Calculate Items Start */}
              <div className="cart-calculate-items">
                {/* Cart Calculate Items Title Start */}
                <h3 className="title">Cart Totals</h3>
                {/* Cart Calculate Items Title End */}
                {/* Responsive Table Start */}
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Sub Total</td>
                        <td>$230</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>$70</td>
                      </tr>
                      <tr className="total">
                        <td>Total</td>
                        <td className="total-amount">$300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Responsive Table End */}
              </div>
              {/* Cart Calculate Items End */}
            </div>
            {/* Cart Calculation Area End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
