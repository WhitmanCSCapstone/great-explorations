import React, { Component } from 'react';
import './../App.css';

class Keynote extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Keynote Speaker
                    </p>
                    <p className="App-text">
                        This year, we are pleased to announce Dr. Elizabeth (Liz) MacDonald as our 2019 Keynote Speaker!
                    </p>
                </div>

            </div>
        
        )
    }
}

export default Keynote;