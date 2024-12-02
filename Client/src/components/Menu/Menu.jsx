import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { ConnectButton } from '@mysten/dapp-kit';

const Menu = () => {
    return (
        <nav className="menu flex justify-between items-center">
            {/* <div className="logo">
                <img src="path/to/logo.png" alt="Logo" />
            </div> */}
            <ul className=" px-6 py-3 flex items-center justify-center ">
                <Link to="/profile" className="px-6 py-3" >
                <p className=" px-6 py-3" >Profile</p></Link>
                {/* <Link to="/health" className="px-6 py-3" >
                <p className=" px-6 py-3" >Health</p></Link> */}

                {/* <li className="menu-option " style={{ margin: '0 10px' }}>Download the App</li> */}
                <button className=" mr-5 px-8  h-8 items-center justify-center text-black bg-white font-medium rounded-full hover:opacity-90 transition-opacity">
      Download App
    </button>
    <ConnectButton />
                
            </ul>
        </nav>
    );
};

export default Menu;