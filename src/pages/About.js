import React, { Component } from 'react';
import './../App.css';

class About extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Conference Goals
                    </p>
                    <p className="App-text">
                        To provided 5th through 8th grade girls with an informal ,
                        and hands-on experience with careers that utilize science,
                        technology, engineering and math. To provide an opportunity to 
                        meet and form personal contacts with women in these exciting careers.
                    </p>
                </div>

            </div>

        )
    }
}

export default About;
