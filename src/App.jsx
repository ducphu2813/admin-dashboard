import './index.scss'
import Home from "./pages/home/Home.jsx";
import {Users} from "./pages/users/Users.jsx";
import {Products} from "./pages/products/Products.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet, Link,
} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {Menu} from "./components/menu/Menu.jsx";
import {Login} from "./pages/login/Login.jsx";
import "./styles/global.scss";
function App() {

    //tạo layout
    const Layout = () => {
        return (
          <div className="main">
              <Navbar />
              <div className="container">

                  <div className="menuContainer">
                      <Menu />
                  </div>

                  <div className="contentContainer">
                    <Outlet />
                      <Footer/>
                  </div>

              </div>
          </div>
        );
    }

    //tạo router
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "users",
                    element: <Users />
                },
                {
                    path: "products",
                    element: <Products />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
