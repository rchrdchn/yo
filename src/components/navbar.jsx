import React from 'react';
import '../App.scss';
import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Richard Chan</Link></li>
                <li><Link to="/now">Now</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
)

export default Navbar;