const ProfileDashboard = () => {
  return (
    <>
      <div className="myaccount-content">
        <h3 className="title">Dashboard</h3>
        <div className="welcome">
          <p>
            Hello, <strong>Alex Aya</strong> (If Not
            <strong>Aya !</strong>
            <a href="login-register.html" className="logout">
              Logout
            </a>
            )
          </p>
        </div>
        <p className="mb-0">
          From your account dashboard. you can easily check &amp; view your
          recent orders, manage your shipping and billing addresses and edit
          your password and account details.
        </p>
      </div>
      {/* 
      <div className="tab-pane fade" id="download" role="tabpanel">
        <div className="myaccount-content">
          <h3 className="title">Downloads</h3>
          <div className="myaccount-table table-responsive text-center">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Expire</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Haven - Free Real Estate PSD Template</td>
                  <td>Aug 22, 2023</td>
                  <td>Yes</td>
                  <td>
                    <a
                      href="#"
                      className="btn btn btn-dark btn-hover-primary rounded-0"
                    >
                      <i className="fa fa-cloud-download me-1" />
                      Download File
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>HasTech - Profolio Business Template</td>
                  <td>Sep 12, 2023</td>
                  <td>Never</td>
                  <td>
                    <a
                      href="#"
                      className="btn btn btn-dark btn-hover-primary rounded-0"
                    >
                      <i className="fa fa-cloud-download me-1" />
                      Download File
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="payment-method" role="tabpanel">
        <div className="myaccount-content">
          <h3 className="title">Payment Method</h3>
          <p className="saved-message">
            You Can't Saved Your Payment Method yet.
          </p>
        </div>
      </div>
      <div className="tab-pane fade" id="address-edit" role="tabpanel">
        <div className="myaccount-content">
          <h3 className="title">Billing Address</h3>
          <address>
            <p>
              <strong>Alex Aya</strong>
            </p>
            <p>
              1234 Market ##, Suite 900 <br />
              Lorem Ipsum, ## 12345
            </p>
            <p>Mobile: (123) 123-456789</p>
          </address>
          <a href="#" className="btn btn btn-dark btn-hover-primary rounded-0">
            <i className="fa fa-edit me-2" />
            Edit Address
          </a>
        </div>
      </div>
      <div className="tab-pane fade" id="account-info" role="tabpanel">
        <div className="myaccount-content">
          <h3 className="title">Account Details</h3>
          <div className="account-details-form">
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-input-item mb-3">
                    <label htmlFor="first-name" className="required mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-input-item mb-3">
                    <label htmlFor="last-name" className="required mb-1">
                      Last Name
                    </label>
                    <input type="text" id="last-name" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="single-input-item mb-3">
                <label htmlFor="display-name" className="required mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  id="display-name"
                  placeholder="Display Name"
                />
              </div>
              <div className="single-input-item mb-3">
                <label htmlFor="email" className="required mb-1">
                  Email Addres
                </label>
                <input type="email" id="email" placeholder="Email Address" />
              </div>
              <fieldset>
                <legend>Password change</legend>
                <div className="single-input-item mb-3">
                  <label htmlFor="current-pwd" className="required mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-pwd"
                    placeholder="Current Password"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-input-item mb-3">
                      <label htmlFor="new-pwd" className="required mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-pwd"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input-item mb-3">
                      <label htmlFor="confirm-pwd" className="required mb-1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirm-pwd"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="single-input-item single-item-button">
                <button className="btn btn btn-dark btn-hover-primary rounded-0">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProfileDashboard;
