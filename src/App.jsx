import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import LandingPage from "./pages/landing"
import Auth from "./pages/auth"
import RedirectLink from "./pages/redirect-link"
import Dashboard from "./pages/dashboard"
import Link from "./pages/link"



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <LandingPage />


      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/:id",
        element: <RedirectLink />

      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },

      {
        path: "/link/:id",
        element: <Link />
      }
    ]
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App