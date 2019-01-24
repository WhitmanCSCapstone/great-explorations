import React, { Component } from 'react';
import './../App.css';
import pic1 from './../grex_images/Dr_Liz_Cover.jpg';

class Keynote extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Keynote Speaker
                    </p>
                    <div><h3><img src={pic1} height="300px" alt="logo" /></h3></div>
                    <p className="App-header-text-2">
                        <center>This year, we are pleased to announce
                         Dr. Elizabeth (Liz) MacDonald as our 2019 Keynote Speaker!</center>
                    </p>

                    <p className="App-text">
                        Dr. Liz MacDonald, a 1995 Wa-Hi graduate and former great Explorations attendee,
                        works for NASA (National Aeronautical and Space Adminstration) at the Goddard Space
                        Flight center in Maryland. She leads a citizen science project call Aurorasaurus
                        (http://www.aurorasaurus.org/), which uses citizen observations and social media
                        to predict the Northern Lights, which can even be seen in Washington! In 2018,
                        she annouced the discovery of a new aurora called STEVE (Strong thermal Emission Velocity
                        Enhancement).<br/> <br/>

                        Liz has been studying the glitter of the Northern Lights for more than 20 years,
                        and it never ceases to amaze her. In addition to the citizen science and outreach,
                        Liz does some amazing high-tech space physics. She has also led teams that build
                        intruments to measure charged particles in the space environment for NASA and DOE
                        (Department of Energy) satellite and rocket missions.<br/> <br/>

                        “What are the Northern Lights and how do you know when is the best time to see them? How can
                        you make contributions to NASA science from Walla Walla?”
                        Liz will introduce you to the beautiful basics of the physics that cause the aurora borealis. She will
                        share how you can participate in this discovery, and how scientists are using both satellite data
                        and information from the public to figure out where and when Northern Lights are best seen.
                        During the keynote address, you will also learn more about the Sun, magnetic fields, and glitter (!)
                        by putting the amazing Northern Lights in the spotlight.
                    </p>
                </div>

            </div>

        )
    }
}

export default Keynote;
