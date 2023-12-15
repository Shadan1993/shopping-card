import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";
function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
