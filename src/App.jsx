import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabvar from "./componentes/Nabvar";
import Footer from "./componentes/Footer";
import Home from "./pagina/Home";
import LoginPage from "./pagina/LoginPage";
import RegisterPage from "./pagina/RegisterPage";
import Cart from "./pagina/Cart";
import Pizza from "./pagina/Pizza";
import Profile from "./pagina/Profile";
import NotFound from "./pagina/NotFound";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./componentes/ProtectedRoute";

function App() {
  return (
    <div className="contenedor">
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Nabvar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
