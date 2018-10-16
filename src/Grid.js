import React from 'react';
import { Row, Col, Popover } from 'antd';
import './Grid.css';
import WorkshopMenu from './WorkshopMenu.js';

class WorkshopGrid extends React.Component {
    render() {
        const mycontent = (
            <div>
                <p>Julie Lauenburg: Art Educator; Mira Gobel: Principal</p>
                <p>Fuse physics and art with pendulum painting! Warning: could be messy.</p>
            </div>
        );
        const mytagline = "Art of the Pendulum";
        const myworkshopName = "Art in Physics";
        
        return (
            <div className="gutter-example">
                <Row gutter={36}>
                  <Col className="gutter-row" span={8}>
                    <WorkshopMenu/>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <Popover content={mycontent} title={ mytagline } trigger="hover">
                        <div className="gutter-box"> { myworkshopName } </div>
                    </Popover>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="gutter-box"> Workshop 3 </div>
                  </Col>
                </Row>
                <Row gutter={36}>
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