import React, { Component } from 'react';
import './../App.css';

class Sponsors extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        Our Sponsors
                    </p>
                    <p className="App-text-subheader">
                        Great Explorations in Education thanks the following sponsors for their generous support of the 2019 Great Explorations in Science, Technology, Engineering and Math Conference.<br></br><br></br>
                        <ul className="App-text">
                        <li> American Association of University Women - Walla Walla </li>
                        <li> YWCA of Walla Walla </li>
                        <li> Walla Walla Public Schools </li>
                        <li> Whitman College </li>
                        <li> YWCA of Walla Walla </li>
                        </ul>
                      </p>
                      <p className="App-text-subheader">
                        General Operating Support<br></br><br></br>
                        <ul className="App-text">
                        <li> J.L. Stubblefield Trust </li> 
                        <li> Clara and Art Bald Trust </li> 
                        <li> Mary Garner Esary Trust </li> 
                        <li> George T. Welch Testamentary Trust </li> 
                        <li> Yancey P. Winans Testamentary Trust </li> 
                        <li> Blue Mountain Community Foundation </li>
                        </ul>
                      </p>
                      <p className="App-text-subheader">
                        Special Thanks To<br></br><br></br>
                        <ul className="App-text">
                        <li> Whitman College Computer Science Department </li> 
                        <li> Dr. Janet Davis and the Senior Capstone Project team for developing and creating the new online registration website. </li> 
                        </ul>
                      </p>
                      <p>
                        To learn more, visit: <a href="https://wallawalla-wa.aauw.net">wallawalla-wa.aauw.net</a>

                    </p>
                </div>

            </div>

        )
    }
}

export default Sponsors;
