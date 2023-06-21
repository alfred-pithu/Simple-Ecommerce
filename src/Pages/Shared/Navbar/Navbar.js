import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
                toast.success('Signed Out Successfully')
            })
            .catch((error) => {
                if (error) {
                    toast.error('Error Occured, Sign Out Failed')
                }
            })
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#products">Products</a></li>

        {
            user?.email !== 'admin@gmail.com' && <li><Link to="/checkout">Checkout</Link></li>

        }

        {
            user?.email === 'admin@gmail.com' && <li><Link to='/dashboard'>Dashboard</Link></li>
        }



        {user?.uid ?
            <>




                <li className='  my-auto'><button onClick={handleLogOut} className=' border-secondary px-3 border-2 rounded-sm hover:bg-secondary hover:text-white ' >Sign Out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>}
    </React.Fragment>

    return (
        <div className="navbar bg-white flex justify-between border border-black border-1 rounded my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className=" z-20 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><span className='border-b-4  border-[#DB4444] '>Simple Ecommerce</span></Link>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;