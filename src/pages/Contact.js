import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';

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
                    <p className="App-header-text">
                        {this.state.text[108]}
                    </p>
                    <p className="App-text-subheader">
                        {this.state.text[109]}<br></br><br></br>
                        <ul className="App-text">
                            <li>{this.state.text[110]}</li>
                            <li>{this.state.text[111]}</li>
                            <li>{this.state.text[112]}</li>
                        </ul>
                    </p>
                </div>

            </div>

        )
    }
}

export default Contact;
