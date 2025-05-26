import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import "./main.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
