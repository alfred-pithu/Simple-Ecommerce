import React from 'react';
import topbannerimg from '../../../Assets/Images/TopBanner.png'

const TopBanner = () => {
    return (
        <div className="hero  bg-[#f99c04] rounded">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={topbannerimg} alt='' />
                <div className='px-3'>
                    <h1 className="text-4xl font-bold">Let the Shopping Begin!</h1>
                    <p className="py-6">Get all your desired products in one place. Explore our products.Choose, place order and relax.</p>
                    <a href="#products"> <button className="btn">Get Started</button></a>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;