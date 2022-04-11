import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/GE2022En.pdf';
import brochureEs from './../brochures/GE2022Es.pdf';

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
