import React, { useState } from "react";
import Layout2 from "../layouts/Layout";
import { Link } from "react-router-dom";
import SaleModal from "../modals/SaleModal";

const Messages = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Layout2>
            <SaleModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="profile-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                    <div className="home-profile">
                        <img
                            src="assets/img/icons/profile-mini.png"
                            alt="pro"
                        />
                        <span onClick={() => setModalShow(true)}>
                            Anvar Sobirov
                        </span>
                    </div>
                </div>

                <div className="history">
                    <h3>
                        {" "}
                        <b>Xabarlar:</b>{" "}
                    </h3>
                    <div className="history-cart">
                        <span className="show-time">25.08.2022</span>
                        <div className="money-cart">
                            <Link to="/profile-2">
                                <div className="message-body">
                                    <span>
                                        Sizning taklifingiz uchun kurs
                                        belgilandi.
                                    </span>
                                    <div className="message-footer">
                                        <span>$1 = ￦1 450</span>
                                        <span>10:25</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="money-cart">
                            <Link to="/profile-2">
                                <div className="message-body">
                                    <span>
                                        Sizning taklifingiz uchun kurs
                                        belgilandi.
                                    </span>
                                    <div className="message-footer">
                                        <span>$1 = ￦1 450</span>
                                        <span>10:25</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="money-cart">
                            <Link to="/profile-2">
                                <div className="message-body">
                                    <span>
                                        Sizning taklifingiz uchun kurs
                                        belgilandi.
                                    </span>
                                    <div className="message-footer">
                                        <span>$1 = ￦1 450</span>
                                        <span>10:25</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="money-cart">
                            <Link to="/profile-2">
                                <div className="message-body">
                                    <span>
                                        Sizning taklifingiz uchun kurs
                                        belgilandi.
                                    </span>
                                    <div className="message-footer">
                                        <span>$1 = ￦1 450</span>
                                        <span>10:25</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <button className="give-money">Pul Berish</button>
        </Layout2>
    );
};

export default Messages;
