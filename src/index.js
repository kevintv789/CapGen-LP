import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./screens/main/Home";
import PrivacyPolicy from "./screens/privacy-policy/PrivacyPolicy";
import Terms from "./screens/terms-conditions/Terms";
import Fallback from "./screens/Fallback/Fallback";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import { Footer, Header } from "./components";

const app = initializeApp({
  apiKey: "AIzaSyDQ03Ts4JnI8d0E4Xul3aG7RHEj4IDoXSA",
  authDomain: "capgen-23a23.firebaseapp.com",
  projectId: "capgen-23a23",
  storageBucket: "capgen-23a23.appspot.com",
  messagingSenderId: "186480290598",
  appId: "1:186480290598:web:cea032cef4b3706ca96fe7",
  measurementId: "G-N1CGJDRLJ8",
});

getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="pd15">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
        <Footer className="footer-container pd15" />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
