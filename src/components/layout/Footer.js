import React, { Component } from 'react';
import ls from "local-storage";

export class Footer extends Component {
    onClick = (e) => {
        ls.remove('todos');
        window.location.reload();
    };

    render() {
        if (window.location.pathname.includes('locators') || window.location.pathname.includes('compare')) {
            return (
                <footer style={headerStyle}>
                </footer>
            )
        } else {
            return (
                <footer style={headerStyle}>
                    <button onClick={(e) => {
                        if (window.confirm('Are you sure you wish to reset all of your todos?')) this.onClick(e)
                    }}>Reset Todos
                    </button>
                    <button>
                        <a style={linkStyle} href="https://saucelabs.com/resources/articles/selenium-tips-css-selectors" target="_blank">CSS Selectors</a>
                    </button>
                    <button>
                        <a style={linkStyle} href="https://www.lambdatest.com/blog/complete-guide-for-using-xpath-in-selenium-with-examples/" target="_blank">Xpath Selectors</a>
                    </button>
                    <button>
                        <a style={linkStyle} href="https://www.lambdatest.com/blog/locators-in-selenium-webdriver-with-examples/" target="_blank">General Selectors</a>
                    </button>
                </footer>
            )
        }
    }
}



const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block'
};

export default Footer;
