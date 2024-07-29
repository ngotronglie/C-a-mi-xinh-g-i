const Footer = () => {
  return (
    <footer className="section footer-section">
      {/* Footer Top Start */}
      <div className="footer-top section-padding">
        <div className="container">
          <div className="row mb-n10">
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-10"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="single-footer-widget">
                <h2 className="widget-title">Contact Us</h2>
                <p className="desc-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing sed do
                  eiusmod tempor incididun
                </p>
                {/* Contact Address Start */}
                <ul className="widget-address">
                  <li>
                    <span>Address: </span> 123 Main Street, Anytown, CA 12345 -
                    USA.
                  </li>
                  <li>
                    <span>Call to: </span>
                    <a href="#"> (012) 800 456 789-987</a>
                  </li>
                  <li>
                    <span>Mail to: </span> <a href="#"> yourmail@example.com</a>
                  </li>
                </ul>
                {/* Contact Address End */}
                {/* Soclial Link Start */}
                <div className="widget-social justify-content-start mt-4">
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
                {/* Social Link End */}
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-2 col-xl-2 mb-10"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="single-footer-widget">
                <h2 className="widget-title">Information</h2>
                <ul className="widget-list">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="about.html">Delivery Information</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="about.html">Customer Service</a>
                  </li>
                  <li>
                    <a href="about.html">Return Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-2 col-xl-2 mb-10"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="single-footer-widget aos-init aos-animate">
                <h2 className="widget-title">My Account</h2>
                <ul className="widget-list">
                  <li>
                    <a href="account.html">My Account</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="contact.html">Newsletter</a>
                  </li>
                  <li>
                    <a href="contact.html">Help Center</a>
                  </li>
                  <li>
                    <a href="contact.html">Conditin</a>
                  </li>
                  <li>
                    <a href="contact.html">Term Of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-10"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="single-footer-widget">
                <h2 className="widget-title">Newsletter</h2>
                <div className="widget-body">
                  <p className="desc-content mb-0">
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  {/* Newsletter Form Start */}
                  <div className="newsletter-form-wrap pt-4">
                    <form id="mc-form" className="mc-form">
                      <input
                        type="email"
                        id="mc-email"
                        className="form-control email-box mb-4"
                        placeholder="Enter your email here.."
                        name="EMAIL"
                      />
                      <button
                        id="mc-submit"
                        className="newsletter-btn btn btn-primary btn-hover-dark"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                    {/* mailchimp-alerts Start */}
                    <div className="mailchimp-alerts text-centre">
                      <div className="mailchimp-submitting" />
                      {/* mailchimp-submitting end */}
                      <div className="mailchimp-success text-success" />
                      {/* mailchimp-success end */}
                      <div className="mailchimp-error text-danger" />
                      {/* mailchimp-error end */}
                    </div>
                    {/* mailchimp-alerts end */}
                  </div>
                  {/* Newsletter Form End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top End */}
      {/* Footer Bottom Start */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="copyright-content">
                <p className="mb-0">
                  © 2023 <strong>Destry </strong> Made width
                  <i className="fa fa-heart text-danger" /> by
                  <a href="https://hasthemes.com/">HasThemes.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}
    </footer>
  );
};

export default Footer;
