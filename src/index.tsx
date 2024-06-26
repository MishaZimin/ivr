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
import { DiscriptionSubcatalog } from "./pages/Description/description";
import { AdditionalPage } from "./pages/Additional-inf/additional-inf";
import { AdditionalCatalog } from "./pages/Additional-inf/additional-catalog";

import { ScrollToTop } from "./components/scroll-to-top";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/selection" element={<SelectionLanguage />} />
        <Route path="/test" element={<TestWebcam />} />
        <Route path="/successfully" element={<Successfully />} />
        <Route path="/catalog" element={<SearchScreen />} />
        <Route path="/subcatalog" element={<Subcatalog />} />
        <Route path="/discriptionsub" element={<DiscriptionSubcatalog />} />
        <Route path="/addinf" element={<AdditionalPage />} />
        <Route path="/addcat" element={<AdditionalCatalog />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
