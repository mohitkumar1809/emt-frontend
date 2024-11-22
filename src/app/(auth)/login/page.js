"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import ToastMessage from "@/components/ToastMessage";
import { loginUser, logoutUser } from "@/redux/actions/userAction";
import logInService from "@/auth/services/loginService";
import { setSideNavMenu } from "@/redux/actions/sideNavMenuAction";

const transformedKey = (key) => {
  return (
    "/" +
    key
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("")
  );
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setLoginDetails({ ...loginDetails, [name]: checked });
  };

  const setMenuItems = (e) => {
    let menuNames = Object.keys(e);
    const updatedMenu = menuNames?.map((i, index) => {
      return {
        MenuID: index + 1,
        ParentMenuID: 0,
        MenuName: i,
        MenuPath: transformedKey(i),
        MenuOrder: index + 1,
        Level: 0,
        subItems: [],
        iconName: "home",
      };
    });
    dispatch(setSideNavMenu(updatedMenu));
  };

  const handleLogin = async (e) => {
    if (
      loginDetails?.username?.trim() === "" ||
      loginDetails?.password?.trim() === ""
    ) {
      setError("Please fill in both username and password fields.");
      return;
    }

    e.preventDefault();
    setLoader(true);

    const userData = {
      email: loginDetails?.username,
      password: loginDetails?.password,
    };

    try {
      const response = await logInService.loginUser(userData);
      const resData = response?.data;
      const resStatus = resData?.status;
      if (resStatus == 200) {
        dispatch(loginUser(resData.result));
        setMenuItems(resData.result?.allowedmoduleWithActions);
        localStorage.setItem("isAuthenticated", true);
        router.push("/dashboard");
      } else {
        setError(resData?.message);
      }
    } catch (error) {
      console.error(error);
      setLoader(false);
      setError("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      dispatch(logoutUser());
    }
  }, []);

  return (
    <>
      {loader && <Loader />}
      <ToastMessage type="error" message={error} />
      <div className="loginbtn-area">
        <div className="container">
          <div className="loginform-heading">
            <div className="mb-2">
              <Link href="#" style={{ color: "#005baa" }}>
                trangile.com
              </Link>
            </div>
            <img src="Trangile-Logo.png" />
            <div className="tab-content">
              <div className="tab-panel">
                <form>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="pi pi-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="username"
                      className="input-form"
                      placeholder="Username"
                      value={loginDetails?.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="pi pi-lock" aria-hidden="true" />
                      </span>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input-form"
                      placeholder="Enter password"
                      value={loginDetails?.password}
                      onChange={handleInputChange}
                    />
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className={`pi ${
                        showPassword ? "pi-eye" : "pi-eye-slash"
                      } show-password-icon`}
                    ></i>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light two"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <div className="login-footer">
                    <div className="radio-wrapper">
                      <div className="radio-item">
                        <label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="rememberMe"
                            value={loginDetails?.rememberMe}
                            onChange={handleCheckboxChange}
                          />
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="button-link">
                      <a href="#">Forget password? Reset It</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
