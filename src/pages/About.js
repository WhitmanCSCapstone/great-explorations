import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './../App.css';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/GE2022En.pdf';
import brochureEs from './../brochures/GE2022Es.pdf';
import pic1 from "../grex_images/2022GEHeader.jpg";

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
                    <p className="App-text">
                        <center style={{ fontSize: '1.25vw', color: 'black', fontWeight: '200'}}>
<a target="_blank" href={brochureEn}>English Brochure Download</a>
{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
<a target="_blank" href={brochureEs}>Descargar Folleto en Español</a>
</center>
                    </p>
                    <div><h3><img src={pic1} height="100px" alt="logo" /></h3></div>

                    <p className="App-header-text">
                      {this.state.text[17]}
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
