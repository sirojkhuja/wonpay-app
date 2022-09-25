import React from "react";
import Layout from "./layout/Layout";
import { Link } from "react-router-dom";

const CurerPage = () => {
    return (
        <Layout>
            <div className="admin-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                    <div className="home-profile">
                        <img
                            src="assets/img/icons/profile-mini.png"
                            alt="pro"
                        />
                        <span>Anvar Sobirov</span>
                    </div>
                </div>
                <div className="admin-header">
                    <div className="col-4">W 38.000</div>
                    <div className="col-4">$ 32.000</div>
                    <div className="col-4">$ +16.000</div>
                </div>
                <div className="admin-body">
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/novercourse">
                                <img
                                    src="assets/img/curer/give-money.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/novercourse">
                            <div className="home-category-text">
                                <span>Pul Olish</span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/uzbcourse">
                                <img
                                    src="assets/img/curer/get-money.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="uzbcourse">
                            <div className="home-category-text">
                                <span>Pul Berish</span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/curers">
                                <img
                                    src="assets/img/curer/submit-money.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/curers">
                            <div className="home-category-text">
                                <span>Pul Topshirish</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="admin-body-x">
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/offerrequest">
                                <img
                                    src="assets/img/curer/report.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/offerrequest">
                            <div className="home-category-text">
                                <span>Tarix</span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/profit">
                                <img
                                    src="assets/img/curer/message.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/profit">
                            <div className="home-category-text">
                                <span>Xabarlar</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CurerPage;
