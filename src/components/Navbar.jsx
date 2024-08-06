import { TbMailFilled } from "react-icons/tb";
import { IoSettings, IoNotificationsCircle } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { GiPaperWindmill } from "react-icons/gi";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top pt-2 bg-dark"
      style={{ zIndex: "5" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <button
            className="btn btn-dark d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiPaperWindmill size={30} color="#fff" />
          </button>
          <form
            className="d-flex align-items-center border border-2 rounded text-light flex-grow-1 ms-2 ms-lg-0"
            role="search"
            style={{ maxWidth: "250px" }}
          >
            <ImSearch className="ms-2" />
            <input
              type="search"
              className="form-control bg-dark text-light"
              placeholder="Search..."
              aria-label="Search"
              style={{ border: "none" }}
            />
          </form>
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "white" }}
            ></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item ms-2 me-4">
              <TbMailFilled size={40} className="nav-link text-light" />
            </li>
            <li className="nav-item ms-2 me-4">
              <IoSettings size={40} className="nav-link text-light" />
            </li>
            <li className="nav-item ms-2 me-4">
              <IoNotificationsCircle
                size={40}
                className="nav-link text-light"
              />
            </li>
            <li className="nav-item ms-2">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
