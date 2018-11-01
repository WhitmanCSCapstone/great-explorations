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
    
    createPopup = () => {
        let button = []
        
        const content = (
            <div>
                <p>Julie Lauenburg: Art Educator; Mira Gobel: Principal</p>
                <p>Fuse physics and art with pendulum painting! Warning: could be messy.</p>
            </div>
        );
        const tagline = "Art of the Pendulum";
        const workshopName = "Art in Physics";
        
        button.push(<Popover content={content} title={ tagline } 
                    trigger="hover" overlayStyle={{ width: "300px" }}>
                        <div className="gutter-box"> { workshopName } </div>
                    </Popover>
                   )
        
        return button
        
    }

    createWorkshops2 = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 5; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 1; j < 7; j++) {
                let mynum = 6 * i + j;
                children.push(<Col className="gutter-row" span={4}>
                              {this.createPopup()}
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
        
        return (
            <div className="gutter-example">
                {this.createWorkshops2()}
            
            </div>
        )
    }
}

export default WorkshopGrid
