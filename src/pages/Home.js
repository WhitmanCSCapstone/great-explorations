import React, { Component } from 'react';
import './../App.css';

class Home extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Home page!
                    </p>
                    <p className="App-text">
                        get registered at the above link!
                    </p>
                </div>

            </div>
        
        )
    }
}

export default Home;