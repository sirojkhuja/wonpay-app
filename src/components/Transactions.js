import React, { useState } from "react";

const Transactions = () => {
    const [imgShow, setImgShow] = useState(false);
    const [imgShow1, setImgShow1] = useState(false);
    const [imgShow2, setImgShow2] = useState(false);
    const [imgShow3, setImgShow3] = useState(false);
    return (
        <>
            <div className="transaction-page">
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
                <div className="transaction-header">
                    <h1>W12.500.00 = $10.0000</h1>
                </div>
                <div className="transaction-body">
                    <h3>Koreadan pulni qabul qiluvchilar:</h3>
                    <div className="container trans-item">
                        <div className="row">
                            <div className="col-6">
                                <span>1.</span> {"  "}
                                <span>Alisher Ro'ziyev</span>
                            </div>
                            <div className="col-6">
                                <div className="trans-input">
                                    <span>$2.000</span>
                                    <input type="checkbox" name="trans-input" />
                                </div>
                                <button onClick={() => setImgShow(!imgShow)}>
                                    {">"}
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className={
                                    imgShow ? "trans-img active" : "trans-img"
                                }
                            >
                                <img src="assets/img/table/copy.png" alt="" />
                                <button>Rasm yuklash</button>
                            </div>
                        </div>
                    </div>
                    <div className="container trans-item">
                        <div className="row">
                            <div className="col-6">
                                <span>1.</span> {"  "}
                                <span>Alisher Ro'ziyev</span>
                            </div>
                            <div className="col-6">
                                <div className="trans-input">
                                    <span>$2.000</span>
                                    <input type="checkbox" name="trans-input" />
                                </div>
                                <button onClick={() => setImgShow1(!imgShow1)}>
                                    {">"}
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className={
                                    imgShow1 ? "trans-img active" : "trans-img"
                                }
                            >
                                <img src="assets/img/table/copy.png" alt="" />
                                <button>Rasm yuklash</button>
                            </div>
                        </div>
                    </div>
                    <div className="container trans-item">
                        <div className="row">
                            <div className="col-6">
                                <span>1.</span> {"  "}
                                <span>Alisher Ro'ziyev</span>
                            </div>
                            <div className="col-6">
                                <div className="trans-input">
                                    <span>$2.000</span>
                                    <input type="checkbox" name="trans-input" />
                                </div>
                                <button onClick={() => setImgShow2(!imgShow2)}>
                                    {">"}
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className={
                                    imgShow2 ? "trans-img active" : "trans-img"
                                }
                            >
                                <img src="assets/img/table/copy.png" alt="" />
                                <button>Rasm yuklash</button>
                            </div>
                        </div>
                    </div>
                    <div className="container trans-item">
                        <div className="row">
                            <div className="col-6">
                                <span>1.</span> {"  "}
                                <span>Alisher Ro'ziyev</span>
                            </div>
                            <div className="col-6">
                                <div className="trans-input">
                                    <span>$2.000</span>
                                    <input type="checkbox" name="trans-input" />
                                </div>
                                <button onClick={() => setImgShow3(!imgShow3)}>
                                    {">"}
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className={
                                    imgShow3 ? "trans-img active" : "trans-img"
                                }
                            >
                                <img src="assets/img/table/copy.png" alt="" />
                                <button>Rasm yuklash</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trans-summ">
                    <span>Jami:</span>
                    <span>$8.000</span>
                </div>
            </div>
            <div className="profile-next-footer">
                <img src="assets/img/icons/user.png" alt="user" />
                <button>Bekor Qilish</button>
                <button>Tasdiqlash</button>
                <img src="assets/img/icons/back.png" alt="back" />
            </div>
        </>
    );
};

export default Transactions;
