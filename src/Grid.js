import React from 'react';
import { Row, Col, Popover } from 'antd';
import './Grid.css';
import WorkshopMenu from './WorkshopMenu.js';
import { SHEET_LOAD, SHEET_INFO } from './SheetUtil';

class WorkshopGrid extends React.Component {
    state = {
        workshops: [],
        error: null
    }

    componentDidMount() {
        window.gapi.load("client", this.initClient);
    }

    initClient = () => {
        window.gapi.client
            .init({
                apiKey: SHEET_INFO.apiKey,
                discoveryDocs: SHEET_INFO.discoveryDocs
            })
            .then(() => {
                SHEET_LOAD(this.onLoad);
        });
    }

    onLoad = (data, error) => {
        if (data) {
            var temp = data.workshops;
            var workshops = [];
            temp.map((ws, i) => {workshops.push(ws)});
            this.setState({ workshops });
        } else {
            this.setState({ error });
        }
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>;
        }
        
        // EXAMPLE. REMOVE THIS LINE LATER!
        console.log(this.state.workshops);
        
        const mycontent = (
            <div>
                <p>Instructor(s)</p>
                <p>Description</p>
            </div>
        );
        const mytagline = "Title";
        const myworkshopName = "Category";
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