import React, { Component } from 'react';
import './../App.css';
import pic1 from './../grex_images/Perron.jpg';
// import pic2 from './../grex_images/rachel_salt.jpg';
// import pic3 from './../grex_images/salt_books.jpg';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2025GE_EN.pdf';
import brochureEs from './../brochures/2025GE_ES.pdf';

//we are now referring to Keynote as Wecome, so that tab on the website has been changed

class Keynote extends Component {

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

    // 2025: fixed security issue by adding rel="noreferrer noopener to all <a elements and adjusted for mobile devices"
    render() {
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
                    </p>
                    <p className="App-header-text">
                        {this.state.text[76]}
                    </p>

                    <p className="App-text">  {/*from App-header-text-2*/}
                        <center>{this.state.text[77]}<br/>{this.state.text[78]}</center>
                    </p>

                    <div><h3><img src={pic1} height="300px" alt="logo" /></h3></div>
                    <p className="App-text">
                    {/*<center><span class="picture">{this.state.text[79]}</span><br/><br/></center>*/}
                    {this.state.text[81]}<br/><br/>
                    {this.state.text[82]}<br/><br/>
                    {this.state.text[83]}<br/><br/>
                    </p>
                    {/*<div><h3><img src={pic2} height="350px" alt="logo" /></h3></div>*/}
                    {/*<p className="picture">{this.state.text[79]}</p>*/}

                    {/*  secondary heading for special guest - comment out if no special guest*/}
                    {/* <p className="App-header-text-2">
                        <center>{this.state.text[84]}</center>
                    </p>
                    <div><h3><img src={pic2} height="300px" alt="logo" /></h3></div>
                    <p className="App-text">
                    {this.state.text[85]}<br/><br/>
                    {this.state.text[125]}<br/><br/>
                    {this.state.text[126]}<br/><br/>
                    </p>
                    {<div><h3><img src={pic3} height="350px" alt="logo" /></h3></div>} */}
                </div>
            </div>

        )
    }
}

export default Keynote;
