import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2023GE_EN_Mini.pdf';
import brochureEs from './../brochures/2023GE_ES_Mini.pdf';

class Sponsors extends Component {

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
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                <p className="App-text">
                    <center style={{ fontSize: '1.25vw', color: 'black', fontWeight: '200'}}>
<a target="_blank" href={brochureEn}>English Brochure Download</a>
{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
<a target="_blank" href={brochureEs}>Descargar Folleto en Español</a>
</center>
                </p>
                    <p className="App-header-text">
                        {this.state.text[59]}
                    </p>

                    <p className="App-text-subheader">
                        {this.state.text[60]}<br></br><br></br>
                        <ul className="App-text">
                        <li>{this.state.text[61]}</li>
                        <li>{this.state.text[62]}</li>
                        <li>{this.state.text[63]}</li>
                        <li>{this.state.text[64]}</li>
                        </ul>
                      </p>
                      <p className="App-text-subheader">
                        {this.state.text[65]}<br></br><br></br>
                        <ul className="App-text">
                        <li>{this.state.text[66]}</li>
                        <li>{this.state.text[67]}</li>
                        <li>{this.state.text[68]}</li>
                        <li>{this.state.text[69]}</li>
                        <li>{this.state.text[70]}</li>
                        </ul>
                      </p>
                      <p className="App-text-subheader">
                        {this.state.text[72]}<br></br><br></br>
                        <ul className="App-text">
                        <li>{this.state.text[73]}</li>
                        <li>{this.state.text[74]}</li>
                        <li>{this.state.text[75]}</li>
                        </ul>
                      </p>
                </div>

            </div>

        )
    }
}

export default Sponsors;
