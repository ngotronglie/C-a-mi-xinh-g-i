import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <>
      <>
        {/* Breadcrumb Section Start */}
        <div className="section">
          {/* Breadcrumb Area Start */}
          <div className="breadcrumb-area bg-light">
            <div className="container-fluid">
              <div className="breadcrumb-content text-center">
                <h1 className="title">My Account</h1>
                <ul>
                  <li>
                    <a href="index.html">Home </a>
                  </li>
                  <li className="active">My Account</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Breadcrumb Area End */}
        </div>
        {/* Breadcrumb Section End */}
        {/* My Account Section Start */}
        <div className="section section-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="myaccount-page-wrapper">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="myaccount-tab-menu nav" role="tablist">
                        <NavLink to="/profile" end>
                          <i className="fa fa-dashboard" /> Dashboard
                        </NavLink>
                        <NavLink to="/profile/orders">
                          <i className="fa fa-cart-arrow-down" /> Orders
                        </NavLink>
                        <NavLink to="/profile/download">
                          <i className="fa fa-cloud-download" /> Download
                        </NavLink>
                        <a href="#payment-method">
                          <i className="fa fa-credit-card" /> Payment Method
                        </a>
                        <a href="#address-edit">
                          <i className="fa fa-map-marker" /> address
                        </a>
                        <a href="#account-info">
                          <i className="fa fa-user" /> Account Details
                        </a>
                        <a href="login-register.html">
                          <i className="fa fa-sign-out" /> Logout
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-9 col-md-8">
                      <div className="tab-content" id="myaccountContent">
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* My Account Section End */}
      </>
    </>
  );
};

export default ProfileLayout;
