import React from "react";
import { useState } from "react";
import DeptModal from "./DeptModal";
import Layout from "./layout/Layout";
import DeptModal2 from "./DeptModal2";

const Depts = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    return (
        <Layout>
            <DeptModal show={modalShow} onHide={() => setModalShow(false)} />
            <DeptModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
            <div className="offers-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="request-header">
                    <span>Qarzlar:</span>
                    <span>+$20.000.000</span>
                </div>
                <div className="request-body">
                    <div className="request-body-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">Ism</div>
                                <div className="col-2">Summa</div>
                                <div className="col-2">Info</div>
                                <div className="col-2">Kurs</div>
                                <div className="col-2">Qarz</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-body-item">
                        <div className="request-time">22.08.2022</div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">$5.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">1250</div>
                                    <div className="col-2">$1000</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">$5.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">1250</div>
                                    <div className="col-2">$1000</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">$5.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">1250</div>
                                    <div className="col-2">$1000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="request-header">
                    <span>Bizning qarzlar:</span>
                    <span>+$20.000.000</span>
                </div>
                <div className="request-body">
                    <div className="request-body-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">Ism</div>
                                <div className="col-2">Summa</div>
                                <div className="col-2">Info</div>
                                <div className="col-2">Kurs</div>
                                <div className="col-2">Qarz</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-body-item">
                        <div className="request-time">22.08.2022</div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">$5.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow2(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">1250</div>
                                    <div className="col-2">$1000</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">$5.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow2(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">1250</div>
                                    <div className="col-2">$1000</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">Farruh Soipov</div>
                                    <div className="col-2">$5.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow2(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">1250</div>
                                    <div className="col-2">$1000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Depts;
