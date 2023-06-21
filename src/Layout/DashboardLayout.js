import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    return (
        <div className=' text-black max-w-[1440px] mx-auto'>
            <Navbar></Navbar>


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-secondary text-white  ">
                        {/* Sidebar content here */}
                        <li className='border '><Link to='/dashboard'>All Orders</Link></li>
                        <li className='border my-3'><Link to='/dashboard/allusers'>All Users</Link></li>

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;



