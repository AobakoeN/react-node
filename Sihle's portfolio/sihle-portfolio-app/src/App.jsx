import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom"; // Added Outlet import
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import './style.scss'; // Adjust the path to your SCSS file


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Home",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Projects",
        element: <Projects />
      },
      {
        path: "Contact",
        element: <Contact />
      }
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
