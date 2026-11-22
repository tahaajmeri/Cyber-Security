import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Services from "./Service";
import Tools from "./Tool";
import Contact from "./Contact";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/tools" element={<Tools />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Route>

    </Routes>
  );
}

export default App;