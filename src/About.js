import React, { Component } from 'react';
import './App.css';

class About extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        <center> KeyNote Speaker </center>
                    </p>
                    <p className="App-header-text-2">
                        <center> Dr. Elizabeth (Liz) Macdonald </center>
                    </p>
                    <p className="App-text">
                        MacDonald leads an interdisciplinary citizen science project
                        called Aurorasauras,which uses social media to predict the
                        Northern Lights during the current solar maximum. In 2018
                        MacDonald and her team announced the discovery of a new aurora
                        called Strong Thermal Emission Velocity Enhancement (STEVE).
                        See photo above. She currently works in the Goddard Space
                        Flight Center. Liz is a Walla Walla High School alum, class of 1995.
                    </p>
                    <p className="App-header-text">
                        <center> Conference Goals </center>
                    </p>
                    <p className="App-text">
                        To provide 5th through 8th grade girls with an informal,
                        and hands-on experience with careers that utilize science,
                        technology, engineering and math. To provide an opportunity
                        to meet and form personal contacts with women in these exciting
                        careers.                 
                    </p>
                </div>

            </div>

        )
    }
}

export default About;
