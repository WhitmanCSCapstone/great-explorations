import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2025GE_EN.pdf';
import brochureEs from './../brochures/2025GE_ES.pdf';

class Schedule extends Component {

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
                        <a target="_blank" rel="noreferrer noopener" href={brochureEn} style={{ fontSize: 'clamp(.1rem, 1vw, 2rem) !important', whiteSpace: 'nowrap' }}>
                            English Brochure Download
                        </a>
                        <span style={{ padding: '0 15px' }}>&nbsp;</span> {/* Added spacing between the two links */}
                        <a target="_blank" rel="noreferrer noopener" href={brochureEs} style={{ fontSize: 'clamp(.1rem, 1vw, 2rem) !important', whiteSpace: 'nowrap' }}>
                            Descargar Folleto en Español
                        </a>
                    </p>
                    <p className="App-header-text">
                        {this.state.text[22]}
                        <center style={{ fontSize: 'clamp(1rem, 1.7vw, 1.5rem)', color: 'darkblue', fontWeight: '400'}}>{this.state.text[23]}</center>
                        <center style={{ fontSize: 'clamp(1rem, 1.7vw, 1.5rem)', color: 'darkblue', fontWeight: '400'}}>{this.state.text[24]}</center>
                    </p>

                    <p className="schedule" style={{ color: 'black' }}>
                        {this.state.text[25]} <span className="schedule">{this.state.text[26]}</span><br/>
                        {this.state.text[27]}<span className="schedule">{this.state.text[28]}</span><br/>
                        {this.state.text[29]}<span className="schedule">{this.state.text[30]}</span><br/>
                        {this.state.text[31]}<span className="schedule">{this.state.text[32]}</span><br/>
                        {this.state.text[33]}<span className="schedule">{this.state.text[34]}</span><br/>
                        {this.state.text[35]}<span className="schedule">{this.state.text[36]}</span><br/>
                        {this.state.text[37]}<span className="schedule">{this.state.text[38]}</span><br/><br/>
                        {this.state.text[120]}<br/><br/>
                        {this.state.text[122]}
                    </p>
                    <p className="App-header-text">
                        {this.state.text[39]}
                        <center style={{ fontSize: 'clamp(1rem, 1.7vw, 1.5rem)', color: 'darkblue', fontWeight: '400'}}>{this.state.text[40]}</center>
                    </p>
                </div>
            </div>
        )
    }
}

export default Schedule;
