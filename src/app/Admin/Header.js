import React from "react";

const sidebarIconStyle = {
  cursor: "pointer",
  fontWeight: 900,
  fontSize: "1.5rem",
  lineHeight: "0.04167em",
  verticalAlign: "-0.125em",
};

const Header = ({ title }) => {
  return (
    <div className="admin-header">
      <div className="container-fluid">
        <div className="admin-header-inner">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#admin-sideNav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              className="bi bi-text-indent-left text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <div className="d-flex align-items-center justify-content-center">
            <i className="pi pi-bars me-4" style={sidebarIconStyle} />
            <div className="page_title">{title}</div>
          </div>
          <ul className="user-items">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="user-details">
                  <div className="user-icon">
                    <img src="Avatar.svg" />
                  </div>
                  KELVIN LEE
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li>
                  <a className="dropdown-item">Dashboard</a>
                </li>
                <li>
                  <a className="dropdown-item">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
