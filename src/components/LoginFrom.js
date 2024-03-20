import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./From.css";
export const LoginForm = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    setUserData({ ...userdata, [event.target.name]: event.target.value });
  };

  const addUser = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userdata.email)) {
      setError("Invalid email format");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if (!passwordRegex.test(userdata.password)) {
      setError(
        "Password must contain at least 8 characters, including uppercase, lowercase, numeric, and special characters"
      );
      return;
    }
    navigate("/randomnumber");
  };

  return (
    <section id="login-form">
      <div className="container pt-5">
        <div className=" col-sm-4 log mx-auto ">
          <div className="alert_login alert  ">
            <h2 className="alert alert-info text-center font-weight-bold ">
              {" "}
              Login Form{" "}
            </h2>
            <form method="post" onSubmit={addUser}>
              <div className="form-group">
                <label className="label">Enter Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={inputHandler}
                />
              </div>
              <div className="from-group">
                <label className="label">Enter Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={inputHandler}
                />
                {error && <div className="text-danger mt-2">{error}</div>}
              </div>
              <div className="login-btn">
                <button className="btn btn-info mt-4 login ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
