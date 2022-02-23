import "./App.css";
import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <h1>Afro Pixels 5</h1>
      <h2>Base code Heroku Update1 ..</h2>
    </div>
  );
}
// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid" style={{padding: "0 25px"}}>
//          <a className="navbar-brand" href="#">LOGO</a>
//          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
//             aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//          </button>
//          <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             </ul>
//             <span className="navbar-text">
//                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                      <a className="nav-link" aria-current="page" href="#">Pricing</a>
//                   </li>
//                   &nbsp;
//                   <li className="nav-item">
//                      <a className="nav-link" aria-current="page" href="login.html">Login</a>
//                   </li>
//                   &nbsp;
//                   <li className="nav-item line">
//                      <a className="nav-link" style={{cursor: "default",color:"white !important"}} aria-current="page"
//                         href="#">|</a>
//                   </li>
//                   &nbsp;
//                   <li className="nav-item">
//                      <a className="nav-link" aria-current="page" href="signup.html">Join</a>
//                   </li>
//                   &nbsp;
//                   &nbsp;
//                   <li className="nav-item">
//                      <a className="btn btn-danger" href="#"><i class="fas fa-upload"></i> &nbsp; Upload</a>
//                   </li>
//                </ul>
//             </span>
//          </div>
//       </div>
//    </nav>

//    <div className="p-4 p-md-5 text-white bg-dark banner1">
//       <div className="row">
//          <div className="col-md-3"></div>
//          <div className="col-md-6">
//             <h1 className="display-4">Header</h1>
//             <p className="lead my-3">
//                <form>
//                   <div className="input-group mb-3">
//                      <input type="text" class="form-control" placeholder="Search" aria-label="Search Query"
//                         aria-describedby="button-search"/>
//                      <button class="btn btn-primary" type="button" id="button-search">
//                        <i className="fas fa-search"></i></button>
//                   </div>
//                </form>
//             </p>
//             <small muted>Example: man driving, woman eating, man smiling</small>
//          </div>
//          <div className="col-md-3"></div>
//       </div>
//    </div>

//    <div className="container-fluid" style={{padding:"0"}}>
//       <div className="row">
//          <div className="col-md-12">
//             <div className="flexbin">
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?man" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?woman" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?design" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?sky" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?tree" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?cat" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?dog" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?office" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?sea" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?green" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?fashion" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?architecture" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?art" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?style" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?animal" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?home" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?flower" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?grass" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?market" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?street" />
//                </a>
//                <a href="https://unsplash.com/">
//                   <img src="https://source.unsplash.com/featured/?bird" />
//                </a>
//             </div>
//          </div>
//       </div>
//       <div className="row" style={{margin: "5% 0 2% 0"}}>
//          <div className="col-md-4"></div>
//          <div className="col-md-4" style={{textAlign: "center"}}>
//             <button type="button" className="btn btn-primary btn-lg" style={{borderRadius:"25px"}} disabled>View More</button>
//          </div>
//          <div className="col-md-4"></div>
//       </div>
//    </div>
//       </div>
//     );
//   }

// }

export default App;
