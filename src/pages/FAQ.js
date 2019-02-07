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
        const registerList = [
          {description: 'Register online at https://gewallawalla.com/registration', key: 0},
          {description: 'Mail the registration form to Great Explorations, c/o Carol Morgan 1765 Gray Lynn Dr, Walla Walla, WA 99362.', key: 1},
          {description: 'Drop off the completed registration form and payment at the YWCA, 213 S. First St, Walla Walla, WA, 509-525-2570 (open M-Th, 9a-6p; Fri 8:30a-5:30p).', key: 2}
        ];

        const paymentList = [
          {description: 'Pay online during online registration. You may also pay using an option below if you register online.', key: 0},
          {description: 'Mail $5 cash or a check (payable to Great Explorations) to: Great Explorations, c/o Carol Morgan 1765 Gray Lynn Dr, Walla Walla, WA 99362.  Include a copy of the student\'s registration form or include the student\'s full name, address, a phone number where a parent or student can be reached, school and grade.', key: 1},
          {description: 'Drop off $5 cash or check to the YWCA, 213 S. First St, Walla Walla, WA, 509-525-2570 (open M-Th, 9a-6p; Fri 8:30a-5:30p).  Include a copy of the student\'s registration form or include the student\'s full name, address a phone number where a parent or student can be reached, school and grade.', key: 2}
        ];

        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        FAQ (Frequently Asked Questions)
                    </p>
                </div>
                <div>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="PRE-REGISTRATION IS REQUIRED" key="1" style={customPanelStyle}>
                          <p> We can only accommodate approximately 450 students. In 2017, those spots were all filled a week before the conference. Students who register after the conference is full will be placed on a waiting list and notified if space becomes available. Some students on the waiting list will be able to attend the conference due to cancellations prior to March 9th and/or no-shows the day of the conference. Students on the waiting list who are not admitted to the conference will have their registration fee returned shortly after the conference. </p>
                        </Panel>
                        <Panel header="How do I register?" key="2" style={customPanelStyle}>
                          <p> There are three ways to register: <br></br>
                              <ol>
                                {registerList.map(reg => {
                                  return (
                                    <li key={reg.key}>{reg.description}</li>
                                  );
                                })}
                              </ol>
                            Printed registration forms are also available at the YWCA and most area schools.
                          </p>
                        </Panel>
                        <Panel header="How much does the conference cost?" key="3" style={customPanelStyle}>
                          <p> The registration fee is $5 per person. Scholarships are available…contact Carol no later than Wed, March 6: call 509-520-9977 or email gewallawalla@gmail.com </p>
                        </Panel>
                        <Panel header="How do I pay?" key="4" style={customPanelStyle}>
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
                        <Panel header="Student Pick-Up/Drop-Off" key="5" style={customPanelStyle}>
                          <p> Students should be dropped off at Cordiner Hall (corner of S Park St and Boyer Ave) between 8:20 am and 8:50 am on Saturday, March 9th. Students can be picked up at the same location at 2:45 pm. </p>
                        </Panel>
                        <Panel header="Lunch" key="6" style={customPanelStyle}>
                          <p> Lunch will be provided. We cannot accommodate special dietary needs. If your student needs special foods, we recommend the student bring a lunch. Water and fresh fruit will also be provided. </p>
                        </Panel>
                        <Panel header="Student Safety" key="7" style={customPanelStyle}>
                          <p> All students are escorted by known adult volunteers from/to Cordiner Hall to/from the classrooms in Science and Olin Halls and to/from the classrooms to lunch.  Hall monitors in the classroom hallways are on duty at all times to help students who need to leave a classroom (bathroom, illness, etc).  A registered nurse is available to help students who are not feeling well. All adult volunteers will be wearing lime green vests to make them visible to the girls. </p>
                        </Panel>
                        <Panel header="Parents/Visitors to Workshops" key="8" style={customPanelStyle}>
                          <p> Parents are not allowed to attend the classroom workshops, but are encouraged to attend the Keynote Presentation in Cordiner Hall at 9 a.m.  The workshop classrooms are not large enough to accommodate additional people beyond the presenters and the students. </p>
                        </Panel>
                      </Collapse>
                </div>

            </div>

        )
    }
}

export default FAQ;
