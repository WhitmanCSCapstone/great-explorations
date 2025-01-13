import React, { Component } from 'react';
// import { Row, Col } from 'antd';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2025GE_EN.pdf';
import brochureEs from './../brochures/2025GE_ES.pdf';
import pic1 from "../grex_images/GE2025_SparkSplash.jpg";
// import pic2 from "../grex_images/GE2025_SparkSplash_es.jpg";

class About extends Component {

    state = {
        text: []
    }

    componentDidMount() {
        WEBTEXT_ADD_CALLBACK(this.updateText.bind(this));
        this.updateText();
    }

    updateText() {
        this.setState({ text: WEBTEXT });
    }

    render() {
        // Get the screen width
        const screenWidth = window.innerWidth;

        // Determine image width based on screen size
        const imageWidth = screenWidth <= 600 ? '100%' : '500px'; // Use 100% width for screens <= 600px

        // 2025: fixed security issue by adding rel="noreferrer noopener to all <a elements and adjusted for mobile devices"
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-text" style={{ textAlign: 'center' }}> 
                        <a target="_blank" rel="noreferrer noopener" href={brochureEn} style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem) !important', fontWeight: '200 !important', whiteSpace: 'nowrap' }}>
                            English Brochure Download
                        </a>
                        <span style={{ padding: '0 15px' }}>&nbsp;</span> {/* Added spacing between the two links */}
                        <a target="_blank" rel="noreferrer noopener" href={brochureEs} style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem) !important', fontWeight: '200 !important', whiteSpace: 'nowrap' }}>
                            Descargar Folleto en Español
                        </a>
                    <p className="App-header-text">
                        <center>{this.state.text[17]}</center>
                    </p>

                    {/* was height 300px - trying to display larger. Also changed to center. And changed to read screenWidth for mobile*/}
                    {/* Center the image and adjust width based on screen size */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h3>
                            <img 
                                src={pic1} 
                                style={{ 
                                    width: imageWidth, 
                                    maxWidth: '100%', // Prevents the image from getting too wide
                                    height: 'auto'  // Ensures aspect ratio is preserved
                                }} 
                                alt="logo" 
                            />
                        </h3>
                    </div>
                    
                    </p>
                    <p className="App-header-text-2">
                        {this.state.text[119]}
                    </p>
                    
                    <p className="App-text">
                    {this.state.text[18]}<br/><br/>
                    {this.state.text[19]}<br/><br/>
                    {this.state.text[20]}<br/><br/>
                    {this.state.text[21]}<br/><br/>
                    </p>
                </div>

            </div>

        )
    }
}

export default About;
