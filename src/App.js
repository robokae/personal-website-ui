import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/home/Home.js";
import Blog from "./pages/blog/Blog.js";
import Portfolio from "./pages/portfolio/Portfolio.js";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"]
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
