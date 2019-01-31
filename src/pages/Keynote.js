import React, { Component } from 'react';
import './../App.css';
import pic1 from './../grex_images/Liz_Pic.jpg';
import pic2 from './../grex_images/auroraKeynote.jpg';

class Keynote extends Component {

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        Keynote Speaker
                    </p>

                    <p className="App-header-text-2">
                        <center>This year, we are pleased to announce<br/>
                         Dr. Elizabeth (Liz) MacDonald as our 2019 Keynote Speaker!</center>
                    </p>
                    <div><h3><img src={pic1} height="300px" alt="logo" /></h3></div>
                    <p className="App-text">
                    <center><span class="picture">Alice MacDonald, local retired elementary Math Specialist and her daughter,
                    NASA Scientist Dr. Liz MacDonald.</span><br/><br/></center>

                    Liz is a Walla Walla High School class of 1995 alum and, in 2018, was named a Walla Walla High
                    School Graduate of Distinction.<br/> <br/>
                    Liz works for NASA at the Goddard Space Flight Center in Maryland. She leads a citizen science
                    project called <a href="http://www.aurorasaurus.org/">Aurorasaurus</a>, which uses citizen science and
                    social media to predict the Northern Lights, which can even be seen in Washington! In 2018,
                    she announced the discovery of a new aurora called STEVE (Strong Thermal Emission Velocity
                    Enhancement).<br/> <br/>
                    Liz has been studying the glitter of the Northern Lights for 20+ years, and it never ceases to
                    amaze her. In addition to doing citizen science and outreach such as keynoting this Great
                    Explorations, Liz does some amazing high-tech space physics. She has also led teams that build
                    instruments to measure charged particles in the space environment for NASA and DOE satellite
                    and rocket missions. Outside of work, she enjoys skiing, hiking, and poetry.
                    <br/> <br/>
                    What are the Northern Lights and how do you know when is the best time to see them? How
                    can you make contributions to NASA science from Walla Walla? You will be introduced to the

                    beautiful basics of the physics that cause the aurora borealis, how you can participate, and how
                    scientists are using both satellite data and information from the public to figure out where and
                    when they are best seen.<br/> <br/>
                    During Great Explorations, we’ll discuss new technology, as well as well as learn about the Sun,
                    magnetic fields, and glitter (!) by putting the Northern Lights in the spotlight. From this
                    example, we can see how everyone can contribute, and how new discoveries can be made in
                    that process.

                    </p>
                    <div><h3><img src={pic2} height="350px" alt="logo" /></h3></div>
                    <p className="picture">
                    This image of Steve was taken August 17, 2015 at Little Bow Resort,
                    AB, Canada. Photo by Elfie Hall.
                    </p>
                </div>
            </div>

        )
    }
}

export default Keynote;
