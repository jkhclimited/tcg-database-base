import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="header-bar">
                <Link to="/" className="homepage">Home</Link>
                <Link to="/sets" className="setspage">Sets</Link>
                <Link to="/creators" className="">Creators</Link>
                <Link to="/spoilers" className="">Spoilers</Link>
                <Link to="/home#1" className="">Placehold2</Link>
            </nav>
        )
    }
}

export default NavBar;