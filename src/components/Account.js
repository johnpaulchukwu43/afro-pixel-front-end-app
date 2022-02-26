import React, { Component } from "react";

class Account extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" style={{ backgroundColor: "#222" }}>
          <div className="row" style={{ padding: "3% 0" }}>
            <div className="col-md-3"></div>
            <div
              className="col-md-6"
              style={{ color: "white", textAlign: "center" }}
            >
              <h2>Ezekwesili Obinna</h2>
              <br />
              <p>Member since September 29, 2018</p>
              <a href="account.html">
                <img
                  src="img/avatar.png"
                  style={{ width: "40%" }}
                  className="img-fluid"
                />
              </a>
              <br />
              <br />
              <br />
              <button type="button" className="btn btn-danger btn-lg">
                <i className="far fa-edit"></i> &nbsp; Edit Profile
              </button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <div className="container-fluid" style={{ marginTop: "5%" }}>
          <div className="row" style={{ padding: "0 0 5% 0" }}>
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <p>No image uploaded</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
