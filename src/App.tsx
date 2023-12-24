import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";
import Success from "./pages/Success";
function App() {
  return (
    <>
      <CartProvider>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Container>
      </CartProvider>
    </>
  );
}

export default App;
