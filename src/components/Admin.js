import React from "react";
import Layout from "./layout/Layout";
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <Layout>
            <div className="admin-page">
                <div className="admin-header">
                    <div className="col-4">W 38.000</div>
                    <div className="col-4">$ 32.000</div>
                    <div className="col-4">$ +16.000</div>
                </div>
                <div className="admin-body">
                    <div className="row">
                        <div className="col-4">
                            <Link to="/novercourse">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin1.png"
                                        alt="admin1"
                                    />
                                    <span>Naver Valyuta kurslari</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/uzbcourse">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin1.png"
                                        alt="admin1"
                                    />
                                    <span>O’zbekiston banklari kurslari</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/curers">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin2.png"
                                        alt="admin1"
                                    />
                                    <span>Kuryerlar</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/depts">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin3.png"
                                        alt="admin1"
                                    />
                                    <span>Qarzlar</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/cashflow">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin2.png"
                                        alt="admin1"
                                    />
                                    <span>Pul oqimi</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/reports">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin2.png"
                                        alt="admin1"
                                    />
                                    <span>Umumiy xisobotlar</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/offerrequest">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin1.png"
                                        alt="admin1"
                                    />
                                    <span>Takliflar/So'rovlar</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/profit">
                                <div className="admin-body-item">
                                    <img
                                        src="assets/img/icons/admin1.png"
                                        alt="admin1"
                                    />
                                    <span>Umumiy Foyda</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Admin;
