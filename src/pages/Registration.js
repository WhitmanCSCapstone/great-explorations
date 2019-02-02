import React, { Component } from 'react';
import { BackTop } from 'antd';
import { Anchor } from 'antd';
import './../App.css';
import EmbedForm from './../components/EmbedForm.js';
import WorkshopGrid from './../components/Grid.js';
import ImageScroll from './../components/ImageScroll.js';

const { Link } = Anchor;

class Registration extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        <ImageScroll />
                    </p>
                    <p className="App-header-text">
                        Welcome to Great Explorations!<br></br>
                        <center style={{ fontSize: '2vw', color: 'black', fontWeight: '400'}}>Scroll down to register </center>
                    </p>
                    <p>
                        <BackTop />
                    </p>
                    <p className="App-text">
                        <center>A Science, Technology, Engineering and Math conference for 5th thru 8th grade girls.<br></br></center>
                                <center style={{ fontStyle: 'oblique' , fontWeight: '600'}}>March 9th, 2019 - Whitman College</center><br></br>
                                <center> All workshops are taught in college classrooms and labs in English </center>
                    </p>
                    <p className="App-text-small">
                      Hover over boxes to see descriptions<br></br>
                    </p>
                    <p className="App-header-text">
                        <WorkshopGrid />
                    </p>
                    <p className="App-header-text">
                        <EmbedForm />
                    </p>
                    
                </div>
            </div>

        )
    }
}

export default Registration;
