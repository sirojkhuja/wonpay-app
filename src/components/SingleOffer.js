import React, { useState } from "react";
import Layout from "./layout/Layout";
import { useNavigate, Link } from "react-router-dom";
import OfferModal from "./OfferModal";

const SingleOffers = () => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    return (
        <Layout>
            <OfferModal show={modalShow} onHide={() => setModalShow(false)} />
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
                <div className="request-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <h5>Samandar Rasulov</h5>
                                <span>W 12 500 000</span>
                            </div>
                            <div className="col-2">
                                <p>Olish</p>
                                <p onClick={() => setModalShow(true)}>
                                    {" "}
                                    <b>Kiritish</b>{" "}
                                </p>
                            </div>
                            <div className="col-2">
                                <p>Sotish</p>
                                <p>
                                    {" "}
                                    <b>Kiritish</b>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="component71-item">
                    <span>O’zbekistonda pulni oluvchi:</span>
                    <h3>Shamsiddin Abdullaev</h3>
                    <p>Tashkent. +998 98 998 99 99</p>
                    <h3>2022.10.13, 10:30</h3>
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
                <div className="request-body">
                    <h3>Mos Keluvchi So'rovlar:</h3>
                    <div className="request-body-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">Ism</div>
                                <div className="col-2">Summa</div>
                                <div className="col-2">Turi</div>
                                <div className="col-2">Kurs</div>
                                <div className="col-2">Tanlash</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-body-item">
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">1 250</div>
                                    <div className="col-2">
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">1 250</div>
                                    <div className="col-2">
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">1 250</div>
                                    <div className="col-2">
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Jami</div>
                                    <div className="col-2">8.000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
export default SingleOffers;
