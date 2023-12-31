import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import InputPage from "./pages/input";
import LoginPage from "./pages/LoginPage";
import MenusPage from "./pages/MenusPage";
import MenuPage from "./pages/MenuPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menus" element={<MenusPage />} />
      </Routes>
    </BrowserRouter>
  );
}
