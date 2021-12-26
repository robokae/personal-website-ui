import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WebFont from "webfontloader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/theme";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:400,700"]
      }
    });
  }, []);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <BrowserRouter>
          <ScrollToTop />
          <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
