import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// userTypesEnum = {
//   "admin":1,
//   "manager":2,
//   "agent":3
// }

const Header = ({ title }) => {
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const name = user?.firstName + " " + user?.lastName;

  const getUserType = () => {
    let user;
    switch (user?.userType) {
      case 1:
        user = "Admin";
        break;
      case 2:
        user = "Manager";
        break;
      case 3:
        user = "Agent";
        break;
      default:
        user = "Agent";
        break;
    }
    return user;
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  return (
    <div className="admin-header">
      <div className="container-fluid">
        <div className="admin-header-inner">
          <button className="navbar-toggler collapsed" type="button">
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
            <div className="page_title">{title}</div>
          </div>
          <ul className="user-items">
            <li>
              <a className="nav-link" href="#" role="button">
                <div className="user-details">
                  <div className="user-icon">
                    <img src="Avatar.svg" />
                  </div>
                  <div className="d-flex flex-sm-column">
                    {name}
                    <span
                      className="fw-normal mt-1"
                      style={{ fontSize: "10px" }}
                    >
                      {getUserType()}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="nav-link ms-2" style={{ cursor: "pointer" }}>
              <i className="pi pi-sign-out" onClick={handleLogout} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
