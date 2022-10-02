import React from "react";
import Layout2 from "../layouts/Layout";

const Sale = () => {
    return (
        <Layout2>
            <div className="sale-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                    <div className="home-profile">
                        <span>+$3200</span>
                        <img
                            src="assets/img/icons/profile-mini.png"
                            alt="pro"
                        />
                    </div>
                </div>

                <div className="sale-body">
                    <h1>Oldi Berdilar:</h1>
                    <div className="request-body">
                        <div className="request-body-title">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">Sana</div>
                                    <div className="col-2">Berilgan pul</div>
                                    <div className="col-2">Kurs</div>
                                    <div className="col-2">Qarz</div>
                                    <div className="col-2">Olingan pul</div>
                                    <div className="col-2">Qoldiq</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-body-item">
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">22.09</div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">11200</div>
                                        <div className="col-2">200</div>
                                        <div className="col-2">300</div>
                                        <div className="col-2">500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">22.09</div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">11200</div>
                                        <div className="col-2">200</div>
                                        <div className="col-2">300</div>
                                        <div className="col-2">500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">22.09</div>
                                        <div className="col-2">2.000</div>
                                        <div className="col-2">11200</div>
                                        <div className="col-2">200</div>
                                        <div className="col-2">300</div>
                                        <div className="col-2">500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout2>
    );
};

export default Sale;
