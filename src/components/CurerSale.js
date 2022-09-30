import React, { useState } from "react";
import CurerModal from "./CurerModal";
import { useNavigate, Link } from "react-router-dom";

const CurerSale = () => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="curer-page">
            <CurerModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="home-header">
                <div className="logo">
                    <img src="assets/img/icons/logo.png" alt="logo" />
                </div>

                <div className="home-profile">
                    <span>
                        $3.200 <b>(4)</b>{" "}
                    </span>
                    <span>$3.200</span>
                    <span>
                        $3.200 <b>(2)</b>
                    </span>
                    <img src="assets/img/icons/profile-mini.png" alt="pro" />
                </div>
            </div>
            <div className="admin-header">
                <span>Oldi Berdilar</span>
                <span>$3 200 24 000 000</span>
            </div>
            <div className="request-body">
                <div className="curer-select-page">
                    <div className="curer-select">
                        <select name="curer" id="curer1">
                            <option value="1">Hammasi</option>
                            <option value="1">Pul Olinganlar</option>
                            <option value="1">Pul Berilganlar</option>
                            <option value="1">Topshirilganlar</option>
                        </select>
                    </div>
                    <div className="curer-select">
                        <select name="curer" id="curer2">
                            <option value="1">Hammasi</option>
                            <option value="1">Bugungilar</option>
                            <option value="1"> 1 haftalik</option>
                            <option value="1">1 oylik</option>
                        </select>
                    </div>
                </div>
                <div className="request-body-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Ism</div>
                            <div className="col-2">Summa</div>
                            <div className="col-2">Dollar</div>
                            <div className="col-2">So'm</div>
                            <div className="col-2">Kurs</div>
                            <div className="col-2">Mavjud Pul</div>
                        </div>
                    </div>
                </div>
                <div className="request-body-item">
                    <div className="request-time">22.08.2022</div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curer-footer">
                <Link to="/">
                    <img src="assets/img/icons/home2.png" alt="user" />
                </Link>
                <button onClick={() => setModalShow(true)}>Tasdiqlash</button>
                <img
                    onClick={() => navigate(-1)}
                    src="assets/img/icons/back.png"
                    alt="back"
                />
            </div>
        </div>
    );
};
export default CurerSale;
