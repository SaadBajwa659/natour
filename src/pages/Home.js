import React from "react";

import "../sass/abstracts/Functions.scss";
import "../sass/abstracts/Mixins.scss";
import "../sass/abstracts/Variables.scss";

import "../sass/base/Animation.scss";
import "../sass/base/Base.scss";
import "../sass/base/Typography.scss";
import "../sass/base/Utilities.scss";

import "../sass/components/Button.scss";

import "../sass/layout/Footer.scss";
import "../sass/layout/Header.scss";

import "../sass/pages/Home.scss";

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
