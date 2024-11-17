import {createBrowserRouter,Navigate} from "react-router-dom";
import HomeLayout from "./HomeLayout";
import CategoryNews from "./CategoryNews";
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import Register from "./Register";
import NewsDetails from "./NewsDetails";
import PrivateRoute from "./Provider/PrivateRoute";


  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element: <Navigate to={"/category/01"}></Navigate>,
        },
        {
          path: "/category/:id",
          element: <CategoryNews></CategoryNews>,
          loader: ({ params }) => 
            fetch(
              `https://openapi.programming-hero.com/api/news/category/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/news/:id",
      element: <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path: "auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
        {
          path: "/auth/register",
          element: <Register></Register>,
        },
      ], 
    },
    {
      path: "/about",
      element: <h1>About</h1>
    },
    {
      path: "*",
      element: <h1>Error</h1>
    },
  ]);



export default router;