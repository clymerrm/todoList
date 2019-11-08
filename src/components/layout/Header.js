import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Codemash 2020 Things To Do</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <a style={linkStyle} href = "https://www.codemash.org/session-list/"> | Schedule</a>
            <a style={linkStyle} href = "https://www.codemash.org/speakers/"> | Speakers</a>
        </header>
    )
};

const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
