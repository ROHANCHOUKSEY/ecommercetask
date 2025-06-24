import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductList from "./Component/Products/ProductList.jsx";
import App from "./App.jsx";
import ProductDetail from "./Component/Products/ProductDetail.jsx";
import SignUp from "./Component/Auth/SignUp.jsx";
import Login from "./Component/Auth/Login.jsx";
import AuthProvider from "./Context/AuthContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="productlist" element={<ProductList />} />
      <Route path="products/:id" element={<ProductDetail />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
