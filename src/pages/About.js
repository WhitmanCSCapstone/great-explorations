import React, { Component } from 'react';
import './../App.css';

class About extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        About page!
                    </p>
                    <p className="App-text">
                        Our information:
                    </p>
                </div>

            </div>
        
        )
    }
}

export default About;