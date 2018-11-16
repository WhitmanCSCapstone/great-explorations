import React, { Component } from 'react';
import './../App.css';

class Sponsors extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Sponsored by:
                    </p>
                    <p className="App-text">
                        Our sponsors:
                        <ul>
                        <li> Great Explorations in Education </li>
                        <li> AAUW </li>
                        <li> Walla Walla Public Schools </li>
                        <li> Whitman College </li>
                        <li> YWCA of Walla Walla </li>
                        To learn more, visit: wallawalla-wa.aauw.net
                        </ul>
                    </p>
                </div>

            </div>

        )
    }
}

export default Sponsors;
