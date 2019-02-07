import React, { Component } from 'react';
import './../App.css';
import EmbedForm from './../components/EmbedForm.js';
import WorkshopGrid from './../components/Grid.js';
import ImageScroll from './../components/ImageScroll.js';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';

class Registration extends Component {

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
                        <ImageScroll />
                    </p>
                    <p className="App-header-text">
                        {this.state.text[8]}<br></br>
                        <center style={{ fontSize: '2vw', color: 'black', fontWeight: '400'}}>{this.state.text[9]}</center>
                    </p>

                    <p className="App-text">
                        <center>{this.state.text[10]}<br></br></center>
                                <center style={{ fontStyle: 'oblique' , fontWeight: '600'}}>{this.state.text[11]}</center><br></br>
                                <center>{this.state.text[12]}</center>
                    </p>
                    <p className="App-text-small">
                      {this.state.text[13]}<br></br>
                    </p>
                    <p className="App-header-text">
                        <WorkshopGrid />
                    </p>
                    <p className="App-header-text">
                        <EmbedForm />
                    </p>
                </div>

            </div>

        )
    }
}

export default Registration;
