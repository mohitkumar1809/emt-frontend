"use client";
import logInService from "@/auth/services/loginService";
import Loader from "@/components/Loader";
import ToastMessage from "@/components/ToastMessage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setLoginDetails({ ...loginDetails, [name]: checked });
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
        console.log(resData, "Login Success");
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
