import React from "react";
import "../styles/Base.scss";
import "../styles/Booking.scss";
import "../styles/Description.scss";
import "../styles/Features.scss";
import "../styles/Footer.scss";
import "../styles/Header.scss";
import "../styles/Review.scss";
import "../styles/Tours.scss";

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo-box">
          <img src="img/logo-white.png" alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">
              is where life happens
            </span>
          </h1>

          <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
        </div>
      </header>
    </div>
  );
};

export default Home;
