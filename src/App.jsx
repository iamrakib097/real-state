import { createBrowserRouter, RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Homepage from "./routes/homePage/Homepage";
import { Layout, RequireAuth } from "./layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglaPage from "./routes/singlePage/SinglaPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import { AuthContextProvider } from "./context/AuthContext";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <AuthContextProvider>
        <Toaster />
        <RouterProvider router={router} />;
      </AuthContextProvider>
    </>
  );
}

export default App;
