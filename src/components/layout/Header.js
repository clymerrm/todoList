import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    if (window.location.pathname.includes('latest')) {
        return (
            <header style={headerStyle}>
                <h1 data-test-key='Header'>Codemash 2020 Things To Do</h1>
                <Link data-test-key='HomeLink' style={linkStyle} to="/">Home</Link>
                <a data-test-key='ScheduleLink' style={linkStyle} href = "https://www.codemash.org/session-list/"> | Schedule</a>
                <a data-test-key='SpeakersLink' style={linkStyle} href = "https://www.codemash.org/speakers/"> | Speakers</a>
            </header>
        )
    } else {
        return (
            <header style={headerStyle}>
                <h1>Codemash 2020 Things To Do</h1>
                <Link style={linkStyle} to="/">Home</Link>
                <a style={linkStyle} href = "https://www.codemash.org/session-list/"> | Schedule</a>
                <a style={linkStyle} href = "https://www.codemash.org/speakers/"> | Speakers</a>
            </header>
        )
    }
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
