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
                    <p className="App-header-text-2">
                        <center>This year, we are pleased to announce
                         Dr. Elizabeth (Liz) MacDonald as our 2019 Keynote Speaker!</center>
                    </p>

                    <p className="App-text">
                        MacDonald leads an interdisciplinary citizen science project
                        called Aurorasaurus, which uses social media to predict the
                        Northern Lights during the current solar maximum. In 2018
                        MacDonald and her team announced the discovery of a new aurora
                        called Strong Thermal Emission Velocity Enhancement (STEVE). See
                        photo above. She currently works in the Goddard Space Flight Center.
                        Liz is a Walla Walla High School alum, class of 1995.
                    </p>
                </div>

            </div>

        )
    }
}

export default Keynote;
