import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../src/components/Layout/Layout.js";
import Homepage from "../src/pages/Homepage.js";

function App(props) {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
