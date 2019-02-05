import React, { Component } from 'react';
import './../App.css';
import { Collapse, Button } from 'antd';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  fontSize: '2vw',
  borderRadius: 4,
  overflow: 'hidden',
};

class Payment extends Component {
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        Payment Options
                    </p>
                    <Collapse bordered={true} defaultActiveKey={['3']}>
                        <Panel header="Pay online" key="1" style={customPanelStyle}>
                            <p>
                                <Button type="primary" onClick={() => {
                                    window.location.replace("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X96WALSTDBZR8&source=url");
                                }}>
                                    Make $5 Payment Online
                                </Button>
                            </p>
                        </Panel>
                        <Panel header="Pay at the YWCA" key="2" style={customPanelStyle}>
                            <p> 
                                Drop off $5 in cash or check (payable to Great Explorations in Education) in person at the Walla Walla YWCA no later than 5:30pm on Wednesday, March 6. Be sure to include your name, home phone, school, and grade with your payment! <br></br><br></br>
                                YWCA <br></br>
                                213 S. First Avenue <br></br>
                                Walla Walla, WA 99362
                            </p>
                        </Panel>
                        <Panel header="Pay by mail" key="3" style={customPanelStyle}>
                            <p> 
                                Mail $5 cash or check (payable to Great Explorations in Education) to the following address  no later than Wednesday, March 6. Be sure to include your name, home phone, school, and grade with your payment! <br></br><br></br>
                                Great Explorations<br></br>
                                Carol Morgan<br></br>
                                1765 Gray Lynn Drive<br></br>
                                Walla Walla, WA 99362
                            </p>
                        </Panel>
                        <Panel header="Request Scholarship" key="4" style={customPanelStyle}>
                            <p> 
                                If you would like to request a scholarship to cover the $5 fee, please call or email Carol Morgan no later than Wednesday, March 6:<br></br><br></br>
                                Call: (509) 520-9977 <br></br>
                                Email: gewallawalla@gmail.com
                            </p>
                        </Panel>
                        
                    </Collapse>
                </div>

            </div>
        
        )
    }
}

export default Payment;
