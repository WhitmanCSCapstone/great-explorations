import React, { Component } from 'react';
import './../App.css';

class Contact extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        Contact Us
                    </p>
                    <p className="App-text-subheader">
                        Need to get in touch? Here's how to do it.<br></br><br></br>
                        <ul className="App-text">
                            <li> Call: Carol Morgan (509) 520-9977 </li>
                            <li> Email: gewallawalla@gmail.com </li>
                            <li> Mail: Great Explorations, c/o Carol Morgan 1765 Gray Lynn Dr, Walla Walla, WA 99362 </li>
                        </ul>
                    </p>
                </div>

            </div>

        )
    }
}

export default Contact;
