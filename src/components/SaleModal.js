import Modal from "react-bootstrap/Modal";

function SaleModal(props) {
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
                    <h5>Taklif Qilinayotgan Valyuta kursi:</h5>
                    <h3>$1= ￦1.250</h3>
                    <h1>￦12.500.000 = $10.000 </h1>
                    <span>
                        Bir nechta bank kartalariga pul ko’chirish so’ralishi
                        mumkin.
                    </span>
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
                    <button>Bekor Qilish</button>
                    <button>Rozi Bo'lish</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default SaleModal;
