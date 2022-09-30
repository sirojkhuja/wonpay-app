import React from "react";
import Layout from "./layout/Layout";
import { Link } from "react-router-dom";

const Admin = () => {
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
                                    src="assets/img/admin/naver.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/novercourse">
                            <div className="home-category-text">
                                <span>
                                    Naver <br /> Valyuta kurslari
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/uzbcourse">
                                <img
                                    src="assets/img/admin/bank.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="uzbcourse">
                            <div className="home-category-text">
                                <span>
                                    O’zbekiston <br /> banklari kurslari
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/curers">
                                <img
                                    src="assets/img/admin/curers.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/curers">
                            <div className="home-category-text">
                                <span>Kuryerlar</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="admin-body">
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/depts">
                                <img
                                    src="assets/img/admin/depts.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/depts">
                            <div className="home-category-text">
                                <span>Qarzlar</span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/cashflow">
                                <img
                                    src="assets/img/admin/cashflow.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="cashflow">
                            <div className="home-category-text">
                                <span>Pul oqimi</span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/reports">
                                <img
                                    src="assets/img/admin/reports.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/reports">
                            <div className="home-category-text">
                                <span>Umumiy Hisobot</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="admin-body-x">
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/offerrequest">
                                <img
                                    src="assets/img/admin/offer.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/offerrequest">
                            <div className="home-category-text">
                                <span>Takliflar/ So'rovlar</span>
                            </div>
                        </Link>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <Link to="/profit">
                                <img
                                    src="assets/img/admin/profit.png"
                                    alt="admin1"
                                />
                            </Link>
                        </div>
                        <Link to="/profit">
                            <div className="home-category-text">
                                <span>Umumiy Foyda</span>
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
                                <span>Umumiy Foyda</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Admin;
