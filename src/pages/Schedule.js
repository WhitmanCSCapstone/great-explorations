import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/GE2022En.pdf';
import brochureEs from './../brochures/GE2022Es.pdf';

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

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                <p className="App-text">
                    <center style={{ fontSize: '1.25vw', color: 'black', fontWeight: '200'}}>
<a target="_blank" href={brochureEn}>English Brochure Download</a>
{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
<a target="_blank" href={brochureEs}>Descargar Folleto en Español</a>
</center>
                </p>
                  <p className="App-header-text">
                    {this.state.text[22]}
                    <center style={{ fontSize: '1.7vw', color: 'darkblue', fontWeight: '400'}}>{this.state.text[23]}</center>
                    <center style={{ fontSize: '1.7vw', color: 'darkblue', fontWeight: '400'}}>{this.state.text[24]}</center>
                    </p>

                    <p className="App-text">
                    {this.state.text[25]} <span class="schedule">{this.state.text[26]}</span><br/>
                    {this.state.text[27]}<span class="schedule">{this.state.text[28]}</span><br/>
                    {this.state.text[29]}<span class="schedule">{this.state.text[30]}</span><br/>
                    {this.state.text[31]}<span class="schedule">{this.state.text[32]}</span><br/>
                    {this.state.text[33]}<span class="schedule">{this.state.text[34]}</span><br/>
                    {this.state.text[35]}<span class="schedule">{this.state.text[36]}</span><br/>
                    {this.state.text[122]}<span class="schedule">{this.state.text[36]}</span><br/>
                    {this.state.text[123]}<span class="schedule">{this.state.text[36]}</span><br/>
                    {this.state.text[37]}<span class="schedule">{this.state.text[38]}</span><br/><br/><br/>
                    </p>
                    <p className="App-text">
                    <span class="App-text-small">{this.state.text[39]}</span> {this.state.text[40]}
                    </p>
                </div>
            </div>
        )
    }
}

export default Schedule;
