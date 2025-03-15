import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const style = {
    marginTop: "15%",
    color: "white",
    fontFamily: "cursive",
    fontSize: "80px",
    textShadow: "0px 5px 10px red",
  };
  return (
    <>
      <div className="container">
        <h1>
          <center style={style}>BookGeeks</center>
        </h1>
        <p>
          <center
            style={{
              color: "white",
              fontFamily: "fantasy",
              fontSize: "28px",
            }}
          >
            Bad libraries build collections,Good libraries build services,
            <br />
            Great libraries build communities...
          </center>
        </p>
      </div>
      <footer className="footer">
        <ul className="social-icon">
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Services
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Team
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Contact
            </Link>
          </li>
        </ul>
        <p>&copy;2025 Dev Mehta | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;
