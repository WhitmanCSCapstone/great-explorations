import React, { Component } from 'react';
import './App.css';

class Sponsors extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Sponsored By
                    </p>
                    <p className="App-text">
                        Our sponsors:
                        <ul>
                          <li>Great Exploration in Education</li>
                          <li>AAUW</li>
                          <li>Walla Walla Public Schools</li>
                          <li>Whitman College</li>
                          <li>YMCA of Walla Walla</li>
                          To learn more, visit: wallawalla-wa.aauw.net
                        </ul>
                    </p>
                </div>

            </div>

        )
    }
}

export default Sponsors;
