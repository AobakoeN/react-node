import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx";
import { Children } from "react"

const Layout = ()=> {

  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element:<Layout/>,
    Children: [
       {
        path:"/",
        element: <Home/>
       },
       {
        path: "/Projects",
        element: <Projects/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
       {
    path: "/About",
    element: <About/>,
  },

    ]
  },
  
  
]);


function App() {
 return(
  <div className="app">
    <div className="container">
    <RouterProvider router={router}/>
  </div>
  </div>

 );
}

export default App
