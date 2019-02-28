import React, { Component } from 'react';
import './../App.css';
import { Collapse } from 'antd';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/GE2019En.pdf';
import brochureEs from './../brochures/GE2019Es.pdf';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  fontSize: '2vw',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class FAQ extends Component {

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
        const registerList = [
          {description: this.state.text[90], key: 0},
          {description: this.state.text[91], key: 1},
          {description: this.state.text[92], key: 2}
        ];

        const paymentList = [
          {description: this.state.text[97], key: 0},
          {description: this.state.text[98], key: 1},
          {description: this.state.text[99], key: 2}
        ];

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
                        {this.state.text[85]}
                    </p>

                </div>
                <div>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header={this.state.text[86]} key="1" style={customPanelStyle}>
                          <p>{this.state.text[87]}</p>
                        </Panel>
                        <Panel header={this.state.text[88]} key="2" style={customPanelStyle}>
                          <p>{this.state.text[89]}<br></br>
                              <ol>
                                {registerList.map(reg => {
                                  return (
                                    <li key={reg.key}>{reg.description}</li>
                                  );
                                })}
                              </ol>
                            {this.state.text[93]}
                          </p>
                        </Panel>
                        <Panel header={this.state.text[94]} key="3" style={customPanelStyle}>
                          <p>{this.state.text[95]}</p>
                        </Panel>
                        <Panel header={this.state.text[96]} key="4" style={customPanelStyle}>
                          <p>
                            <ol>
                                {paymentList.map(pay => {
                                  return (
                                    <li key={pay.key}>{pay.description}</li>
                                  );
                                })}
                              </ol>
                          </p>
                        </Panel>
                        <Panel header={this.state.text[100]} key="5" style={customPanelStyle}>
                          <p>{this.state.text[101]}</p>
                        </Panel>
                        <Panel header={this.state.text[102]} key="6" style={customPanelStyle}>
                          <p>{this.state.text[103]}</p>
                        </Panel>
                        <Panel header={this.state.text[104]} key="7" style={customPanelStyle}>
                          <p>{this.state.text[105]}</p>
                        </Panel>
                        <Panel header={this.state.text[106]} key="8" style={customPanelStyle}>
                          <p>{this.state.text[107]}</p>
                        </Panel>
                      </Collapse>
                </div>
            </div>
        )
    }
}

export default FAQ;
