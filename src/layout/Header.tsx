import logo from "../assets/logo.png";
import "../layout/layout.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="logo" />
        <nav>
          <a
            href="/calendar"
            className={location.pathname === "/calendar" ? "active" : ""}
          >
            캘린더
          </a>
          <a
            href="/account"
            className={location.pathname === "/account" ? "active" : ""}
          >
            가계부
          </a>
        </nav>
      </div>
      <div>
        <div>프로필</div>
      </div>
    </div>
  );
};

export default Header;
