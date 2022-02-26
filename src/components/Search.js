import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <nav
          className="uk-navbar-container uk-padding-large uk-padding-remove-top uk-padding-remove-bottom"
          uk-navbar
        >
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <a href="#">
                  Popular{" "}
                  <span
                    className="uk-icon uk-margin-small-right"
                    uk-icon="icon: triangle-down"
                  ></span>
                </a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  Orientation{" "}
                  <span
                    className="uk-icon uk-margin-small-right"
                    uk-icon="icon: triangle-down"
                  ></span>
                </a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  Size{" "}
                  <span
                    className="uk-icon uk-margin-small-right"
                    uk-icon="icon: triangle-down"
                  ></span>
                </a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  Color{" "}
                  <span
                    className="uk-icon uk-margin-small-right"
                    uk-icon="icon: triangle-down"
                  ></span>
                </a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right uk-padding-large uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-right uk-padding-remove-left">
            <ul className="uk-pagination uk-navbar-nav" uk-margin>
              <li>
                <a href="#">
                  <span uk-pagination-previous></span>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li className="uk-disabled">
                <a href="#">/</a>
              </li>
              <li>
                <a href="#">29</a>
              </li>
              <li>
                <a href="#">
                  <span uk-pagination-next></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="uk-container-xlarge uk-align-center">
          <p className="black">15,730 results of Man</p>
          <div className="flexbin uk-padding uk-padding-remove-top uk-padding-remove-left uk-padding-remove-right">
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?man" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?woman" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?design" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?sky" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?tree" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?cat" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?dog" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?office" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?sea" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?green" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?fashion" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?architecture" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?art" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?style" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?animal" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?home" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?flower" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?grass" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?market" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?street" />
            </a>
            <a href="https://unsplash.com/">
              <img src="https://source.unsplash.com/featured/?bird" />
            </a>
          </div>
          <hr />
          <div className="uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
              <div className="uk-align-left">
                <p className="black">15,730 results of Man</p>
              </div>
            </div>
            <div>
              <div className="uk-align-right">
                <ul className="uk-pagination">
                  <li>
                    <a href="#">
                      <span uk-pagination-previous></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="uk-disabled">
                    <a href="#">/</a>
                  </li>
                  <li>
                    <a href="#">29</a>
                  </li>
                  <li>
                    <a href="#">
                      <span uk-pagination-next></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
