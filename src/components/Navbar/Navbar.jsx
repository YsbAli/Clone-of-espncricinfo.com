import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.css";
const Navbar = () => {

  const navigate = useNavigate()
  let styless = {
    textDecoration: "none",
    color: "white",
    marginTop: "15px",
  };

  let redirect = () => {
    navigate("/")
  }
  return (
    <div className={styles.mainnav}>
      <div className={styles.navbar}>
        <img
          className={styles.navimg} onClick={redirect}
          src="https://wassets.hscicdn.com/static/images/logo.png"
          alt=""
        />

        <Link to={"/"} style={styless}>
          Live Scores
        </Link>
        <Link to={"/"} style={styless}>
          Series
        </Link>
        <Link to={"/"} style={styless}>
          Teams
        </Link>
        <Link to={""} style={styless}>
          News
        </Link>
        <Link to={"/"} style={styless}>
          Features
        </Link>
        <Link to={"/"} style={styless}>
          {" "}
          Videos
        </Link>
        <Link to={"/"} style={styless}>
          Stats
        </Link>
        <Link to={"/"} style={styless}>
          {" "}
          Editions
        </Link>

        <img
          className={styles.navimg}
          src="https://cdn-icons-png.flaticon.com/128/66/66275.png"
          alt=""
        />
        <img
          className={styles.navimg}
          src="https://cdn-icons-png.flaticon.com/128/3898/3898840.png"
          alt=""
        />
        <img
          className={styles.navimg}
          src="https://cdn-icons-png.flaticon.com/128/3603/3603178.png"
          alt=""
        />
        <img
          className={styles.navimg}
          src="https://cdn-icons-png.flaticon.com/128/49/49116.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
