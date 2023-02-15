import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../src/components/Layout/Layout.js";
import Homepage from "../src/pages/Homepage.js";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
