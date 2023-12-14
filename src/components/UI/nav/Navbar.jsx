import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <Link to="/posts">Посты</Link>
                <Link to="/about">О приложении</Link>
            </div>
        </div>
    );
};

export default Navbar;