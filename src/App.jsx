import "bootstrap-icons/font/bootstrap-icons.css";
import "./components/css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import Collection from "./components/Collection";
import Women from "./components/Women";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Cart />
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/women" element={<Women />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
