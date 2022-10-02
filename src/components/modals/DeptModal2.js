import Modal from "react-bootstrap/Modal";

function DeptModal2(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className="sale-modal">
                    <div className="home-header">
                        <div className="logo">
                            <img src="assets/img/icons/logo.png" alt="logo" />
                        </div>
                    </div>
                    <div className="white-line"></div>
                </div>{" "}
            </Modal.Header>
            <Modal.Body>
                <div className="my-modal">
                    <div className="component71-header">
                        <h1>Farruh Soipov</h1>
                        <span>Kelishilgan valyuta kursi</span>
                        <h3>$1 = W 1.250</h3>
                        <h1>W5.000.000 = $4.000</h1>
                    </div>
                    <div className="white-line"></div>
                    <div className="component71-item">
                        <span>Koreada pulni qabul qiluvchi:</span>
                        <div className="component71-item-check">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <span>1. Alisher Ro'ziyev</span>
                                    </div>
                                    <div className="col-6">
                                        {" "}
                                        <span>W 2 000 000</span>
                                        <img
                                            src="assets/img/icons/check.png"
                                            alt="ddd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="component71-item-check">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <span>1. Alisher Ro'ziyev</span>
                                    </div>
                                    <div className="col-6">
                                        {" "}
                                        <span>W 2 000 000</span>
                                        <img
                                            src="assets/img/icons/check.png"
                                            alt="ddd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="component71-item-check">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <span>1. Alisher Ro'ziyev</span>
                                    </div>
                                    <div className="col-6">
                                        {" "}
                                        <span>W 2 000 000</span>
                                        <img
                                            src="assets/img/icons/check.png"
                                            alt="ddd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-line"></div>
                    <div className="component71-item">
                        <span>O’zbekistonda pulni yetkazuvchi:</span>
                        <h3>Javohir Turaev</h3>
                        <p>Tashkent. +998 98 998 99 99</p>
                    </div>
                    <div className="white-line"></div>
                    <div className="component71-item">
                        <span>O’zbekistonda pulni oluvchi:</span>
                        <h3>Shamsiddin Abdullaev</h3>
                        <p>Tashkent. +998 98 998 99 99</p>
                        <h3>Olmagan</h3>
                    </div>
                </div>
                <div className="white-line"></div>

                <div className="modal-foooter">
                    <button>Tasdiqlash</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default DeptModal2;
