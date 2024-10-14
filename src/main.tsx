import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreDetails from "./routes/MoreDetails/index.tsx";
import "./index.css";
import HomePage from "./routes/HomePage/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="more-details" element={<MoreDetails />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
