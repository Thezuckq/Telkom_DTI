import React, { useState } from "react";
import "./index.css";
import { setCookie } from "../../utils/cookie";
import { auth } from "../../services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    auth
      .login(username, password)
      .then((res) => {
        const cookieToken = res.token;
        // const cookieUser = res.data.user;
        // setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie("token", JSON.stringify(cookieToken), 10000);
        window.location.replace("/product");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
    // console.log(username,password);
  };

  return (
    <div className="global-container">
      <div className="card login-form shadow p-3">
        <div className="card-body">
          <h3 className="card-title text-center">User Login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitLogin();
            }}
          >
            <div className="form-group">
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="username">
                Password:
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
            </div>
            <button
              type="submit"
              value="submit"
              className="btn btn-primary btn-block mt-2 mb-2"
              id="buttonSubmit"
              disabled={isLoginLoading}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
