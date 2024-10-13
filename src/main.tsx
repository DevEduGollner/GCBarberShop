import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import MoreDetails from "./routes/MoreDetails/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="more-details" element={<MoreDetails />} />
    </Routes>
  </BrowserRouter>
);
