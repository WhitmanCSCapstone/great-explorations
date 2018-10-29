import React from 'react';
import { Row, Col, Popover } from 'antd';
import './Grid.css';
import WorkshopMenu from './WorkshopMenu.js';
import { SHEET_DATA, SHEET_LOAD } from "./SheetUtil";

class WorkshopGrid extends React.Component {
    state = {
    people: [],
    error: null,
    show: false
    }

    initClient = () => {
    window.gapi.client
      .init({
        apiKey: SHEET_DATA.apiKey,
        discoveryDocs: SHEET_DATA.discoveryDocs
      })
      .then(() => {
      SHEET_LOAD(this.onLoad);
    });
    };

    onLoad = (data, error) => {
    if (data) {
      const people = data.people;
      this.setState({ people });
    } else {
      this.setState({ error });
    }
    };

    componentDidMount() {
    window.gapi.load("client", this.initClient);
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
        const mytagline = "Tagline";
        const myworkshopName = "Workshop Title";
        
        return (
            <div className="gutter-example">
                {this.createWorkshops()}
            
            </div>
        )
    }
}

export default WorkshopGrid