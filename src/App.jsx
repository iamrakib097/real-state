import Homepage from "./routes/homePage/Homepage";
import Layout from "./layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglaPage from "./routes/singlePage/SinglaPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglaPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
