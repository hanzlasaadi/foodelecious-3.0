import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
// import Modal from "./Modal";
// import Login from "./Login";
import POS from "./POS_CustomerOrder";
import SalesReport from "./sales";
import ProductReport from "./productSales";
import "./app.min.css";
import Stockis from "./StockKeeping";
import PaymentModal from "./payment";
import OrderList from "./order";
import ReceiptBill from "./receipt";
import OrderSubmit from "./submit";
import HomePage from "./home";
// import Receipt from "./billpay";

import React from "react";
function App() {
  const [orderData, setOrderData] = React.useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<POS setOrderData={setOrderData} />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SalesReport" element={<SalesReport />} />
        <Route path="/ProductReport" element={<ProductReport />} />
        <Route path="/Stockis" element={<Stockis />} />
        <Route path="/PaymentModal" element={<PaymentModal />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/OrderSubmit" element={<OrderSubmit />} />
        {/* <Route path="/Receipt" element={<Receipt />} /> */}










        <Route
          path="/ReceiptBill"
          element={<ReceiptBill orderData={orderData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
