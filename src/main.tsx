import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import HomePage from './routes/HomePage/index.tsx';

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App />}> 
  <Route index element={<HomePage />} />
  </Route>
</Routes>
</BrowserRouter>
)
