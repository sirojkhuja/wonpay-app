import Modal from "react-bootstrap/Modal";

function CurerModal(props) {
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
                    <h1>Farruh Soipov</h1>
                    <h3>+99893 400 12 05</h3>
                    <h1>+$5 216.45</h1>
                    <div className="modal-input">
                        <input type="text" />
                        <span>$</span>
                    </div>
                    <div className="modal-input">
                        <input type="text" />
                        <span>so'm</span>
                    </div>
                    <div className="modal-input">
                        <input type="text" />
                        <span>kurs</span>
                    </div>
                </div>
                <div className="white-line"></div>

                <div className="modal-foooter">
                    <button>Ortga</button>
                    <button>Oldim</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default CurerModal;
