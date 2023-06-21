import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Checkout from "../../Pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import AdminAllOrder from "../../Pages/Dashboard/AdminAllOrder/AdminAllOrder";
import AdminAllUser from "../../Pages/Dashboard/AdminAllUser/AdminAllUser";

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
                element: <PrivateRoute> <ProductDetails></ProductDetails> </PrivateRoute>

            },
            {
                path: '/checkout',
                element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AdminAllOrder></AdminAllOrder>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminAllUser></AdminAllUser>
            }
        ]
    }

])

export default router;