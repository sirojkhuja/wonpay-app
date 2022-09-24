import React from "react";
import Layout from "./layout/Layout";

const Curers = () => {
    return (
        <Layout>
            <div className="curer-page">
                <div className="chc-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="chc-header-item">
                                    <span>Uzb {">>"} Kor</span>
                                    <span>$1 = W1.250</span>
                                </div>
                                <div className="chc-header-item">
                                    <span>Kor {">>"} Uzb</span>
                                    <span>$1 = W1.300</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="chc-header-item">
                                    <span>$52.000</span>
                                    <span>W38.000.000</span>
                                </div>
                                <div className="chc-header-item">
                                    <span>+$12.000</span>
                                    <span>+W12.000.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="curer-body">
                    <h3>Kuryerlar</h3>
                    <div className="curer-item">
                        <div className="row">
                            <div className="col-3">
                                <img
                                    src="assets/img/icons/profile.png"
                                    alt=""
                                />
                            </div>
                            <div className="col-6">
                                <h3>Akmal Payziyev</h3>
                                <div className="curer-item-footer">
                                    <span>$28.000</span>
                                    <span>+$28.000</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <p>Uzbekistan</p>
                                <span>-$2000</span>
                            </div>
                        </div>
                    </div>
                    <div className="curer-item">
                        <div className="row">
                            <div className="col-3">
                                <img
                                    src="assets/img/icons/profile.png"
                                    alt=""
                                />
                            </div>
                            <div className="col-6">
                                <h3>Akmal Payziyev</h3>
                                <div className="curer-item-footer">
                                    <span>$28.000</span>
                                    <span>+$28.000</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <p>Uzbekistan</p>
                                <span>-$2000</span>
                            </div>
                        </div>
                    </div>
                    <div className="curer-item">
                        <div className="row">
                            <div className="col-3">
                                <img
                                    src="assets/img/icons/profile.png"
                                    alt=""
                                />
                            </div>
                            <div className="col-6">
                                <h3>Akmal Payziyev</h3>
                                <div className="curer-item-footer">
                                    <span>$28.000</span>
                                    <span>+$28.000</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <p>Uzbekistan</p>
                                <span>-$2000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Curers;
