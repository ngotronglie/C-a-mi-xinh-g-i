import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header section">
      {/* Header Top Start */}
      <div className="header-top bg-light">
        <div className="container">
          <div className="row row-cols-xl-2 align-items-center">
            {/* Header Top Language, Currency & Link Start */}
            <div className="col d-none d-lg-block">
              <div className="header-top-lan-curr-link">
                <div className="header-top-lan dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    English <i className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Japanese
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Romanian
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-top-curr dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    USD <i className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pound
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-top-links">
                  <span>Call Us</span>
                  <a href="#"> 01234567</a>
                </div>
              </div>
            </div>
            {/* Header Top Language, Currency & Link End */}
            {/* Header Top Message Start */}
            <div className="col">
              <p className="header-top-message">
                Ends Monday: $100 off any dining table + 2 sets of chairs.{" "}
                <a href="shop-grid.html">Shop Now</a>
              </p>
            </div>
            {/* Header Top Message End */}
          </div>
        </div>
      </div>
      {/* Header Top End */}
      {/* Header Bottom Start */}
      <div className="header-bottom">
        <div className="header-sticky">
          <div className="container">
            <div className="row align-items-center">
              {/* Header Logo Start */}
              <div className="col-xl-2 col-6">
                <div className="header-logo">
                  <NavLink to="/">
                    <img src="/images/logo/logo.png" alt="Site Logo" />
                  </NavLink>
                </div>
              </div>
              {/* Header Logo End */}
              {/* Header Menu Start */}
              <div className="col-xl-8 d-none d-xl-block">
                <div className="main-menu position-relative">
                  <ul>
                    <li>
                      <NavLink to="/">
                        <span>Home</span>
                      </NavLink>
                    </li>

                    <li className=" position-static">
                      <NavLink to="/products">
                        <span>Products</span>
                      </NavLink>
                    </li>

                    <li className="has-children">
                      <a href="#">
                        <span>Pages</span> <i className="fa fa-angle-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="404-error.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">
                        <span>Blog</span> <i className="fa fa-angle-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Blog Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="blog-details-sidebar.html">
                            Blog Details Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">
                        {" "}
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Header Menu End */}
              {/* Header Action Start */}
              <div className="col-xl-2 col-6">
                <div className="header-actions">
                  {/* Search Header Action Button Start */}
                  <a
                    href="javascript:void(0)"
                    className="header-action-btn header-action-btn-search"
                  >
                    <i className="pe-7s-search" />
                  </a>
                  {/* Search Header Action Button End */}
                  {/* User Account Header Action Button Start */}
                  <a
                    href="login-register.html"
                    className="header-action-btn d-none d-md-block"
                  >
                    <i className="pe-7s-user" />
                  </a>
                  {/* User Account Header Action Button End */}
                  {/* Wishlist Header Action Button Start */}
                  <Link
                    to="/wishlist"
                    className="header-action-btn header-action-btn-wishlist d-none d-md-block"
                  >
                    <i className="pe-7s-like" />
                  </Link>
                  {/* Wishlist Header Action Button End */}
                  {/* Shopping Cart Header Action Button Start */}
                  <Link
                    to="/cart"
                    className="header-action-btn header-action-btn-cart"
                  >
                    <i className="pe-7s-shopbag" />
                    <span className="header-action-num">3</span>
                  </Link>
                  {/* Shopping Cart Header Action Button End */}
                  {/* Mobile Menu Hambarger Action Button Start */}
                  <a
                    href="javascript:void(0)"
                    className="header-action-btn header-action-btn-menu d-xl-none d-lg-block"
                  >
                    <i className="fa fa-bars" />
                  </a>
                  {/* Mobile Menu Hambarger Action Button End */}
                </div>
              </div>
              {/* Header Action End */}
            </div>
          </div>
        </div>
      </div>
      {/* Header Bottom End */}
      {/* Mobile Menu Start */}
      <div className="mobile-menu-wrapper">
        <div className="offcanvas-overlay" />
        {/* Mobile Menu Inner Start */}
        <div className="mobile-menu-inner">
          {/* Button Close Start */}
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close" />
          </div>
          {/* Button Close End */}
          {/* Mobile Menu Start */}
          <div className="mobile-navigation">
            <nav>
              <ul className="mobile-menu">
                <li className="has-children">
                  <a href="#">
                    Home <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">
                    Shop <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="shop-grid.html">Shop Grid</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-list-fullwidth.html">Shop List Fullwidth</a>
                    </li>
                    <li>
                      <a href="shop-list-left-sidebar.html">
                        Shop List Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-list-right-sidebar.html">
                        Shop List Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="compare.html">Compare</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">
                    Product{" "}
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="single-product-sale.html">Single Product Sale</a>
                    </li>
                    <li>
                      <a href="single-product-group.html">
                        Single Product Group
                      </a>
                    </li>
                    <li>
                      <a href="single-product-normal.html">
                        Single Product Normal
                      </a>
                    </li>
                    <li>
                      <a href="single-product-affiliate.html">
                        Single Product Affiliate
                      </a>
                    </li>
                    <li>
                      <a href="single-product-slider.html">
                        Single Product Slider
                      </a>
                    </li>
                    <li>
                      <a href="single-product-gallery-left.html">
                        Gallery Left
                      </a>
                    </li>
                    <li>
                      <a href="single-product-gallery-right.html">
                        Gallery Right
                      </a>
                    </li>
                    <li>
                      <a href="single-product-tab-style-left.html">
                        Tab Style Left
                      </a>
                    </li>
                    <li>
                      <a href="single-product-tab-style-right.html">
                        Tab Style Right
                      </a>
                    </li>
                    <li>
                      <a href="single-product-sticky-left.html">Sticky Left</a>
                    </li>
                    <li>
                      <a href="single-product-sticky-right.html">
                        Sticky Right
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">
                    Pages <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="404-error.html">Error 404</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="login-register.html">Loging | Register</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">
                    Blog <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar.html">
                        Blog Details Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Mobile Menu End */}
          {/* Language, Currency & Link Start */}
          <div className="offcanvas-lag-curr mb-6">
            <h2 className="title">Languages</h2>
            <div className="header-top-lan-curr-link">
              <div className="header-top-lan dropdown">
                <button className="dropdown-toggle" data-bs-toggle="dropdown">
                  English <i className="fa fa-angle-down" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Japanese
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Romanian
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-top-curr dropdown">
                <button className="dropdown-toggle" data-bs-toggle="dropdown">
                  USD <i className="fa fa-angle-down" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pound
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Language, Currency & Link End */}
          {/* Contact Links/Social Links Start */}
          <div className="mt-auto">
            {/* Contact Links Start */}
            <ul className="contact-links">
              <li>
                <i className="fa fa-phone" />
                <a href="#"> +012 3456 789 123</a>
              </li>
              <li>
                <i className="fa fa-envelope-o" />
                <a href="#"> info@example.com</a>
              </li>
              <li>
                <i className="fa fa-clock-o" />{" "}
                <span>Monday - Sunday 9.00 - 18.00</span>{" "}
              </li>
            </ul>
            {/* Contact Links End */}
            {/* Social Widget Start */}
            <div className="widget-social">
              <a title="Facebook" href="#">
                <i className="fa fa-facebook-f" />
              </a>
              <a title="Twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
              <a title="Linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a title="Youtube" href="#">
                <i className="fa fa-youtube" />
              </a>
              <a title="Vimeo" href="#">
                <i className="fa fa-vimeo" />
              </a>
            </div>
            {/* Social Widget Ende */}
          </div>
          {/* Contact Links/Social Links End */}
        </div>
        {/* Mobile Menu Inner End */}
      </div>
      {/* Mobile Menu End */}
      {/* Offcanvas Search Start */}
      <div className="offcanvas-search">
        <div className="offcanvas-search-inner">
          {/* Button Close Start */}
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close" />
          </div>
          {/* Button Close End */}
          {/* Offcanvas Search Form Start */}
          <form className="offcanvas-search-form" action="#">
            <input
              type="text"
              placeholder="Search Here..."
              className="offcanvas-search-input"
            />
          </form>
          {/* Offcanvas Search Form End */}
        </div>
      </div>
      {/* Offcanvas Search End */}
      {/* Cart Offcanvas Start */}
      <div className="cart-offcanvas-wrapper">
        <div className="offcanvas-overlay" />
        {/* Cart Offcanvas Inner Start */}
        <div className="cart-offcanvas-inner">
          {/* Button Close Start */}
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close" />
          </div>
          {/* Button Close End */}
          {/* Offcanvas Cart Content Start */}
          <div className="offcanvas-cart-content">
            {/* Offcanvas Cart Title Start */}
            <h2 className="offcanvas-cart-title mb-10">Shopping Cart</h2>
            {/* Offcanvas Cart Title End */}
            {/* Cart Product/Price Start */}
            <div className="cart-product-wrapper mb-6">
              {/* Single Cart Product Start */}
              <div className="single-cart-product">
                <div className="cart-product-thumb">
                  <a href="single-product.html">
                    <img
                      src="/images/products/small-product/1.jpg"
                      alt="Cart Product"
                    />
                  </a>
                </div>
                <div className="cart-product-content">
                  <h3 className="title">
                    <a href="single-product.html">Brother Hoddies in Grey</a>
                  </h3>
                  <span className="price">
                    <span className="new">$38.50</span>
                    <span className="old">$40.00</span>
                  </span>
                </div>
              </div>
              {/* Single Cart Product End */}
              {/* Product Remove Start */}
              <div className="cart-product-remove">
                <a href="#">
                  <i className="fa fa-trash" />
                </a>
              </div>
              {/* Product Remove End */}
            </div>
            {/* Cart Product/Price End */}
            {/* Cart Product/Price Start */}
            <div className="cart-product-wrapper mb-6">
              {/* Single Cart Product Start */}
              <div className="single-cart-product">
                <div className="cart-product-thumb">
                  <a href="single-product.html">
                    <img
                      src="/images/products/small-product/2.jpg"
                      alt="Cart Product"
                    />
                  </a>
                </div>
                <div className="cart-product-content">
                  <h3 className="title">
                    <a href="single-product.html">Basic Jogging Shorts</a>
                  </h3>
                  <span className="price">
                    <span className="new">$14.50</span>
                    <span className="old">$18.00</span>
                  </span>
                </div>
              </div>
              {/* Single Cart Product End */}
              {/* Product Remove Start */}
              <div className="cart-product-remove">
                <a href="#">
                  <i className="fa fa-trash" />
                </a>
              </div>
              {/* Product Remove End */}
            </div>
            {/* Cart Product/Price End */}
            {/* Cart Product/Price Start */}
            <div className="cart-product-wrapper mb-6">
              {/* Single Cart Product Start */}
              <div className="single-cart-product">
                <div className="cart-product-thumb">
                  <a href="single-product.html">
                    <img
                      src="/images/products/small-product/3.jpg"
                      alt="Cart Product"
                    />
                  </a>
                </div>
                <div className="cart-product-content">
                  <h3 className="title">
                    <a href="single-product.html">Enjoy The Rest T-Shirt</a>
                  </h3>
                  <span className="price">
                    <span className="new">$20.00</span>
                    <span className="old">$21.00</span>
                  </span>
                </div>
              </div>
              {/* Single Cart Product End */}
              {/* Product Remove Start */}
              <div className="cart-product-remove">
                <a href="#">
                  <i className="fa fa-trash" />
                </a>
              </div>
              {/* Product Remove End */}
            </div>
            {/* Cart Product/Price End */}
            {/* Cart Product Total Start */}
            <div className="cart-product-total">
              <span className="value">Subtotal</span>
              <span className="price">220$</span>
            </div>
            {/* Cart Product Total End */}
            {/* Cart Product Button Start */}
            <div className="cart-product-btn mt-4">
              <a
                href="cart.html"
                className="btn btn-dark btn-hover-primary rounded-0 w-100"
              >
                View cart
              </a>
              <a
                href="checkout.html"
                className="btn btn-dark btn-hover-primary rounded-0 w-100 mt-4"
              >
                Checkout
              </a>
            </div>
            {/* Cart Product Button End */}
          </div>
          {/* Offcanvas Cart Content End */}
        </div>
        {/* Cart Offcanvas Inner End */}
      </div>
      {/* Cart Offcanvas End */}
    </div>
  );
};

export default Header;
