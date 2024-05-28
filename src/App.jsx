import './index.scss'
import Home from "./pages/home/Home.jsx";
import {Users} from "./pages/users/Users.jsx";
import {Products} from "./pages/products/Products.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {Menu} from "./components/menu/Menu.jsx";
import {Login} from "./pages/login/Login.jsx";
import "./styles/global.scss";
import {User} from "./pages/user/User.jsx";
import {Product} from "./pages/product/Product.jsx";
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
                  </div>
              </div>
              <Footer/>
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
                    path: "users/:id",
                    element: <User />
                },
                {
                    path: "products",
                    element: <Products />
                },
                {
                    path: "products/:id",
                    element: <Product />
                },
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
