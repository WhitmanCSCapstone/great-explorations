import React, { Component } from 'react';
import './../App.css';
import { Collapse, Button } from 'antd';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/GE2019En.pdf';
import brochureEs from './../brochures/GE2019Es.pdf';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  fontSize: '2vw',
  borderRadius: 4,
  overflow: 'hidden',
};

class Payment extends Component {

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
                      {this.state.text[41]}
                    </p>

                    <Collapse bordered={true} defaultActiveKey={['3']}>
                        <Panel header={this.state.text[42]} key="1" style={customPanelStyle}>
                            <p>
                                <Button type="primary" onClick={() => {
                                    window.location.replace("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X96WALSTDBZR8&source=url");
                                }}>
                                  {this.state.text[43]}
                                </Button>
                            </p>
                        </Panel>
                        <Panel header={this.state.text[44]} key="2" style={customPanelStyle}>
                            <p>
                                {this.state.text[45]}<br></br><br></br>
                                {this.state.text[46]}<br></br>
                                {this.state.text[47]}<br></br>
                                {this.state.text[48]}
                            </p>
                        </Panel>
                        <Panel header={this.state.text[49]} key="3" style={customPanelStyle}>
                            <p>
                                {this.state.text[50]}<br></br><br></br>
                                {this.state.text[51]}<br></br>
                                {this.state.text[52]}<br></br>
                                {this.state.text[53]}<br></br>
                                {this.state.text[54]}
                            </p>
                        </Panel>
                        <Panel header={this.state.text[55]} key="4" style={customPanelStyle}>
                            <p>
                                {this.state.text[56]}<br></br><br></br>
                                {this.state.text[57]}<br></br>
                                {this.state.text[58]}
                            </p>
                        </Panel>

                    </Collapse>
                </div>

            </div>

        )
    }
}

export default Payment;
