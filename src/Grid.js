import React from 'react';
import { Row, Col, Popover } from 'antd';
import './Grid.css';
import WorkshopMenu from './WorkshopMenu.js';

class WorkshopGrid extends React.Component {
    render() {
        const mycontent = (
            <div>
                <p>Instructor(s)</p>
                <p>Description</p>
            </div>
        );
        const mytagline = "Tagline";
        const myworkshopName = "Title of Workshop";
        
        return (
            <div className="gutter-example">
                <Row gutter={50}>
                  <Col className="gutter-row" span={8}>
                    <WorkshopMenu/>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <Popover content={mycontent} title={ mytagline } trigger="hover" overlayStyle={{ width: "300px" }}>
                        <div className="gutter-box"> { myworkshopName } </div>
                    </Popover>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="gutter-box"> Workshop 3 </div>
                  </Col>
                </Row>
                <Row gutter={50}>
                  <Col className="gutter-row" span={8}>
                    <div className="gutter-box"> Workshop 4 </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="gutter-box"> Workshop 5 </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="gutter-box"> Workshop 6 </div>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default WorkshopGrid