import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./page/Main";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SignIn />}></Route>
          <Route path={"/sign-up"} element={<SignUp />}></Route>
          <Route path={"/main"} element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
