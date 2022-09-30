import React from "react";
import Layout from "./layout/Layout";
import { useNavigate, Link } from "react-router-dom";

const Reports = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="offers-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="request-header">
                    <span>O'tkazmalar Tarixi:</span>
                </div>
                <div className="request-body">
                    <div className="request-body-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Ism</div>
                                <div className="col-2">Summa</div>
                                <div className="col-2">Info</div>
                                <div className="col-2">Proof</div>
                                <div className="col-2">Foyda</div>
                                <div className="col-2">Status</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-body-item">
                        <div className="request-time">22.08.2022</div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="request-body-item">
                        <div className="request-time">05.08.2022</div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Farruh Soipov</div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">+$10</div>
                                    <div className="col-2">$73.50</div>
                                    <div className="col-2">-$500</div>
                                    <div className="col-2">$65240</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="curer-footer">
                    <Link to="/">
                        <img src="assets/img/icons/home2.png" alt="user" />
                    </Link>
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
export default Reports;
