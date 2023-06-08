import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/product", element: <Product /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
