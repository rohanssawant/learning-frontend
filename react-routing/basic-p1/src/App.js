import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
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
