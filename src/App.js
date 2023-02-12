import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/theme";

import Navbar from "./components/Header";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Login from "./pages/Login";

import ProjectCard from "./components/home/ProjectCard";
import Admin from "./pages/admin/Admin";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";
import {
  DARK_THEME,
  FONT_FAMILIES,
  LIGHT_THEME,
  THEME,
} from "./constants/StyleConstants";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: FONT_FAMILIES,
      },
    });
  }, []);

  const [theme, setTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    let currentTheme = localStorage.getItem(THEME);
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === LIGHT_THEME) {
      setTheme(DARK_THEME);
      localStorage.setItem(THEME, DARK_THEME);
      return;
    }
    setTheme(LIGHT_THEME);
    localStorage.setItem(THEME, LIGHT_THEME);
  };

  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // };

  return (
    <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
      <>
        <BrowserRouter>
          {/* <ScrollToTop /> */}
          <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:postTitle" element={<Post />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<ProjectCard />} />
            {/* Admin */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/createPost" element={<CreatePost />} />
            <Route path="/admin/editPost" element={<EditPost />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
