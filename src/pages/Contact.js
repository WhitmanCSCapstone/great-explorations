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
                        Need to get in touch? Email or call us here:<br></br><br></br>
                        <ul className="App-text">
                        <li> Call: (509) 520-9977 </li>
                        <li> Email: gewallawalla@gmail.com </li>
                        </ul>
                    </p>
                </div>

            </div>
        
        )
    }
}

export default Contact;