import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CurerPage from "../CurerPage";
import CurerSale from "../CurerSale";
import GetMoney from "../GetMoney";
import GiveMoney from "../GiveMoney";

function CarrierApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CurerPage />} />
                <Route path="/givemoney" element={<GiveMoney />} />
                <Route path="/getmoney" element={<GetMoney />} />
                <Route path="/curersale" element={<CurerSale />} />
            </Routes>
        </Router>
    );
}

export default CarrierApp;
