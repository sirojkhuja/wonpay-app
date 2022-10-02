import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import RequestModal from "../modals/RequestModal";

const OfferRequst = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Layout>
            <div className="offer-request-page">
                <RequestModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="offers-page-x">
                    <Link to="/offers">
                        <div className="request-header">
                            <span>Takliflar:</span>
                            <span>W32.000.000</span>
                        </div>
                    </Link>
                    <div className="offer-request-body">
                        <div className="request-body-title">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Ism</div>
                                    <div className="col-2">Summa</div>
                                    <div className="col-2">Info</div>
                                    <div className="col-2">Kurs</div>
                                    <div className="col-2">Turi</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-body-item">
                            <div className="request-time">22.08.2022</div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div
                                            className="col-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            Ko'rish
                                        </div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                        <div className="col-2">Taqsimlash</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div
                                            className="col-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            Ko'rish
                                        </div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                        <div className="col-2">Taqsimlash</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div
                                            className="col-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            Ko'rish
                                        </div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                        <div className="col-2">Taqsimlash</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div
                                            className="col-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            Ko'rish
                                        </div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                        <div className="col-2">Taqsimlash</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div
                                            className="col-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            Ko'rish
                                        </div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                        <div className="col-2">Taqsimlash</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-page-x">
                    <Link to="/requests">
                        <div className="request-header">
                            <span>So'rovlar:</span>
                            <span>W15.000.000</span>
                        </div>
                    </Link>
                    <div className="offer-request-body">
                        <div className="request-body-title">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Ism</div>
                                    <div className="col-2">Summa</div>
                                    <div className="col-2">Info</div>
                                    <div className="col-2">Kurs</div>
                                    <div className="col-2">Turi</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-body-item">
                            <div className="request-time">22.08.2022</div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-time">22.08.2022</div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            Farruh Soipov
                                        </div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">Ko'rish</div>
                                        <div className="col-2">Kiritish</div>
                                        <div className="col-2">Karta</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OfferRequst;
