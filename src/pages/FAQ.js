import React, { Component } from 'react';
import './../App.css';
import { Collapse } from 'antd';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2023GE_EN_Mini.pdf';
import brochureEs from './../brochures/2023GE_ES_Mini.pdf';

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
          {description: this.state.text[91], key: 0},
          {description: this.state.text[92], key: 1},
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
                        {this.state.text[86]}
                    </p>

                </div>
                <div>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header={this.state.text[87]} key="1" style={customPanelStyle}>
                          <p>{this.state.text[88]}</p>
                        </Panel>
                        <Panel header={this.state.text[89]} key="2" style={customPanelStyle}>
                          <p>{this.state.text[90]}<br></br>
                              <ol>
                                {registerList.map(reg => {
                                  return (
                                    <li key={reg.key}>{reg.description}</li>
                                  );
                                })}
                              </ol>
                            {this.state.text[94]}
                          </p>
                        </Panel>
                        <Panel header={this.state.text[95]} key="3" style={customPanelStyle}>
                          <p>{this.state.text[96]}</p>
                        </Panel>
                        <Panel header={this.state.text[97]} key="4" style={customPanelStyle}>
                          <p>
                            {/*<ol>*/}
                            {/*    {paymentList.map(pay => {*/}
                            {/*      return (*/}
                            {/*        <li key={pay.key}>{pay.description}</li>*/}
                            {/*      );*/}
                            {/*    })}*/}
                            {/*  </ol>*/}
                              {this.state.text[98]}
                          </p>
                        </Panel>
                        <Panel header={this.state.text[101]} key="5" style={customPanelStyle}>
                          <p>{this.state.text[102]}</p>
                        </Panel>
                        <Panel header={this.state.text[103]} key="6" style={customPanelStyle}>
                          <p>{this.state.text[104]}</p>
                        </Panel>
                        <Panel header={this.state.text[105]} key="7" style={customPanelStyle}>
                          <p>{this.state.text[106]}</p>
                        </Panel>

                      </Collapse>
                </div>
            </div>
        )
    }
}

export default FAQ;
