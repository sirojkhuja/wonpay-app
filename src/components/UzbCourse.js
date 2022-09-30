import React from "react";
import Layout from "./layout/Layout";

const UzbCourse = () => {
    return (
        <Layout>
            <div className="change-course">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="chc-body">
                    <h3>O'zbekiston Valyuta kurslari:</h3>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotib olish:</h4>
                            <span>$1 = 11.000 sum</span>
                        </div>
                        <div className="chc-body-item-body">
                            <img src="assets/img/table/table.png" alt="table" />
                        </div>
                    </div>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotish:</h4>
                            <span>$1 = 11.100 sum</span>
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

export default UzbCourse;
