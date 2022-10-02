import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "../misc/Admin";
import CashFlow from "../misc/CashFlow";
import Curers from "../carrier/Curers";
import Depts from "../debt/Depts";
import NoverCourse from "../misc/NaverCourse";
import Offers from "../misc/Offers";
import OfferRequst from "../misc/OfferRequest";
import Profit from "../misc/Profit";
import Reports from "../misc/Reports";
import Requests from "../request/Requests";
import SingleOffers from "../misc/SingleOffer";
import SingleRequests from "../request/SingleRequest";
import UzbCourse from "../misc/UzbCourse";

function AdminApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/curers" element={<Curers />} />
                <Route path="/depts" element={<Depts />} />
                <Route path="/cashflow" element={<CashFlow />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/offerrequest" element={<OfferRequst />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/singleoffers" element={<SingleOffers />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/singlerequests" element={<SingleRequests />} />
                <Route path="/profit" element={<Profit />} />
                <Route path="/uzbcourse" element={<UzbCourse />} />
                <Route path="/novercourse" element={<NoverCourse />} />
            </Routes>
        </Router>
    );

}

export default AdminApp;
