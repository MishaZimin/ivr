import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Welcome } from "./pages/Welcome/welcome";
import { TestWebcam } from "./pages/Acquaintance/test";
import { Successfully } from "./pages/Successfully/successfully";
import { SelectionLanguage } from "./pages/Selection/selection";

import { SearchScreen } from "./pages/Catalog/catalog";
import { Subcatalog } from "./pages/Subcatalog/subcatalog";
import { DiscriptionSubcatalog } from "./pages/Dscription/discription";

import { EasyLanguage } from "./pages/easy/easy-language";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

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
        <Route path="/successfully" element={<Successfully />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/subcatalog" element={<Subcatalog />} />
        <Route path="/discriptionsub" element={<DiscriptionSubcatalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
