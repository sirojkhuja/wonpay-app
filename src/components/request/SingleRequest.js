import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { useNavigate, Link } from "react-router-dom";

const SingleRequests = () => {
    // eslint-disable-next-line
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="offers-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>

                    <div className="home-profile">
                        <span>
                            $3.200 <b>(4)</b>{" "}
                        </span>
                        <span>$3.200</span>
                        <span>
                            $3.200 <b>(2)</b>
                        </span>
                        <img
                            src="assets/img/icons/profile-mini.png"
                            alt="pro"
                        />
                    </div>
                </div>
                <div className="white-line"></div>

                <div className="request-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <h5>Samandar Rasulov</h5>
                                <span>W 12 500 000</span>
                            </div>

                            <div className="col-3">
                                <p>Sotish</p>
                                <p>
                                    {" "}
                                    <b>Kiritish</b>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="request-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <h5>Beriladigan Dollar</h5>
                            </div>

                            <div className="col-3">
                                <p>
                                    {" "}
                                    <b>Kiritish</b>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="request-modal-item-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <span>Nanhyob bank</span>
                                <span>3510955266503</span>
                                <span>SAYDULLAEV ISOMIDIN</span>
                            </div>
                            <div className="col-3">
                                <img
                                    src="assets/img/icons/copy.png"
                                    alt="copy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="component71-item-2">
                    <h6>Pulni beruvchi kuryer:</h6>
                    <select
                        className="single-offer-input"
                        name="single-offer"
                        id="so"
                    >
                        <option value="1">Kuryer tanlang</option>
                        <option value="1">Samandar aka</option>
                        <option value="1">Farruh Soipov</option>
                        <option value="1">Olga Taniyeva</option>
                    </select>
                </div>
                <div className="white-line"></div>

                <div className="curer-footer">
                    <Link to="/">
                        <img src="assets/img/icons/home2.png" alt="user" />
                    </Link>
                    <button onClick={() => setModalShow(true)}>
                        Tasdiqlash
                    </button>
                    <img
                        onClick={() => navigate(-1)}
                        src="assets/img/icons/back.png"
                        alt="back"
                    />
                </div>
            </div>
        </Layout>
    );
};
export default SingleRequests;
