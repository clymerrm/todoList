import React, { Component } from 'react';
import ls from "local-storage";

export class Footer extends Component {
    onClick = (e) => {
        ls.remove('todos');
        window.location.reload();
    };

    render() {
        return (
            <footer style={headerStyle}>
                <button onClick={(e) => { if (window.confirm('Are you sure you wish to reset all of your todos?')) this.onClick(e) }}>Reset Todos</button>
            </footer>
        )
    }
}



const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

export default Footer;
