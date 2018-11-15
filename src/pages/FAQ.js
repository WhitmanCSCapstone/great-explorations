import React, { Component } from 'react';
import './../App.css';
import { Collapse } from 'antd';

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
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                    <p className="App-header-text">
                        FAQ (Frequently Asked Questions)
                    </p>
                </div>
                <div>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="How do I change my registration?" key="1" style={customPanelStyle}>
                          <p> If it is a small change, feel free to call or email us to
                              make the change. Otherwise, you may reregister under the same 
                              name and email and your information and preferences will be saved. </p>
                        </Panel>
                        <Panel header="How do I register?" key="2" style={customPanelStyle}>
                          <p> Please navigate to our "Registration" page in the top left corner
                              of the browser and scroll down to our registration form. You will
                              not be registered until you click "Submit" on the last page of 
                              the registration form. </p>
                        </Panel>
                        <Panel header="What steps does Great Explorations make to ensure my child's safety during the event?" key="3" style={customPanelStyle}>
                          <p> idk some answer. </p>
                        </Panel>
                      </Collapse>
                </div>

            </div>
        
        )
    }
}

export default FAQ;