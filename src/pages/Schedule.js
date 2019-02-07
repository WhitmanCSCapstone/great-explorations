import React, { Component } from 'react';
import './../App.css';

class Schedule extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                  <p className="App-header-text">
                    Schedule
                    <center style={{ fontSize: '1.7vw', color: 'darkblue', fontWeight: '400'}}>Saturday, March 9, 2019 </center>
                    <center style={{ fontSize: '1.7vw', color: 'darkblue', fontWeight: '400'}}>Cordiner Hall Lobby - Whitman Campus </center>
                    </p>
                    <p className="App-text">
                    8:20 to 8:50 am ......... Student Check-in <span class="schedule">(Cordiner Hall Foyer)</span><br/>
                    9:00 to 10:00 am ...... Orientation / Keynote <span class="schedule">(Cordiner Hall Foyer)</span><br/>
                    10:15 to 11:15 am .... Workshop A <span class="schedule">(Science/Olin Hall)</span><br/>
                    11:30 to 12:15 pm .... Break / Food* <span class="schedule"></span><br/>
                    12:30 to 1:30 pm ......  Workshop B <span class="schedule">(Science/Olin Hall)</span><br/>
                    1:40 to 2:40 pm ......... Workshop C / evals <span class="schedule">(Science/Olin Hall)</span><br/>
                    2:45 pm ...................... Students Escorted back to Cordiner Hall for pick-up<br/><br/><br/>
                    </p>
                    <p className="App-text">
                    <span class="App-text-small">*Lunch Provided:</span> We cannot accommodate special dietary needs. If you need special food, we recommend you pack your own lunch.
                    Water and fresh fruit will be available.
                    </p>
                </div>
            </div>

        )
    }
}

export default Schedule;
