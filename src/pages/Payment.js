import React, { Component } from 'react';
import './../App.css';
import { Collapse } from 'antd';

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
                </div>
                <div>
                    <Collapse bordered={true} defaultActiveKey={['3']}>
                        <Panel header="Pay online" key="1" style={customPanelStyle}>
                            <p> 
                                Click on the button below to pay the $5 fee online. <br></br><br></br>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="X96WALSTDBZR8" />
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>


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
                                Please mail $5 cash or a check (payable to Great Explorations in Education) to the following address  no later than Wednesday, March 6. Be sure to include your name, home phone, school, and grade with your payment! <br></br><br></br>
                                Great Explorations<br></br>
                                Carol Morgan<br></br>
                                1765 Gray Lynn Drive<br></br>
                                Walla Walla, WA 99362
                            </p>
                        </Panel>
                        
                    </Collapse>
                </div>

            </div>
        
        )
    }
}

export default Payment;