const Checkout = () => {
  return (
    <>
      <>
        {/* Breadcrumb Section Start */}
        <div className="section">
          {/* Breadcrumb Area Start */}
          <div className="breadcrumb-area bg-light">
            <div className="container-fluid">
              <div className="breadcrumb-content text-center">
                <h1 className="title">Checkout</h1>
                <ul>
                  <li>
                    <a href="index.html">Home </a>
                  </li>
                  <li className="active">Checkout</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Breadcrumb Area End */}
        </div>
        {/* Breadcrumb Section End */}
        {/* Checkout Section Start */}
        <div className="section section-margin">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Coupon Accordion Start */}
                <div className="coupon-accordion">
                  {/* Title Start */}
                  <h3 className="title">
                    Returning customer?
                    <span id="showlogin">Click here to login</span>
                  </h3>
                  {/* Title End */}
                  {/* Checkout Login Start */}
                  <div id="checkout-login" className="coupon-content">
                    <div className="coupon-info">
                      <p className="coupon-text mb-2">
                        Quisque gravida turpis sit amet nulla posuere lacinia.
                        Cras sed est sit amet ipsum luctus.
                      </p>
                      {/* Form Start */}
                      <form action="#">
                        {/* Input Email Start */}
                        <p className="form-row-first">
                          <label>
                            Username or email
                            <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </p>
                        {/* Input Email End */}
                        {/* Input Password Start */}
                        <p className="form-row-last">
                          <label>
                            Password <span className="required">*</span>
                          </label>
                          <input type="password" />
                        </p>
                        {/* Input Password End */}
                        {/* Remember Password Start */}
                        <p className="form-row mb-2">
                          <input type="checkbox" id="remember_me" />
                          <label
                            htmlFor="remember_me"
                            className="checkbox-label"
                          >
                            Remember me
                          </label>
                        </p>
                        {/* Remember Password End */}
                        {/* Lost Password Start */}
                        <p className="lost-password">
                          <a href="#">Lost your password?</a>
                        </p>
                        {/* Lost Password End */}
                      </form>
                      {/* Form End */}
                    </div>
                  </div>
                  {/* Checkout Login End */}
                  {/* Title Start */}
                  <h3 className="title">
                    Have a coupon?
                    <span id="showcoupon">Click here to enter your code</span>
                  </h3>
                  {/* Title End */}
                  {/* Checkout Coupon Start */}
                  <div id="checkout_coupon" className="coupon-checkout-content">
                    <div className="coupon-info">
                      <form action="#">
                        <p className="checkout-coupon d-flex">
                          <input placeholder="Coupon code" type="text" />
                          <input
                            className="btn btn-dark btn-hover-primary rounded-0"
                            defaultValue="Apply Coupon"
                            type="submit"
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                  {/* Checkout Coupon End */}
                </div>
                {/* Coupon Accordion End */}
              </div>
            </div>
            <div className="row mb-n4">
              <div className="col-lg-6 col-12 mb-4">
                {/* Checkbox Form Start */}
                <form action="#">
                  <div className="checkbox-form">
                    {/* Checkbox Form Title Start */}
                    <h3 className="title">Billing Details</h3>
                    {/* Checkbox Form Title End */}
                    <div className="row">
                      {/* Select Country Name Start */}
                      <div className="col-md-12 mb-6">
                        <div className="country-select">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <select className="myniceselect nice-select wide rounded-0">
                            <option data-display="Bangladesh">
                              Bangladesh
                            </option>
                            <option value="uk">London</option>
                            <option value="rou">Romania</option>
                            <option value="fr">French</option>
                            <option value="de">Germany</option>
                            <option value="aus">Australia</option>
                          </select>
                        </div>
                      </div>
                      {/* Select Country Name End */}
                      {/* First Name Input Start */}
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      {/* First Name Input End */}
                      {/* Last Name Input Start */}
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      {/* Last Name Input End */}
                      {/* Company Name Input Start */}
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      {/* Company Name Input End */}
                      {/* Address Input Start */}
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input placeholder="Street address" type="text" />
                        </div>
                      </div>
                      {/* Address Input End */}
                      {/* Optional Text Input Start */}
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            placeholder="Apartment, suite, unit etc. (optional)"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* Optional Text Input End */}
                      {/* Town or City Name Input Start */}
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      {/* Town or City Name Input End */}
                      {/* State or Country Input Start */}
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      {/* State or Country Input End */}
                      {/* Postcode or Zip Input Start */}
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      {/* Postcode or Zip Input End */}
                      {/* Email Address Input Start */}
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input placeholder="" type="email" />
                        </div>
                      </div>
                      {/* Email Address Input End */}
                      {/* Phone Number Input Start */}
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      {/* Phone Number Input End */}
                      {/* Checkout Form List checkbox Start */}
                      <div className="col-md-12">
                        <div className="checkout-form-list create-acc">
                          <input id="cbox" type="checkbox" />
                          <label htmlFor="cbox" className="checkbox-label">
                            Create an account?
                          </label>
                        </div>
                        <div
                          id="cbox-info"
                          className="checkout-form-list create-account"
                        >
                          <p className="mb-2">
                            Create an account by entering the information below.
                            If you are a returning customer please login at the
                            top of the page.
                          </p>
                          <label>
                            Account password <span className="required">*</span>
                          </label>
                          <input placeholder="Password" type="password" />
                        </div>
                      </div>
                      {/* Checkout Form List checkbox End */}
                    </div>
                    {/* Different Address Start */}
                    <div className="different-address">
                      {/* Ship Different Title Checkbox Start */}
                      <div className="ship-different-title">
                        <div>
                          <input id="ship-box" type="checkbox" />
                          <label htmlFor="ship-box" className="checkbox-label">
                            Ship to a different address?
                          </label>
                        </div>
                      </div>
                      {/* Ship Different Title Checkbox End */}
                      {/* Ship Box Info Start */}
                      <div id="ship-box-info" className="row mt-2">
                        {/* Select Country Name Start */}
                        <div className="col-md-12">
                          <div className="myniceselect country-select clearfix">
                            <label>
                              Country <span className="required">*</span>
                            </label>
                            <select className="myniceselect nice-select wide rounded-0">
                              <option data-display="Bangladesh">
                                Bangladesh
                              </option>
                              <option value="uk">London</option>
                              <option value="rou">Romania</option>
                              <option value="fr">French</option>
                              <option value="de">Germany</option>
                              <option value="aus">Australia</option>
                            </select>
                          </div>
                        </div>
                        {/* Select Country Name End */}
                        {/* First Name Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              First Name <span className="required">*</span>
                            </label>
                            <input placeholder="" type="text" />
                          </div>
                        </div>
                        {/* First Name Input End */}
                        {/* Last Name Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Last Name <span className="required">*</span>
                            </label>
                            <input placeholder="" type="text" />
                          </div>
                        </div>
                        {/* Last Name Input End */}
                        {/* Company Name Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>Company Name</label>
                            <input placeholder="" type="text" />
                          </div>
                        </div>
                        {/* Company Name End */}
                        {/* Address Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Address <span className="required">*</span>
                            </label>
                            <input placeholder="Street address" type="text" />
                          </div>
                        </div>
                        {/* Address Input End */}
                        {/* Optional Text Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <input
                              placeholder="Apartment, suite, unit etc. (optional)"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* Optional Text End */}
                        {/* Town or City Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Town / City <span className="required">*</span>
                            </label>
                            <input type="text" />
                          </div>
                        </div>
                        {/* Town or City Input End */}
                        {/* State or Country Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              State / County <span className="required">*</span>
                            </label>
                            <input placeholder="" type="text" />
                          </div>
                        </div>
                        {/* State or Country Input End */}
                        {/* Postcode or Zip Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Postcode / Zip <span className="required">*</span>
                            </label>
                            <input placeholder="" type="text" />
                          </div>
                        </div>
                        {/* Postcode or Zip Input End */}
                        {/* Email Address Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Email Address <span className="required">*</span>
                            </label>
                            <input placeholder="" type="email" />
                          </div>
                        </div>
                        {/* Email Address Input End */}
                        {/* Phone Number Input Start */}
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Phone <span className="required">*</span>
                            </label>
                            <input type="text" />
                          </div>
                        </div>
                        {/* Phone Number Input End */}
                      </div>
                      {/* Ship Box Info End */}
                      {/* Order Notes Textarea Start */}
                      <div className="order-notes mt-3 mb-n2">
                        <div className="checkout-form-list checkout-form-list-2">
                          <label>Order Notes</label>
                          <textarea
                            id="checkout-mess"
                            cols={30}
                            rows={10}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      {/* Order Notes Textarea End */}
                    </div>
                    {/* Different Address End */}
                  </div>
                </form>
                {/* Checkbox Form End */}
              </div>
              <div className="col-lg-6 col-12 mb-4">
                {/* Your Order Area Start */}
                <div className="your-order-area border">
                  {/* Title Start */}
                  <h3 className="title">Your order</h3>
                  {/* Title End */}
                  {/* Your Order Table Start */}
                  <div className="your-order-table table-responsive">
                    <table className="table">
                      {/* Table Head Start */}
                      <thead>
                        <tr className="cart-product-head">
                          <th className="cart-product-name text-start">
                            Product
                          </th>
                          <th className="cart-product-total text-end">Total</th>
                        </tr>
                      </thead>
                      {/* Table Head End */}
                      {/* Table Body Start */}
                      <tbody>
                        <tr className="cart_item">
                          <td className="cart-product-name text-start ps-0">
                            Some Winter Collections
                            <strong className="product-quantity">× 2</strong>
                          </td>
                          <td className="cart-product-total text-end pe-0">
                            <span className="amount">£145.00</span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="cart-product-name text-start ps-0">
                            Small Scale Style
                            <strong className="product-quantity">× 4</strong>
                          </td>
                          <td className="cart-product-total text-end pe-0">
                            <span className="amount">£204.00</span>
                          </td>
                        </tr>
                      </tbody>
                      {/* Table Body End */}
                      {/* Table Footer Start */}
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th className="text-start ps-0">Cart Subtotal</th>
                          <td className="text-end pe-0">
                            <span className="amount">£349.00</span>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th className="text-start ps-0">Order Total</th>
                          <td className="text-end pe-0">
                            <strong>
                              <span className="amount">£349.00</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                      {/* Table Footer End */}
                    </table>
                  </div>
                  {/* Your Order Table End */}
                  {/* Payment Accordion Order Button Start */}
                  <div className="payment-accordion-order-button">
                    <div className="payment-accordion">
                      <div className="single-payment">
                        <h5 className="panel-title mb-3">
                          <a
                            className="collapse-off"
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            Direct Bank Transfer.
                          </a>
                        </h5>
                        <div className="collapse show" id="collapseExample">
                          <div className="card card-body rounded-0">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-payment">
                        <h5 className="panel-title mb-3">
                          <a
                            className="collapse-off"
                            data-bs-toggle="collapse"
                            href="#collapseExample-2"
                            aria-expanded="false"
                            aria-controls="collapseExample-2"
                          >
                            Cheque Payment.
                          </a>
                        </h5>
                        <div className="collapse" id="collapseExample-2">
                          <div className="card card-body rounded-0">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-payment">
                        <h5 className="panel-title mb-3">
                          <a
                            className="collapse-off"
                            data-bs-toggle="collapse"
                            href="#collapseExample-3"
                            aria-expanded="false"
                            aria-controls="collapseExample-3"
                          >
                            Paypal.
                          </a>
                        </h5>
                        <div className="collapse" id="collapseExample-3">
                          <div className="card card-body rounded-0">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment">
                      <button className="btn btn-dark btn-hover-primary rounded-0 w-100">
                        Place Order
                      </button>
                    </div>
                  </div>
                  {/* Payment Accordion Order Button End */}
                </div>
                {/* Your Order Area End */}
              </div>
            </div>
          </div>
        </div>
        {/* Checkout Section End */}
      </>
    </>
  );
};

export default Checkout;
