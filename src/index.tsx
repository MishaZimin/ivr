import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { SelectionLanguage } from "./components/selection/selection-language";
import { Welcome } from "./components/welcome-screen/welcome";
import { EasyLanguage } from "./components/easy/easy-language";
import { TestWebcam } from "./components/test-sevice/test";
import { SearchScreen } from "./components/search/catalog";
import { Subcatalog } from "./components/search/subcatalog";
import { DiscriptionSubcatalog } from "./components/search/discription";

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
        <Route path="/test" element={<TestWebcam />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/subcatalog" element={<Subcatalog />} />
        <Route path="/discriptionsub" element={<DiscriptionSubcatalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
