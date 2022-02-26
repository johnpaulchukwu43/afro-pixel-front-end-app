import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
// import Account from "./components/Account";
// import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Header /> */}
//         {/* <Home />
//         <Login /> */}
//         {/* <SignUp /> */}
//         {/* <Account /> */}
//         {/* <Search /> */}
//       </div>
//     );
//   }
// }

export default App;
