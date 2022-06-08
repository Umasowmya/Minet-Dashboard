import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderV from "./components/organisms/HeaderV";
import LandingPage from "./components/pages/Purchase/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paymentpage from "./components/pages/Payment/index";
import { ThemeProvider } from "@mui/styles";
import customTheme from "./theme";
import PaySucces from "./components/pages/PaymentSuccesful/index";
import PurSuccess from "./components/pages/PurchaseSuccessful/index";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/payment" element={<Paymentpage />} />
          <Route path="/paymentSuccessful" element={<PaySucces />} />
          <Route path="/purchaseSuccessful" element={<PurSuccess />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
