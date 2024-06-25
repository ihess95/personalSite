import { Routes, Route, Link } from "react-router-dom";
import Privacy from "./PrivacyInfo";
import Homepage from "./Homepage";

function Header() {
  return (
    <div className="header-extended">
      <div className="header flex justify-between">
        <div className="title">Hess Dev</div>
        <nav>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/privacy" className="nav-item">
            Privacy
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}
export default Header;
