import React from "react";
import Layout from "./layout/Layout";

const NoverCourse = () => {
    return (
        <Layout>
            <div className="change-course">
                <div className="chc-header">
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
                <div className="chc-body">
                    <h3>Nover Valyuta kurslari:</h3>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotib olish:</h4>
                            <span>$1 = W1.250</span>
                        </div>
                        <div className="chc-body-item-body">
                            <img src="assets/img/table/table.png" alt="table" />
                        </div>
                    </div>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotish:</h4>
                            <span>$1 = W1.350</span>
                        </div>
                        <div className="chc-body-item-body">
                            <img src="assets/img/table/table.png" alt="table" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NoverCourse;
