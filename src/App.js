import { useEffect } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WebFont from "webfontloader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/globalStyles";
import { lightTheme, darkTheme } from "./global/theme";

import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Login from "./pages/Login";

import Admin from "./pages/admin/Admin";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";
import { FONT_FAMILIES } from "./constants/TypographyConstants";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import HomeLayout from "./components/layout/HomeLayout";
import useTheme from "./hooks/useTheme";
import { LIGHT } from "./constants/AppConstants";
import Error from "./pages/Error";
// import About from "./pages/about/About";
// import About from "./pages/about/About";

library.add(fab, fas);

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: FONT_FAMILIES,
      },
    });
  }, []);

  const [theme, changeTheme] = useTheme();

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
          path="/"
          element={
            <HomeLayout
              theme={theme}
              onChangeTheme={changeTheme}
              dynamicHeader={true}
            />
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          element={
            <HomeLayout
              theme={theme}
              onChangeTheme={changeTheme}
              dynamicHeader={false}
            />
          }
        >
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:postTitle" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/createPost" element={<CreatePost />} />
        <Route path="/admin/editPost" element={<EditPost />} />
        <Route
          path="/*"
          element={<Error theme={theme} onChangeTheme={changeTheme} />}
        />
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
