import { GiPaperWindmill } from "react-icons/gi";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import {
  BsFillFileEarmarkBarGraphFill,
  BsFillBagCheckFill,
} from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 bg-dark d-none d-lg-flex"
        style={{
          width: "3.8rem",
          height: "100vh",
          position: "fixed",
          zIndex: "10",
        }}
      >
        <a
          href="/"
          className="d-block p-3 link-body-emphasis text-decoration-none"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <GiPaperWindmill size={30} color="#fff" />
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center flex-grow-1">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link border-start border-5 border-primary py-3"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Home"
              data-bs-original-title="Home"
            >
              <FaHouseChimneyWindow size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Dashboard"
              data-bs-original-title="Dashboard"
            >
              <BsFillFileEarmarkBarGraphFill size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Orders"
              data-bs-original-title="Orders"
            >
              <BiTask size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Products"
              data-bs-original-title="Products"
            >
              <GiWallet size={25} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Customers"
              data-bs-original-title="Customers"
            >
              <BsFillBagCheckFill size={25} />
            </a>
          </li>
        </ul>
        <ul className="nav nav-pills nav-flush flex-column text-center">
          <li>
            <a
              href="#"
              className="nav-link py-3 rounded-0 text-light"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Sign Out"
              data-bs-original-title="Sign Out"
            >
              <LiaSignOutAltSolid size={28} />
            </a>
          </li>
        </ul>
      </div>

      <div
        className="offcanvas offcanvas-start bg-dark"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-light" id="offcanvasSidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0 d-flex flex-column">
          <a
            href="/"
            className="d-block p-3 link-body-emphasis text-decoration-none"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Icon-only"
          >
            <GiPaperWindmill size={30} color="#fff" />
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link border-start border-5 border-primary py-3"
                aria-current="page"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Home"
                data-bs-original-title="Home"
              >
                <FaHouseChimneyWindow size={25} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 rounded-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Dashboard"
                data-bs-original-title="Dashboard"
              >
                <BsFillFileEarmarkBarGraphFill size={25} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 rounded-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Orders"
                data-bs-original-title="Orders"
              >
                <BiTask size={25} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 rounded-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Products"
                data-bs-original-title="Products"
              >
                <GiWallet size={25} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 rounded-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Customers"
                data-bs-original-title="Customers"
              >
                <BsFillBagCheckFill size={25} />
              </a>
            </li>
          </ul>
          <ul className="nav nav-pills nav-flush flex-column text-center mt-auto">
            <li>
              <a
                href="#"
                className="nav-link py-3 rounded-0 text-light"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Sign Out"
                data-bs-original-title="Sign Out"
              >
                <LiaSignOutAltSolid size={28} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
