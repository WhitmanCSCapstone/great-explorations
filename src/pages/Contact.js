import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2025GE_EN.pdf';
import brochureEs from './../brochures/2025GE_ES.pdf';

class Contact extends Component {

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
                <div>
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
                        {this.state.text[110]}
                    </p>

                    <p className="App-text-subheader">
                        {this.state.text[111]}<br></br><br></br>
                        <ul className="App-text">
                            <li>{this.state.text[112]}</li>
                            <li>{this.state.text[113]}</li>
                            <li>{this.state.text[114]}</li>
                        </ul>
                    </p>
                </div>

            </div>

        )
    }
}

export default Contact;
