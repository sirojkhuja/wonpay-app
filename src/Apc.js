import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CurerPage from "./components/CurerPage";

function Apc() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CurerPage />} />
            </Routes>
        </Router>
    );
}

export default Apc;
