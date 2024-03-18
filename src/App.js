import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<SignIn />}></Route>
                <Route path={"/sign-up"} element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  /!*<a*!/*/}
      {/*  /!*  className="App-link"*!/*/}
      {/*  /!*  href="https://reactjs.org"*!/*/}
      {/*  /!*  target="_blank"*!/*/}
      {/*  /!*  rel="noopener noreferrer"*!/*/}
      {/*  /!*>*!/*/}
      {/*  /!*  Learn React*!/*/}
      {/*  /!*</a>*!/*/}
      {/*</header>*/}
}

export default App;
