import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Registration from "../Pages/Registration";
import SignIn from "../Pages/SignIn";




const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader:()=>fetch('https://quantum-edge-server.vercel.app/api/jobs'),
        Component: Home
      },
      {
        path: '/registration',
        Component: Registration
      },
      {
        path: '/signIn',
        Component: SignIn
      }

    ]
  },
]);

export default router;