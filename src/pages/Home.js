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
import "../sass/layout/Grid.scss";
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
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src="img/nat-1.jpg"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src="img/nat-2.jpg"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src="img/nat-3.jpg"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 
      <section className="grid-test">

        <div className="row">
          <div className="col-1-of-2">
            Col 1 of 2
          </div>
          <div className="col-1-of-2">
            Col 1 of 2
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            Col 1 of 3
          </div>
          <div className="col-1-of-3">
            Col 1 of 3
          </div>
          <div className="col-1-of-3">
            Col 1 of 3
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            Col 1 of 3
          </div>
          <div className="col-2-of-3">
            Col 2 of 3
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
          <div className="col-2-of-4">
            Col 1 of 4
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-4">
            Col 1 of 4
          </div>
          <div className="col-3-of-4">
            Col 3 of 4
          </div>
        </div>
      </section>
       */}
    </div>
  );
};

export default Home;
