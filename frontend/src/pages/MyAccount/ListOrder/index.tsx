import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <div className="myaccount-content">
      <h3 className="title">Orders</h3>
      <div className="myaccount-table table-responsive text-center">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aug 22, 2023</td>
              <td>Pending</td>
              <td>$3000</td>
              <td>
                <Link
                  to="/profile/orders/123"
                  className="btn btn btn-dark btn-hover-primary btn-sm rounded-0"
                >
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>July 22, 2023</td>
              <td>Approved</td>
              <td>$200</td>
              <td>
                <a
                  href="cart.html"
                  className="btn btn btn-dark btn-hover-primary btn-sm rounded-0"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>June 12, 2019</td>
              <td>On Hold</td>
              <td>$990</td>
              <td>
                <a
                  href="cart.html"
                  className="btn btn btn-dark btn-hover-primary btn-sm rounded-0"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
