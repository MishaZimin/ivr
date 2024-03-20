import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { SelectionLanguage } from "./components/SelectionLanguage/selection-language";
import { Welcome } from "./components/Welcome/welcome";
import { TextLanguage } from "./components/TextLanguage/text-language";
import { EasyLanguage } from "./components/EasyLanguage/easy-language";
import { SignLanguage } from "./components/SignLanguage/sign-language";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/selection" element={<SelectionLanguage />} />

                <Route path="/easy" element={<EasyLanguage />} />
                <Route path="/text" element={<TextLanguage />} />
                <Route path="/sign" element={<SignLanguage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
