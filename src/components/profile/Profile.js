import React from "react";
import Layout2 from "../layouts/Layout-2";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <Layout2>
            <div className="profile-page">
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
                <div className="not-finish">
                    <h5>Yakunlanmaganlar</h5>
                    <div className="money-cart">
                        <h6>Ko'rib chiqilmoqda</h6>
                        <Link to="/profilenext">
                            <div className="cart-body">
                                <div className="col-3 body-1">
                                    <span>Uzb {">>"} Kor</span>
                                </div>
                                <div className="col-6 body-2">
                                    <span>W 13,000</span>
                                </div>
                                <div className="col-3 body-3">
                                    <span>Alisher Alimov</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="history">
                    <h5>Tarix</h5>
                    <div className="history-cart">
                        <span className="show-time">25.08.2022</span>
                        <div className="money-cart">
                            <h6>Yakunlangan</h6>
                            <div className="cart-body">
                                <div className="col-3 body-1">
                                    <span>Uzb {">>"} Kor</span>
                                </div>
                                <div className="col-6 body-2">
                                    <span>W 13,000</span>
                                    <span>$ 1,000</span>
                                </div>
                                <div className="col-3 body-3">
                                    <span className="body-3-money">
                                        1 $ = 1350 W
                                    </span>
                                    <span>Alisher Alimov</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-cart">
                        <span className="show-time">25.08.2022</span>
                        <div className="money-cart">
                            <h6>Yakunlangan</h6>
                            <div className="cart-body">
                                <div className="col-3 body-1">
                                    <span>Uzb {">>"} Kor</span>
                                </div>
                                <div className="col-6 body-2">
                                    <span>W 13,000</span>
                                    <span>$ 1,000</span>
                                </div>
                                <div className="col-3 body-3">
                                    <span className="body-3-money">
                                        1 $ = 1350 W
                                    </span>
                                    <span>Alisher Alimov</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-cart">
                        <span className="show-time">25.08.2022</span>
                        <div className="money-cart">
                            <h6>Yakunlangan</h6>
                            <div className="cart-body">
                                <div className="col-3 body-1">
                                    <span>Uzb {">>"} Kor</span>
                                </div>
                                <div className="col-6 body-2">
                                    <span>W 13,000</span>
                                    <span>$ 1,000</span>
                                </div>
                                <div className="col-3 body-3">
                                    <span className="body-3-money">
                                        1 $ = 1350 W
                                    </span>
                                    <span>Alisher Alimov</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout2>
    );
};

export default Profile;
