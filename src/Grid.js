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

    createWorkshops = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 5; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 1; j < 7; j++) {
                let mynum = 6 * i + j;
                children.push(<Col className="gutter-row" span={4}>
                              <div className="gutter-box"> Workshop {mynum} </div>
                              </Col>
                             )
            }
            //Create the parent and add the children
            table.push(<Row gutter={60}>{children}</Row>
                      )
        }
        return table
    }
    
    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>;
        }
        
        // EXAMPLE. REMOVE THIS LINE LATER!
        console.log(this.state.workshops);
        
        const mycontent = (
            <div>
                <p>{this.state.people.map((person, i) => (
                <div>{person.instructor}</div>
              ))}</p>
                <p>{this.state.people.map((person, i) => (
                <div>{person.description}</div>
              ))}</p>
            </div>
        );
        const mytagline = "Title";
        const myworkshopName = "Category";
        return (
            <div className="gutter-example">
                {this.createWorkshops()}
            
            </div>
        )
    }
}

export default WorkshopGrid
