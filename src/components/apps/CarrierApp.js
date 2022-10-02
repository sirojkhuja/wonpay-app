import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CurerPage from "../carrier/CurerPage";
import CurerSale from "../carrier/CurerSale";
import GetMoney from "../misc/GetMoney";
import GiveMoney from "../misc/GiveMoney";

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
