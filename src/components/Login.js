import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
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
                      ref={(input) => (this.email = input)}
                      type="email"
                      placeholder="name@example.com"
                      id="floatingInput"
                      className="form-control"
                    />
                    <label for="floatingInput">Email address</label>
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
                  style={{ color: "white" }}
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
                }}
              >
                Sign In
              </button>
            </form>
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
              <Link
                to="/signup"
                style={{
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                {/* <a
              //   href="login.html"
              //   style={{
              //     textDecoration: "underline",
              //     color: "white",
              //   }}
              // >*/}
                Create an account
              </Link>
              {/* </a> */}
            </p>
          </div>
          <div
            className="col-md-6 bg-dark banner1"
            // style={{
            //   backgroundImage:
            //     "url('img/eberhard-grossgasteiger-C6nO21vYw0E-unsplash.jpg')",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   padding: "80px;",
            // }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Login;
