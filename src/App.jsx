import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import LandingPage from "./pages/landing"
import Auth from "./pages/auth"
import RedirectLink from "./pages/redirect-link"
import Dashboard from "./pages/dashboard"
import Link from "./pages/link"
import { UrlProvider } from "./context"
import RequireAuth from "./components/require-auth"



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
        element:<RequireAuth> <Dashboard /> </RequireAuth> 
      },

      {
        path: "/link/:id",
        element:<RequireAuth> <Link /> </RequireAuth>
      }
    ]
  }
])



function App() {
  return (
    <UrlProvider>
    <RouterProvider router={router} />
    </UrlProvider>
  )
}

export default App