import React from 'react';
// import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="menu flex justify-between items-center">
            {/* <div className="logo">
                <img src="path/to/logo.png" alt="Logo" />
            </div> */}
            <ul className=" px-6 py-3 flex items-center justify-center ">
                <p className=" px-6 py-3" >Become an Influencer</p>
                <p className="px-6 py-3" >Health</p>

                {/* <li className="menu-option " style={{ margin: '0 10px' }}>Download the App</li> */}
                <button className="px-6  h-8 items-center justify-center text-black bg-white font-medium rounded-full hover:opacity-90 transition-opacity">
      Download App
    </button>
                
            </ul>
        </nav>
    );
};

export default Menu;