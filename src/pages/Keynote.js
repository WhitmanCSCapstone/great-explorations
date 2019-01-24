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
                        Dr. Liz MacDonald is a 1995 Wa-Hi graduate and former great Explorations
                        attendee, works for NASA (National Aeronautical and Space Adminstration)
                        at the Goddard
                    </p>
                </div>

            </div>

        )
    }
}

export default Keynote;
