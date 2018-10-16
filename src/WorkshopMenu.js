import React from 'react';
import { Row, Col, Popover } from 'antd';
import './Grid.css';

class WorkshopMenu extends React.Component {
    render() {
        const content = (
            <div>
                <p>Instructor</p>
                <p>Description</p>
            </div>
        );
        const tagline = "Tagline";
        const workshopName = "Workshop 1";
        return( 
            <Popover content={content} title={ tagline } trigger="hover">
                        <div className="gutter-box"> { workshopName } </div>
            </Popover>
        )
    }
}

export default WorkshopMenu;