import React from "react";
import { Link } from "react-router-dom";
import { isUserAuthenticated } from "../../utils/cookie";
import "./index.css";

const Header = () => {
  const listMenu = ["home", "product", "ProfileId", "infoCorona"];
  const logout = () => {
    const cookie = document.cookie.split("; ").find((row) => {
      return row.startsWith("token");
    });
    document.cookie = `${cookie}=;expires=${new Date(0).toUTCString()}`;
    window.location.replace("/login");
  };
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? (
        <button
          style={{ color: "#0f3057", backgroundColor: "#e7e7de" }}
          type="button"
          className="logout btn"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
