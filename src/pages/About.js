import React, { Component } from 'react';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';

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
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                      {this.state.text[17]}
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
