"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useAuth } from "../auth/login";
import axios from "axios";

const HeroSection = () => {
  const [show, setShow] = useState(false);
  const [domain, setDomain] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginBtnVisible, setLoginBtnVisible] = useState(true);
  const [userName, setUserName] = useState("");


  const auth = useAuth();

  const signIn = async (username, tokenid) => {
    const regex = /\.mmit$/;
    if (!regex.test(domain) || !domain || !tokenId) {
      setInputError("Please fill all the fields");
      return;
    }
    setLoading(true);
    let response;
    try {
      response = await axios.get(`/api/sdk`, {
        params: {
          username: username,
          id: tokenid
        }
      });
    } catch (error) {
      console.error(error);
    }
    const uservalidator = response?.data?.data
    if (uservalidator.success == true) {
      setLoginBtnVisible(false);
      const user = domain.slice(0, -5);
      setUserName("welcome " + user)
      handleClose()
      setLoading(false);
    }
    else {
      setInputError(uservalidator.message);
      setLoading(false);
    }
  };

  const onSubmit = async () => {
    auth.login({ domain, tokenId });
    signIn(domain, tokenId)
  };

  const handleClose = () => {
    setShow(false);
    setDomain("");
    setTokenId("");
  };

  const logOutUser = () => {
    setLoginBtnVisible(true);
    setUserName("")
  };
  const handleShow = () => setShow(true);
  return (
    <section className="hero p-0 odd featured">
      <div className="swiper-container no-slider slider-h-100">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide-center">
            <video loop className="full-image" muted autoPlay>
              <source src="/assets/colors.mp4" type="video/mp4" />
            </video>
            <div className="slide-content row text-center">
              <div className="col-12 mx-auto inner">
                <div className="center align-self-center text-center">
                  {
                    userName ? (<h2 className="title effect-static-text">{userName}</h2>)
                      : (<h1 className="title effect-static-text">
                        Authentic, Fast & Easy.
                      </h1>
                      )}



                  <div className="hide-1024 row mt-4 justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-cup"></i>
                        <h4>
                          Over 20 Ready-made Website Templates.</h4>
                        <p className="cardText">
                          Allow yourself to have the most amazing website ever.
                          Your customer will love it.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-rocket"></i>
                        <h4>Form Validation</h4>
                        <p className="cardText">
                          Save time with ready-to-use forms with Google
                          reCAPCTHA validation and mail send.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-shield"></i>
                        <h4>GDPR Ready</h4>
                        <p className="cardText">
                          It is now required! Warn visitor that your site uses
                          cookies and complies with GDPR.
                        </p>
                      </div>
                    </div>
                  </div>
                  {loginBtnVisible ? (
                    <Button
                      className="smooth-anchor ml-auto mr-auto mt-5 btn bigger primary-button"
                      onClick={handleShow}
                    >
                      Login With MMIT Domain
                    </Button>
                  ) : (
                    <>
                      <Button
                        className="smooth-anchor ml-auto mr-auto btn bigger primary-button"
                        onClick={logOutUser}
                      >
                        Logout
                      </Button>
                    </>
                  )}
                </div>

                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Insert Your MMIT Domain</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Domain"
                            onChange={(e) => {
                              setDomain(e.target.value);
                              setInputError("");
                            }}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Token Id"
                            onChange={(e) => {
                              setTokenId(e.target.value);
                            }}
                          />
                        </Form.Group>

                        <p className="text-danger my-2">{inputError}</p>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="dark" onClick={onSubmit}>
                        Login
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
