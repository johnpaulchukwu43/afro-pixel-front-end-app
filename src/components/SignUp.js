import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6"
            style={{ padding: "70px", backgroundColor: "#AE002B" }}
          >
            <h1 style={{ color: "white" }}>
              Enjoy The Largest Collection Of African Images
            </h1>
            <br />
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-2">
                    <input
                      ref={(input) => (this.fullName = input)}
                      type="text"
                      id="floatingInput"
                      className="form-control"
                      placeholder="Full Name"
                    />
                    <label for="floatingInput">Full Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-2">
                    <input
                      ref={(input) => (this.email = input)}
                      type="email"
                      placeholder="name@example.com"
                      id="floatingInput1"
                      className="form-control"
                    />
                    <label for="floatingInput1">Email Address</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-2">
                    <input
                      ref={(input) => (this.username = input)}
                      type="text"
                      placeholder="text"
                      id="floatingInput2"
                      className="form-control"
                      placeholder="Username"
                    />
                    <label for="floatingInput2">Username</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      ref={(input) => (this.password = input)}
                      type="password"
                      placeholder="Password"
                      id="floatingPassword"
                      className="form-control"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>
              </div>
              <br />
              <div className="form-check">
                <input
                  ref={(input) => (this.chkTerms = input)}
                  type="checkbox"
                  id="flexCheckDefault"
                  className="form-check-input"
                />
                <label
                  className="form-check-label"
                  for="flexCheckDefault"
                  style={{ color: "white", float: "left" }}
                >
                  Accept our Terms and Condition
                </label>
              </div>
              <br />
              <button
                type="button"
                className="btn btn-outline-danger"
                style={{
                  borderRadius: "25px",
                  padding: "7px 25px",
                  backgroundColor: "white",
                  color: "#AE002B",
                  borderColor: "white",
                  float: "left",
                }}
              >
                SIGN UP
              </button>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p style={{ color: "white", float: "left" }} className="mb-4">
              Or SignUp With
            </p>
            <br />
            <br />
            <p style={{ color: "white", float: "left" }} className="mb-4">
              <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;
              <i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;
              <i className="fab fa-twitter"></i>
            </p>
            <br />
            <br />
            <p style={{ color: "white", float: "left" }}>
              Don't have an account?{" "}
              <a
                href="login.html"
                style={{
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                Create an account
              </a>
            </p>
          </div>
          <div
            className="col-md-6 bg-dark banner1"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "80px",
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default SignUp;
