/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "./assets/utils/env";
import Loader from "./components/loader";

function Login({ setIsLoggedIn, setWorker }) {
  const [showLoader, setShowLoader] = React.useState(false);
  const [loginOnChangeData, setLoginOnChangeData] = React.useState({});
  const navigate = useNavigate();

  const submitLoginData = (e) => {
    setShowLoader(true);
    e.preventDefault();
    axios
      .post(`${apiUrl}/api/v1/users/login`, loginOnChangeData)
      .then((res) => {
        setShowLoader(false);
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        // setIsLoggedIn(true);
        setWorker(res.data.data);
        navigate("/");
      })
      .catch((err) => {
        setShowLoader(false);
        console.log("error: ", err);
        alert(err.message);
        // console.log("errorObject ", err.response.data);
      });
  };

  // login data
  const setLoginData = (e) => {
    let obj = loginOnChangeData;
    obj[e.target.name] = e.target.value;
    setLoginOnChangeData(obj);
    console.log("Login", e.target.value);
  };
  return (
    <>
      <div id="app" className="app app-full-height app-without-header">
        <div className="login">
          <div className="login-content">
            <form onSubmit={submitLoginData}>
              <h1 className="text-center">Sign In</h1>
              <div className="text-white text-opacity-50 text-center mb-4">
                <span style={{ color: "black" }}>
                  For your protection, please verify your identity.
                </span>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  name="email"
                  type="text"
                  className="form-control form-control-lg bg-white bg-opacity-5"
                  defaultValue
                  placeholder="e.g xyz@gmail.com"
                  onChange={setLoginData}
                />
              </div>
              <div className="mb-3">
                <div className="d-flex">
                  <label className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <a
                    href="#"
                    className="ms-auto text-white text-decoration-none text-opacity-50"
                  >
                    <span style={{ color: "#e57300" }}> Forgot password?</span>
                  </a>
                </div>
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-lg bg-white bg-opacity-5"
                  defaultValue
                  placeholder
                  onChange={setLoginData}
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="customCheck1"
                  />
                  <label className="form-check-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3"
                onClick={submitLoginData}
              >
                Sign In
              </button>
              <div className="text-center text-white text-opacity-50">
                <span style={{ color: "black" }}>
                  {" "}
                  Don't have an account yet?
                </span>
                <a
                  href=""
                  style={{ color: "#e75300" }}
                  onClick={() => navigate("/Register")}
                >
                  Sign up
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
      <Loader showLoader={showLoader} />
    </>
  );
}

export default Login;
