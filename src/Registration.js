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
                        A Science, Technology, Engineering and Math conference for 5th thru 8th grade girls.<br></br>
                                <center>March 9th, 2019 - Whitman College</center>
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
