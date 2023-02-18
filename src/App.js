import { useState, useEffect } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WebFont from "webfontloader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/theme";

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
import { FONT_FAMILIES } from "./constants/StyleConstants";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import HomeLayout from "./components/layout/HomeLayout";
import { DARK, LIGHT, THEME } from "./constants/AppConstants";

library.add(fab, fas);

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: FONT_FAMILIES,
      },
    });
  }, []);

  const [theme, setTheme] = useState(LIGHT);

  useEffect(() => {
    let currentTheme = localStorage.getItem(THEME);
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const changeTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
      localStorage.setItem(THEME, DARK);
      return;
    }
    setTheme(LIGHT);
    localStorage.setItem(THEME, LIGHT);
  };

  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={<HomeLayout theme={theme} onChangeTheme={changeTheme} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<ProjectCard />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:postTitle" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/createPost" element={<CreatePost />} />
        <Route path="/admin/editPost" element={<EditPost />} />
      </>
    )
  );

  return (
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
