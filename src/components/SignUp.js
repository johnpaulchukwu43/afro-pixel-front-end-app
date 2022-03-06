import React, { Component } from "react";
import "./SignUp.css";

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
                  width: "65%",
                }}
              >
                SIGN UP
              </button>
            </form>
            <br />
            <p style={{ color: "white" }} class="signuptext">
              Or SignUp With
            </p>
            <div class="icon-flex-gap">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a>
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
            <br />
            <br />
            <p style={{ color: "white" }}>
              Already have an account?{" "}
              <a
                href="login.html"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Sign In
              </a>
            </p>
          </div>
          <div className="col-md-6 bg-dark banner2"></div>
        </div>
      </div>
    );
  }
}

export default SignUp;
