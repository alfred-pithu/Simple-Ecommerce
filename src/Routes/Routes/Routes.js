import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: '',
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            }

        ]
    }
])

export default router;