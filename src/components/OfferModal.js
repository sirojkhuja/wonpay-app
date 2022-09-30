import Modal from "react-bootstrap/Modal";

function OfferModal(props) {
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
                    <div className="offer-modal-input">
                        <div className="put-money-input">
                            <label htmlFor="put_money">Olish:</label>
                            <input type="number" id="put_money2" />
                            <span className="korean-won2">
                                <img src="assets/img/icons/won.png" alt="won" />
                            </span>
                        </div>
                    </div>
                    <div className="white-line"></div>
                    <div className="offer-modal-input">
                        <div className="put-money-input">
                            <label htmlFor="put_money">Sotish:</label>
                            <input type="number" id="put_money2" />
                            <span className="korean-won2">
                                <img src="assets/img/icons/won.png" alt="won" />
                            </span>
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
export default OfferModal;
