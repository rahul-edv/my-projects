import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";

function App() {
  const Layout = () => {
    // navbar footer and any common component can be placed here
    return <div className="main"></div>;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "users",
      element: <Users />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
