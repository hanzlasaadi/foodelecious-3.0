import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import POS from "./POS_CustomerOrder";
import SalesReport from "./sales";
import "./app.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<POS />} />
        <Route path="/SalesReport" element={<SalesReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

