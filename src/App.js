import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/theme";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/home/Blog";
import Post from "./pages/blog/post/Post";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Login from "./pages/login/Login";

import ProjectCard from "./components/projectCard/ProjectCard";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import CreatePost from "./pages/admin/createPost/CreatePost";
import EditPost from "./pages/admin/editPost/EditPost";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:400,700", "Poppins:700", "Prata:400"],
      },
    });
  }, []);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/createPost" element={<CreatePost />} />
            <Route path="/admin/editPost" element={<EditPost />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
