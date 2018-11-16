import React, { Component } from 'react';
import './../App.css';

class Sponsors extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        Our Sponsors:
                    </p>
                    <p className="App-text">
                        We would like to thank these sponsors for their continuous support:<br></br><br></br>
                        <ul>
                        <li> Great Explorations in Education </li>
                        <li> AAUW </li>
                        <li> Walla Walla Public Schools </li>
                        <li> Whitman College </li>
                        <li> YWCA of Walla Walla </li>
                        </ul>
                      </p>
                      <p>
                        To learn more, visit: wallawalla-wa.aauw.net

                    </p>
                </div>

            </div>

        )
    }
}

export default Sponsors;
