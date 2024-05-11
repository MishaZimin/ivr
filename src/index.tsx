import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Welcome } from "./pages/Welcome/welcome";
import { TestWebcam } from "./pages/acquaintance/test";
import { Successfully } from "./pages/successfully/successfully";
import { SelectionLanguage } from "./pages/selection/selection";

import { SearchScreen } from "./pages/catalog/catalog";
import { Subcatalog } from "./pages/subcatalog/subcatalog";
import { DiscriptionSubcatalog } from "./pages/dscription/discription";

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
        <Route path="/test" element={<TestWebcam />} />
        <Route path="/successfully" element={<Successfully />} />
        <Route path="/catalog" element={<SearchScreen />} />
        <Route path="/subcatalog" element={<Subcatalog />} />
        <Route path="/discriptionsub" element={<DiscriptionSubcatalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
