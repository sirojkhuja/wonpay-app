import Modal from "react-bootstrap/Modal";

function AddCurerModal(props) {
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
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
                    </div>
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
                    </div>
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
                    </div>
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
                    </div>
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
                    </div>
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
                    </div>
                    <div className="add-curer-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/profile-mini.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-9">Shavkat Aliyev</div>
                            </div>
                        </div>
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
export default AddCurerModal;
