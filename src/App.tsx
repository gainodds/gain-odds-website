import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./pages/auth/login";
import AuthLayout from "./pages/auth/layout";
import SignupPage from "./pages/auth/signup";
import ForgotPassowrdPage from "./pages/auth/forgotPassword";
import AppLayout from "./pages/app/layout";
import Home from "./pages/app";
import MyBetsPage from "./pages/app/myBets";
import ProfilePage from "./pages/app/profile";
import SportsPage from "./pages/app/sports";
import VirtualPage from "./pages/app/virtual";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sports",
          element: <SportsPage />,
        },
        {
          path: "/virtual",
          element: <VirtualPage />,
        },

        {
          path: "/my-bets",
          element: <MyBetsPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={"/auth/login"} />,
        },
        { path: "/auth/login", element: <LoginPage /> },
        { path: "/auth/sign-up", element: <SignupPage /> },
        { path: "/auth/forgot-password", element: <ForgotPassowrdPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
