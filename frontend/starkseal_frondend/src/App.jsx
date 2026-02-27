import "./App.css";
import Home from "./pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Commit from "./pages/commit/commit";
import Dashboard from "./pages/dashboard/dashboard";
import Layout from "./components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "commit", element: <Commit /> },
    ],
  },
  ,
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
