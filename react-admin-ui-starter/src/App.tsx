import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    // navbar footer and any common component can be placed here
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Sidebar />
          </div>
          <div className="contentContainer">
            {/* can be any component , this is for pages */}
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "products", element: <Products /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
