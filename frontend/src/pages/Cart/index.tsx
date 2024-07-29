import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <>
        {/* Breadcrumb Section Start */}
        <div className="section">
          {/* Breadcrumb Area Start */}
          <div className="breadcrumb-area bg-light">
            <div className="container-fluid">
              <div className="breadcrumb-content text-center">
                <h1 className="title">Shopping Cart</h1>
                <ul>
                  <li>
                    <a href="index.html">Home </a>
                  </li>
                  <li className="active">Shopping Cart</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Breadcrumb Area End */}
        </div>
        {/* Breadcrumb Section End */}
        {/* Shopping Cart Section Start */}
        <div className="section section-margin">
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
                {/* Cart Update Option Start */}
                <div className="cart-update-option d-block d-md-flex justify-content-between">
                  {/* Apply Coupon Wrapper Start */}
                  <div className="apply-coupon-wrapper">
                    <form
                      action="#"
                      method="post"
                      className="d-block d-md-flex"
                    >
                      <input type="text" placeholder="Enter Your Coupon Code" />
                      <button className="btn btn-dark btn-hover-primary rounded-0">
                        Apply Coupon
                      </button>
                    </form>
                  </div>
                  {/* Apply Coupon Wrapper End */}
                  {/* Cart Update Start */}
                  <div className="cart-update mt-sm-16">
                    <a
                      href="#"
                      className="btn btn-dark btn-hover-primary rounded-0"
                    >
                      Update Cart
                    </a>
                  </div>
                  {/* Cart Update End */}
                </div>
                {/* Cart Update Option End */}
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
                  {/* Cart Checktout Button Start */}
                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-hover-primary rounded-0 w-100"
                  >
                    Proceed To Checkout
                  </Link>
                  {/* Cart Checktout Button End */}
                </div>
                {/* Cart Calculation Area End */}
              </div>
            </div>
          </div>
        </div>
        {/* Shopping Cart Section End */}
      </>
    </>
  );
};

export default Cart;
