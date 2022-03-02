import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="p-4 p-md-5 text-white bg-dark banner1">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="display-4" style={{ color: "white" }}>
              Header
            </h1>
            <p className="lead my-3">
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Search Query"
                    aria-describedby="button-search"
                  />
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-search"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </p>
            <small muted>Example: man driving, woman eating, man smiling</small>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="container-fluid" style={{ padding: "0" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="flexbin">
              <a href="#">
                <img src="https://source.unsplash.com/featured/?man" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?woman" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?design" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?sky" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?tree" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?cat" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?dog" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?office" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?sea" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?green" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?fashion" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?architecture" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?art" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?style" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?animal" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?home" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?flower" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?grass" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?market" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?street" />
              </a>
              <a href="#">
                <img src="https://source.unsplash.com/featured/?bird" />
              </a>
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "5% 0 2% 0" }}>
          <div className="col-md-4"></div>
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ borderRadius: "25px" }}
              disabled
            >
              View More
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
