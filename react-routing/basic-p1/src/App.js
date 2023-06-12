import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/Error";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
]);

// Older version of react router < 6.0
// const routerOld = createRoutesFromElements(
//   <Route>
//     <Route path="/home" element={<Home />} />
//   </Route>
// );
function App() {
  return <RouterProvider router={router} />;
}

export default App;
