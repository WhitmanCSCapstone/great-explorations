import React, { Component } from 'react';
import './App.css';
import EmbedForm from './EmbedForm.js';
import WorkshopGrid from './Grid.js';
import ImageScroll from './ImageScroll.js';

class Registration extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <div className="App-header-text">
                    <p>
                        <ImageScroll />
                    </p>
                    <p className="App-header-text">
                        Welcome to Great Explorations!
                    </p>
                    <p className="App-text">
                        Below you will find all of the 2019 workshops.
                    </p>
                    <p>
                        <WorkshopGrid />
                    </p>
                    <p>
                        <EmbedForm />
                    </p>
                </div>

            </div>
        
        )
    }
}

export default Registration;