import React from 'react';
import '../App.scss';
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link to="/">Richard Chan</Link>
    </nav>
)

export default Navbar;