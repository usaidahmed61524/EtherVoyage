"use client";
const Footer = () => {
  return (
    <section className="hero p-0 odd">
      <div className="swiper-container no-slider slider-h-100">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide-center">
            <div
              id="particles-1"
              className="particles full-image"
              data-particle="bubble"
              data-mask="70"
            >
              <canvas className="particles-js-canvas-el"></canvas>
            </div>

            <div className="slide-content row text-center">
              <div className="col-12 mx-auto inner">
                <div className="center align-self-center text-center">
                  <h2 className="title effect-static-text">
                    You will love it. 😍
                  </h2>

                  <div className="hide-1024 row mt-4 justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-trophy"></i>
                        <h4>100% Approval</h4>
                        <p className="cardText">
                          Leverage is the most innovative and best rated HTML
                          template between 2021-2023.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-login"></i>
                        <h4>Multi-Step Form</h4>
                        <p className="cardText">
                          Leverage is the only one in the entire market that
                          includes a stunning multi-step form.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-equalizer"></i>
                        <h4>Flawless Design</h4>
                        <p className="cardText">
                          Leverage has incredible ratings on the beauty and
                          organization of the source code. It s perfect!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
