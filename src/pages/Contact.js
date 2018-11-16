import React, { Component } from 'react';
import './../App.css';

class Contact extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Contact Us
                    </p>
                    <p className="App-text">
                        Need to get in touch? Email or call us here:
                    </p>
                </div>

            </div>
        
        )
    }
}

export default Contact;