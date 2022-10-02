import Modal from "react-bootstrap/Modal";

function RequestModal(props) {
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
                        <h1>W 2 000 000</h1>
                        <h3>Farruh Soipov</h3>
                    </div>
                    <div className="white-line"></div>
                    <div className="request-modal-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-9">
                                    <span>Nanhyob bank</span>
                                    <span>3510955266503</span>
                                    <span>SAYDULLAEV ISOMIDIN</span>
                                </div>
                                <div className="col-3">
                                    <img
                                        src="assets/img/icons/copy.png"
                                        alt="copy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-line"></div>

                <div className="modal-foooter">
                    <button>Yopish</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default RequestModal;
